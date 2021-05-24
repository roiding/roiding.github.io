---
title: JPA
---



<font color="red">使用JPA就尽量不要使用原生SQL！！！！！！！</font>



## HQL

```hql
@Query("select new com.cicjust.idc.entity.VO.BankReceiptVO(ibp.id,ifp.filePath,ibp.receiptDate,ibp.payerName,ibp.receiverName,ibp.amount,ibp.foreignFee,ibp.currency) from IdcBankReceiptPO ibp left join IdcFileBasicsPO ifp on ibp.basicsId=ifp.id " +
            "and (#{#dto.id} is null or ibp.reconciliationBillId=#{#dto.id})" +
            "and (#{#dto.date} is null or ibp.receiptDate=#{#dto.date})" +
            "and (#{#dto.payerName} is null or ibp.payerName like concat('%',#{#dto.payerName},'%') )" +
            "and (#{#dto.receiverName} is null or ibp.receiverName like concat('%',#{#dto.receiverName},'%') )order by ibp.receiptDate asc")
    Page<BankReceiptVO> findAllByReconciliationBillId(@Param("dto") BankReceiptDTO dto, Pageable page);
```



## 动态条件（不好用）

```java
 Page<IdcHandoverReceiptPO> result = idcHandoverReceiptDao.findAll((Specification<IdcHandoverReceiptPO>) (root, criteriaQuery, criteriaBuilder) -> {
            Predicate predicate = criteriaBuilder.conjunction();
            String companyNameOrTaxNum = handoverReceiptConditionDto.getCompanyNameOrTaxNum();
            String periodId = handoverReceiptConditionDto.getPeriodId();
            Integer status = handoverReceiptConditionDto.getStatus();


            if (status.intValue() != HandoverReceiptStatusEnum.ALL.getValue()) {
                //查询全部状态
                predicate.getExpressions().add(
                        criteriaBuilder.and(root.<IdcHandoverReceiptPO>get("status").in(status))
                );
            }
            if (!StringUtils.isBlank(companyNameOrTaxNum)) {
                Predicate p1 = criteriaBuilder.like(root.get("taxNumber"), "%"+companyNameOrTaxNum+"%");
                Predicate p2 = criteriaBuilder.like(root.get("companyName"), "%"+companyNameOrTaxNum+"%");
                predicate.getExpressions().add(
                        criteriaBuilder.or(p1, p2)
                );
            }
            if (!StringUtils.isBlank(periodId)) {
                predicate.getExpressions().add(
                        criteriaBuilder.and(root.<IdcHandoverReceiptPO>get("periodId").in(periodId))
                );
            }
            //taxNumber在用户的权限列表内
            predicate.getExpressions().add(
                    criteriaBuilder.and(root.get("taxNumber").in(allLocalUserPassedAccountTaxNumer))
            );


            return predicate;
        },pageable);
```

