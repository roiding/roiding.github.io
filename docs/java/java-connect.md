---
title: JAVA连接常用软件
head:
  - - meta
    - name: keywords
      content: Java连接常用软件
---
## FastDFS
### 安装 FastDFS Java 客户端  
> 从 GitHub 克隆源码
```bash
git clone https://github.com/happyfish100/fastdfs-client-java.git
```  
> 从源码安装并部署到 Nexus
部署前别忘记在 pom.xml 中增加 Nexus 相关配置，配置代码如下：
```xml
<distributionManagement>
    <repository>
        <id>nexus-releases</id>
        <name>Nexus Release Repository</name>
        <url>http://192.168.75.128:8081/repository/maven-releases/</url>
    </repository>
    <snapshotRepository>
        <id>nexus-snapshots</id>
        <name>Nexus Snapshot Repository</name>
        <url>http://192.168.75.128:8081/repository/maven-snapshots/</url>
    </snapshotRepository>
</distributionManagement>
```
```bash
mvn clean install deploy
```  
### 在项目中添加依赖
```xml
<!-- FastDFS Begin -->
<dependency>
    <groupId>org.csource</groupId>
    <artifactId>fastdfs-client-java</artifactId>
    <version>1.27-SNAPSHOT</version>
</dependency>
<!-- FastDFS End -->
```  
### 创建 FastDFS 工具类  
> 定义文件存储服务接口
```java
/**
 * 文件存储服务接口
 * <p>Title: StorageService</p>
 * <p>Description: </p>
 *
 * @author Lusifer
 * @version 1.0.0
 * @date 2018/8/14 5:22
 */
public interface StorageService {
    /**
     * 上传文件
     *
     * @param data    文件的二进制内容
     * @param extName 扩展名
     * @return 上传成功后返回生成的文件id；失败，返回null
     */
    public String upload(byte[] data, String extName);

    /**
     * 删除文件
     *
     * @param fileId 被删除的文件id
     * @return 删除成功后返回0，失败后返回错误代码
     */
    public int delete(String fileId);
}
```  
> 实现文件存储服务接口
```
import org.csource.common.NameValuePair;
import org.csource.fastdfs.ClientGlobal;
import org.csource.fastdfs.StorageClient1;
import org.csource.fastdfs.StorageServer;
import org.csource.fastdfs.TrackerClient;
import org.csource.fastdfs.TrackerGroup;
import org.csource.fastdfs.TrackerServer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * 文件存储服务实现
 * <p>Title: FastDFSStorageService</p>
 * <p>Description: </p>
 *
 * @author Lusifer
 * @version 1.0.0
 * @date 2018/8/14 5:27
 */
public class FastDFSStorageService implements StorageService, InitializingBean {
    private static final Logger logger = LoggerFactory.getLogger(FastDFSStorageService.class);

    private TrackerClient trackerClient;

    @Value("${storage.fastdfs.tracker_server}")
    private String trackerServer;

    @Override
    public String upload(byte[] data, String extName) {
        TrackerServer trackerServer = null;
        StorageServer storageServer = null;
        StorageClient1 storageClient1 = null;
        try {
            NameValuePair[] meta_list = null; // new NameValuePair[0];

            trackerServer = trackerClient.getConnection();
            if (trackerServer == null) {
                logger.error("getConnection return null");
            }
            storageServer = trackerClient.getStoreStorage(trackerServer);
            storageClient1 = new StorageClient1(trackerServer, storageServer);
            String fileid = storageClient1.upload_file1(data, extName, meta_list);
            logger.debug("uploaded file <{}>", fileid);
            return fileid;
        } catch (Exception ex) {
            logger.error("Upload fail", ex);
            return null;
        } finally {
            if (storageServer != null) {
                try {
                    storageServer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (trackerServer != null) {
                try {
                    trackerServer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            storageClient1 = null;
        }
    }

    @Override
    public int delete(String fileId) {
//        System.out.println("deleting ....");
        TrackerServer trackerServer = null;
        StorageServer storageServer = null;
        StorageClient1 storageClient1 = null;
        int index = fileId.indexOf('/');
        String groupName = fileId.substring(0, index);
        try {
            trackerServer = trackerClient.getConnection();
            if (trackerServer == null) {
                logger.error("getConnection return null");
            }
            storageServer = trackerClient.getStoreStorage(trackerServer, groupName);
            storageClient1 = new StorageClient1(trackerServer, storageServer);
            int result = storageClient1.delete_file1(fileId);
            return result;
        } catch (Exception ex) {
            logger.error("Delete fail", ex);
            return 1;
        } finally {
            if (storageServer != null) {
                try {
                    storageServer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (trackerServer != null) {
                try {
                    trackerServer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            storageClient1 = null;
        }
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        File confFile = File.createTempFile("fastdfs", ".conf");
        PrintWriter confWriter = new PrintWriter(new FileWriter(confFile));
        confWriter.println("tracker_server=" + trackerServer);
        confWriter.close();
        ClientGlobal.init(confFile.getAbsolutePath());
        confFile.delete();
        TrackerGroup trackerGroup = ClientGlobal.g_tracker_group;
        trackerClient = new TrackerClient(trackerGroup);

        logger.info("Init FastDFS with tracker_server : {}", trackerServer);
    }
}
```  
> 文件存储服务工厂类
```
import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.AutowireCapableBeanFactory;

import java.util.HashMap;
import java.util.Map;

/**
 * 文件存储服务工厂类
 * <p>Title: StorageFactory</p>
 * <p>Description: </p>
 *
 * @author Lusifer
 * @version 1.0.0
 * @date 2018/8/14 5:28
 */
public class StorageFactory implements FactoryBean<StorageService> {

    @Autowired
    private AutowireCapableBeanFactory acbf;

    /**
     * 存储服务的类型，目前仅支持fastdfs
     */
    @Value("${storage.type}")
    private String type;

    private Map<String, Class<? extends StorageService>> classMap;

    public StorageFactory() {
        classMap = new HashMap<>();
        classMap.put("fastdfs", FastDFSStorageService.class);
    }

    @Override
    public StorageService getObject() throws Exception {
        Class<? extends StorageService> clazz = classMap.get(type);
        if (clazz == null) {
            throw new RuntimeException("Unsupported storage type [" + type + "], valid are " + classMap.keySet());
        }

        StorageService bean = clazz.newInstance();
        acbf.autowireBean(bean);
        acbf.initializeBean(bean, bean.getClass().getSimpleName());
        return bean;
    }

    @Override
    public Class<?> getObjectType() {
        return StorageService.class;
    }

    @Override
    public boolean isSingleton() {
        return true;
    }
}
```  
> 配置文件存储服务工厂类  
```
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Java 配置方式定义 StorageFactory 的 Bean 使其可以被依赖注入
 * <p>Title: FastDFSConfiguration</p>
 * <p>Description: </p>
 *
 * @author Lusifer
 * @version 1.0.0
 * @date 2018/8/14 5:28
 */
@Configuration
public class FastDFSConfiguration {
    @Bean
    public StorageFactory storageFactory() {
        return new StorageFactory();
    }
}
```  
> 创建 FastDFS 控制器  
1. 增加云配置
```
fastdfs.base.url: http://192.168.75.128:8888/
storage:
  type: fastdfs
  fastdfs:
    tracker_server: 192.168.75.128:22122
```  
2. 控制器代码
```
import com.funtl.itoken.service.upload.fastdfs.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UploadController {
    @Value("${fastdfs.base.url}")
    private String FASTDFS_BASE_URL;

    @Autowired
    private StorageService storageService;

    /**
     * 文件上传
     *
     * @param dropFile    Dropzone
     * @param editorFiles wangEditor
     * @return
     */
    @RequestMapping(value = "upload", method = RequestMethod.POST)
    public Map<String, Object> upload(MultipartFile dropFile, MultipartFile[] editorFiles) {
        Map<String, Object> result = new HashMap<>();

        // Dropzone 上传
        if (dropFile != null) {
            result.put("fileName", writeFile(dropFile));
        }

        // wangEditor 上传
        if (editorFiles != null && editorFiles.length > 0) {
            List<String> fileNames = new ArrayList<>();

            for (MultipartFile editorFile : editorFiles) {
                fileNames.add(writeFile(editorFile));
            }

            result.put("errno", 0);
            result.put("data", fileNames);
        }

        return result;
    }

    /**
     * 将图片写入指定目录
     *
     * @param multipartFile
     * @return 返回文件完整路径
     */
    private String writeFile(MultipartFile multipartFile) {
        // 获取文件后缀
        String oName = multipartFile.getOriginalFilename();
        String extName = oName.substring(oName.lastIndexOf(".") + 1);

        // 文件存放路径
        String url = null;
        try {
            String uploadUrl = storageService.upload(multipartFile.getBytes(), extName);
            url = FASTDFS_BASE_URL + uploadUrl;
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 返回文件完整路径
        return url;
    }
}
```