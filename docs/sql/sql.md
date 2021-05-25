---
title: sql语句整理
---

# MYSQL

## 分区取前N条

```sql
SELECT
	* 
FROM
	TB AS a 
WHERE
	(
	SELECT
		count(*) 
	FROM
		TB AS b 
	WHERE
        a.分组字段=b.分组字段
		and a.分组字段 = b.分组字段 
		AND b.排序字段 <= a.排序字段 
	)<= 2 
ORDER BY
	a.分组字段,
	a.分组字段,
	a.排序字段
```

## 分组取第一条

```sql
SELECT
	a.* 
FROM
	( SELECT * FROM idc_bank_statement ORDER BY page_num asc) a 
GROUP BY
	a.period_id,
	a.tax_number;
```

