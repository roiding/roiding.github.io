import{_ as n,o as e,c as s,a as i}from"./app.7c042103.js";const a={},l=i(`<h2 id="fastdfs" tabindex="-1"><a class="header-anchor" href="#fastdfs" aria-hidden="true">#</a> FastDFS</h2><h3 id="\u5B89\u88C5-fastdfs-java-\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-fastdfs-java-\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u5B89\u88C5 FastDFS Java \u5BA2\u6237\u7AEF</h3><blockquote><p>\u4ECE GitHub \u514B\u9686\u6E90\u7801</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/happyfish100/fastdfs-client-java.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u4ECE\u6E90\u7801\u5B89\u88C5\u5E76\u90E8\u7F72\u5230 Nexus \u90E8\u7F72\u524D\u522B\u5FD8\u8BB0\u5728 pom.xml \u4E2D\u589E\u52A0 Nexus \u76F8\u5173\u914D\u7F6E\uFF0C\u914D\u7F6E\u4EE3\u7801\u5982\u4E0B\uFF1A</p></blockquote><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>distributionManagement</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>repository</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-releases<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus Release Repository<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://192.168.75.128:8081/repository/maven-releases/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>repository</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>snapshotRepository</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>nexus-snapshots<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>Nexus Snapshot Repository<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>http://192.168.75.128:8081/repository/maven-snapshots/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>snapshotRepository</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>distributionManagement</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mvn clean <span class="token function">install</span> deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5728\u9879\u76EE\u4E2D\u6DFB\u52A0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5728\u9879\u76EE\u4E2D\u6DFB\u52A0\u4F9D\u8D56" aria-hidden="true">#</a> \u5728\u9879\u76EE\u4E2D\u6DFB\u52A0\u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token comment">&lt;!-- FastDFS Begin --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.csource<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>fastdfs-client-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.27-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- FastDFS End --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA-fastdfs-\u5DE5\u5177\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-fastdfs-\u5DE5\u5177\u7C7B" aria-hidden="true">#</a> \u521B\u5EFA FastDFS \u5DE5\u5177\u7C7B</h3><blockquote><p>\u5B9A\u4E49\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u63A5\u53E3</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * \u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u63A5\u53E3
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Title: StorageService<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Description: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
 *
 * <span class="token keyword">@author</span> Lusifer
 * <span class="token keyword">@version</span> 1.0.0
 * <span class="token keyword">@date</span> 2018/8/14 5:22
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StorageService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u4E0A\u4F20\u6587\u4EF6
     *
     * <span class="token keyword">@param</span> <span class="token parameter">data</span>    \u6587\u4EF6\u7684\u4E8C\u8FDB\u5236\u5185\u5BB9
     * <span class="token keyword">@param</span> <span class="token parameter">extName</span> \u6269\u5C55\u540D
     * <span class="token keyword">@return</span> \u4E0A\u4F20\u6210\u529F\u540E\u8FD4\u56DE\u751F\u6210\u7684\u6587\u4EF6id\uFF1B\u5931\u8D25\uFF0C\u8FD4\u56DEnull
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">upload</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">,</span> <span class="token class-name">String</span> extName<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u5220\u9664\u6587\u4EF6
     *
     * <span class="token keyword">@param</span> <span class="token parameter">fileId</span> \u88AB\u5220\u9664\u7684\u6587\u4EF6id
     * <span class="token keyword">@return</span> \u5220\u9664\u6210\u529F\u540E\u8FD4\u56DE0\uFF0C\u5931\u8D25\u540E\u8FD4\u56DE\u9519\u8BEF\u4EE3\u7801
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5B9E\u73B0\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u63A5\u53E3</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import org.csource.common.NameValuePair;
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
 * \u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u5B9E\u73B0
 * &lt;p&gt;Title: FastDFSStorageService&lt;/p&gt;
 * &lt;p&gt;Description: &lt;/p&gt;
 *
 * @author Lusifer
 * @version 1.0.0
 * @date 2018/8/14 5:27
 */
public class FastDFSStorageService implements StorageService, InitializingBean {
    private static final Logger logger = LoggerFactory.getLogger(FastDFSStorageService.class);

    private TrackerClient trackerClient;

    @Value(&quot;\${storage.fastdfs.tracker_server}&quot;)
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
                logger.error(&quot;getConnection return null&quot;);
            }
            storageServer = trackerClient.getStoreStorage(trackerServer);
            storageClient1 = new StorageClient1(trackerServer, storageServer);
            String fileid = storageClient1.upload_file1(data, extName, meta_list);
            logger.debug(&quot;uploaded file &lt;{}&gt;&quot;, fileid);
            return fileid;
        } catch (Exception ex) {
            logger.error(&quot;Upload fail&quot;, ex);
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
//        System.out.println(&quot;deleting ....&quot;);
        TrackerServer trackerServer = null;
        StorageServer storageServer = null;
        StorageClient1 storageClient1 = null;
        int index = fileId.indexOf(&#39;/&#39;);
        String groupName = fileId.substring(0, index);
        try {
            trackerServer = trackerClient.getConnection();
            if (trackerServer == null) {
                logger.error(&quot;getConnection return null&quot;);
            }
            storageServer = trackerClient.getStoreStorage(trackerServer, groupName);
            storageClient1 = new StorageClient1(trackerServer, storageServer);
            int result = storageClient1.delete_file1(fileId);
            return result;
        } catch (Exception ex) {
            logger.error(&quot;Delete fail&quot;, ex);
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
        File confFile = File.createTempFile(&quot;fastdfs&quot;, &quot;.conf&quot;);
        PrintWriter confWriter = new PrintWriter(new FileWriter(confFile));
        confWriter.println(&quot;tracker_server=&quot; + trackerServer);
        confWriter.close();
        ClientGlobal.init(confFile.getAbsolutePath());
        confFile.delete();
        TrackerGroup trackerGroup = ClientGlobal.g_tracker_group;
        trackerClient = new TrackerClient(trackerGroup);

        logger.info(&quot;Init FastDFS with tracker_server : {}&quot;, trackerServer);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u5DE5\u5382\u7C7B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import org.springframework.beans.factory.FactoryBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.AutowireCapableBeanFactory;

import java.util.HashMap;
import java.util.Map;

/**
 * \u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u5DE5\u5382\u7C7B
 * &lt;p&gt;Title: StorageFactory&lt;/p&gt;
 * &lt;p&gt;Description: &lt;/p&gt;
 *
 * @author Lusifer
 * @version 1.0.0
 * @date 2018/8/14 5:28
 */
public class StorageFactory implements FactoryBean&lt;StorageService&gt; {

    @Autowired
    private AutowireCapableBeanFactory acbf;

    /**
     * \u5B58\u50A8\u670D\u52A1\u7684\u7C7B\u578B\uFF0C\u76EE\u524D\u4EC5\u652F\u6301fastdfs
     */
    @Value(&quot;\${storage.type}&quot;)
    private String type;

    private Map&lt;String, Class&lt;? extends StorageService&gt;&gt; classMap;

    public StorageFactory() {
        classMap = new HashMap&lt;&gt;();
        classMap.put(&quot;fastdfs&quot;, FastDFSStorageService.class);
    }

    @Override
    public StorageService getObject() throws Exception {
        Class&lt;? extends StorageService&gt; clazz = classMap.get(type);
        if (clazz == null) {
            throw new RuntimeException(&quot;Unsupported storage type [&quot; + type + &quot;], valid are &quot; + classMap.keySet());
        }

        StorageService bean = clazz.newInstance();
        acbf.autowireBean(bean);
        acbf.initializeBean(bean, bean.getClass().getSimpleName());
        return bean;
    }

    @Override
    public Class&lt;?&gt; getObjectType() {
        return StorageService.class;
    }

    @Override
    public boolean isSingleton() {
        return true;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u914D\u7F6E\u6587\u4EF6\u5B58\u50A8\u670D\u52A1\u5DE5\u5382\u7C7B</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Java \u914D\u7F6E\u65B9\u5F0F\u5B9A\u4E49 StorageFactory \u7684 Bean \u4F7F\u5176\u53EF\u4EE5\u88AB\u4F9D\u8D56\u6CE8\u5165
 * &lt;p&gt;Title: FastDFSConfiguration&lt;/p&gt;
 * &lt;p&gt;Description: &lt;/p&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u521B\u5EFA FastDFS \u63A7\u5236\u5668</p></blockquote><ol><li>\u589E\u52A0\u4E91\u914D\u7F6E</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fastdfs.base.url: http://192.168.75.128:8888/
storage:
  type: fastdfs
  fastdfs:
    tracker_server: 192.168.75.128:22122
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u63A7\u5236\u5668\u4EE3\u7801</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import com.funtl.itoken.service.upload.fastdfs.StorageService;
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

@CrossOrigin(origins = &quot;*&quot;, maxAge = 3600)
@RestController
public class UploadController {
    @Value(&quot;\${fastdfs.base.url}&quot;)
    private String FASTDFS_BASE_URL;

    @Autowired
    private StorageService storageService;

    /**
     * \u6587\u4EF6\u4E0A\u4F20
     *
     * @param dropFile    Dropzone
     * @param editorFiles wangEditor
     * @return
     */
    @RequestMapping(value = &quot;upload&quot;, method = RequestMethod.POST)
    public Map&lt;String, Object&gt; upload(MultipartFile dropFile, MultipartFile[] editorFiles) {
        Map&lt;String, Object&gt; result = new HashMap&lt;&gt;();

        // Dropzone \u4E0A\u4F20
        if (dropFile != null) {
            result.put(&quot;fileName&quot;, writeFile(dropFile));
        }

        // wangEditor \u4E0A\u4F20
        if (editorFiles != null &amp;&amp; editorFiles.length &gt; 0) {
            List&lt;String&gt; fileNames = new ArrayList&lt;&gt;();

            for (MultipartFile editorFile : editorFiles) {
                fileNames.add(writeFile(editorFile));
            }

            result.put(&quot;errno&quot;, 0);
            result.put(&quot;data&quot;, fileNames);
        }

        return result;
    }

    /**
     * \u5C06\u56FE\u7247\u5199\u5165\u6307\u5B9A\u76EE\u5F55
     *
     * @param multipartFile
     * @return \u8FD4\u56DE\u6587\u4EF6\u5B8C\u6574\u8DEF\u5F84
     */
    private String writeFile(MultipartFile multipartFile) {
        // \u83B7\u53D6\u6587\u4EF6\u540E\u7F00
        String oName = multipartFile.getOriginalFilename();
        String extName = oName.substring(oName.lastIndexOf(&quot;.&quot;) + 1);

        // \u6587\u4EF6\u5B58\u653E\u8DEF\u5F84
        String url = null;
        try {
            String uploadUrl = storageService.upload(multipartFile.getBytes(), extName);
            url = FASTDFS_BASE_URL + uploadUrl;
        } catch (IOException e) {
            e.printStackTrace();
        }

        // \u8FD4\u56DE\u6587\u4EF6\u5B8C\u6574\u8DEF\u5F84
        return url;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),t=[l];function r(d,c){return e(),s("div",null,t)}var u=n(a,[["render",r],["__file","java-connect.html.vue"]]);export{u as default};
