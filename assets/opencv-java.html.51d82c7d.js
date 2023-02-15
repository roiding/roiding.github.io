import{_ as t,r as i,o as l,c as o,b as n,d as p,a,e as s}from"./app.7c042103.js";const c={},d=a(`<h2 id="\u7F16\u8BD1\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u811A\u672C" aria-hidden="true">#</a> \u7F16\u8BD1\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># VERSION TO BE INSTALLED</span>
<span class="token comment"># opencv\u7248\u672C</span>
<span class="token assign-left variable">OPENCV_VERSION</span><span class="token operator">=</span><span class="token string">&#39;4.5.2&#39;</span>
<span class="token comment"># \u662F\u5426\u6DFB\u52A0contrib\u5305</span>
<span class="token assign-left variable">OPENCV_CONTRIB</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token assign-left variable">OPENCV_DIR_NAME</span><span class="token operator">=</span>opencv-<span class="token variable">\${OPENCV_VERSION}</span>
<span class="token assign-left variable">CONTRIB_DIR_NAME</span><span class="token operator">=</span>opencv_contrib-<span class="token variable">\${OPENCV_VERSION}</span>

<span class="token assign-left variable">CURRENT_DIR</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token builtin class-name">pwd</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">CONTRIB_MODULES_DIR</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${CURRENT_DIR}</span>/<span class="token variable">\${CONTRIB_DIR_NAME}</span>/modules&quot;</span>

<span class="token assign-left variable">FLAGS</span><span class="token operator">=</span>
<span class="token assign-left variable">FLAGS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${FLAGS}</span>  -DCMAKE_BUILD_TYPE=RELEASE&quot;</span>
<span class="token comment">#FLAGS=&quot;\${FLAGS} -DBUILD_JAVA=OFF&quot;</span>
<span class="token comment">#FLAGS=&quot;\${FLAGS} -DBUILD_opencv_java=OFF&quot;</span>
<span class="token comment">#FLAGS=&quot;\${FLAGS} -DCMAKE_CXX_COMPILER=g++&quot;</span>
<span class="token comment">#FLAGS=&quot;\${FLAGS} -DCMAKE_C_COMPILER=gcc&quot;</span>
<span class="token comment">#FLAGS=&quot;\${FLAGS} -DDCMAKE_INSTALL_PREFIX=/usr/local&quot; #\u7F16\u8BD1\u8DEF\u5F84</span>
<span class="token assign-left variable">FLAGS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${FLAGS}</span> -DBUILD_TESTS=OFF&quot;</span>


<span class="token comment"># 1. KEEP UBUNTU OR DEBIAN UP TO DATE</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> -y update
<span class="token comment"># sudo apt-get -y upgrade       # Uncomment this line to install the newest versions of all packages currently installed</span>
<span class="token comment"># sudo apt-get -y dist-upgrade  # Uncomment this line to, in addition to &#39;upgrade&#39;, handles changing dependencies with new versions of packages</span>
<span class="token comment"># sudo apt-get -y autoremove    # Uncomment this line to remove packages that are now no longer needed</span>


<span class="token comment"># 2. INSTALL THE DEPENDENCIES</span>

<span class="token comment"># Build tools:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y build-essential cmake

<span class="token comment"># GTK</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y libgtk2.0-dev

<span class="token comment"># GUI (if you want to use GTK instead of Qt, replace &#39;qt5-default&#39; with &#39;libgtkglext1-dev&#39; and remove &#39;-DWITH_QT=ON&#39; option in CMake):</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y qt5-default libvtk6-dev

<span class="token comment"># Media I/O:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y zlib1g-dev libjpeg-dev libwebp-dev libpng-dev libtiff5-dev libjasper-dev libopenexr-dev libgdal-dev

<span class="token comment"># Video I/O:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y libdc1394-22-dev libavcodec-dev libavformat-dev libswscale-dev libtheora-dev libvorbis-dev libxvidcore-dev libx264-dev yasm libopencore-amrnb-dev libopencore-amrwb-dev libv4l-dev libxine2-dev

<span class="token comment"># Parallelism and linear algebra libraries:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y libtbb-dev libeigen3-dev

<span class="token comment"># Python:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y python-dev python-tk python-numpy python3-dev python3-tk python3-numpy

<span class="token comment"># Java:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y ant default-jdk

<span class="token comment"># Documentation:</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y doxygen


<span class="token comment"># 3. INSTALL THE LIBRARY</span>

<span class="token comment"># install unzip wget</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y <span class="token function">unzip</span> <span class="token function">wget</span>

<span class="token function">wget</span> https://github.com/opencv/opencv/archive/<span class="token variable">\${OPENCV_VERSION}</span>.zip -O <span class="token variable">\${OPENCV_DIR_NAME}</span>.zip
<span class="token function">unzip</span> -o <span class="token variable">\${OPENCV_DIR_NAME}</span>.zip
<span class="token function">rm</span>    <span class="token variable">\${OPENCV_DIR_NAME}</span>.zip

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${OPENCV_CONTRIB}</span> -eq <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	<span class="token function">wget</span> https://github.com/opencv/opencv_contrib/archive/<span class="token variable">\${OPENCV_VERSION}</span>.zip -O <span class="token variable">\${CONTRIB_DIR_NAME}</span>.zip
	<span class="token function">unzip</span> -o <span class="token variable">\${CONTRIB_DIR_NAME}</span>.zip
	<span class="token function">rm</span>    <span class="token variable">\${CONTRIB_DIR_NAME}</span>.zip
	<span class="token assign-left variable">FLAGS</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${FLAGS}</span> -DOPENCV_EXTRA_MODULES_PATH=<span class="token variable">\${CONTRIB_MODULES_DIR}</span>&quot;</span>
<span class="token keyword">fi</span>

<span class="token comment"># mv opencv-\${OPENCV_VERSION} OpenCV</span>
<span class="token comment"># cd OpenCV</span>

<span class="token builtin class-name">cd</span> <span class="token variable">\${OPENCV_DIR_NAME}</span>

<span class="token function">mkdir</span> -p build
<span class="token builtin class-name">cd</span>    build

<span class="token builtin class-name">echo</span> <span class="token string">&quot;cmake <span class="token variable">\${FLAGS}</span> ..&quot;</span>

cmake <span class="token variable">\${FLAGS}</span> <span class="token punctuation">..</span>

<span class="token function">make</span> -j8
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token function">sudo</span> ldconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wechatqrcode" tabindex="-1"><a class="header-anchor" href="#wechatqrcode" aria-hidden="true">#</a> WechatQRcode</h2><h3 id="wechatqrcode\u6A21\u578B\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#wechatqrcode\u6A21\u578B\u6587\u4EF6" aria-hidden="true">#</a> wechatQRcode\u6A21\u578B\u6587\u4EF6</h3>`,4),r=n("li",null,[s("\u6B63\u5E38\u6765\u8BF4\u5728\u7F16\u8BD14.5.2\u65F6\u4F1A\u81EA\u52A8\u4E0B\u8F7D\uFF0C\u76EE\u5F55\u4E3A"),n("strong",null,"XXXX/build/opencv-4.5.2/build/downloads/wechat_qrcode/")],-1),u=s("\u5982\u679C\u6CA1\u6709\u5728\u6B64\u5904\u4E0B\u8F7D"),v={href:"https://github.com/WeChatCV/opencv_3rdparty",target:"_blank",rel:"noopener noreferrer"},m=s("github"),k=a(`<h3 id="java\u7A0B\u5E8Fdemo" tabindex="-1"><a class="header-anchor" href="#java\u7A0B\u5E8Fdemo" aria-hidden="true">#</a> JAVA\u7A0B\u5E8FDEMO</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">loadLibrary</span><span class="token punctuation">(</span><span class="token class-name">Core</span><span class="token punctuation">.</span>NATIVE_LIBRARY_NAME<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> detector_caffe_model_path<span class="token operator">=</span><span class="token string">&quot;/home/roiding/opencv/jar/detect.caffemodel&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> detector_prototxt_path<span class="token operator">=</span><span class="token string">&quot;/home/roiding/opencv/jar/detect.prototxt&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> super_resolution_prototxt_path<span class="token operator">=</span><span class="token string">&quot;/home/roiding/opencv/jar/sr.prototxt&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> super_resolution_caffe_model_path<span class="token operator">=</span><span class="token string">&quot;/home/roiding/opencv/jar/sr.caffemodel&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> jpg<span class="token operator">=</span><span class="token string">&quot;/home/roiding/opencv/jar/1.jpg&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">WeChatQRCode</span> weChatQRCode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeChatQRCode</span><span class="token punctuation">(</span>detector_prototxt_path<span class="token punctuation">,</span> detector_caffe_model_path<span class="token punctuation">,</span> super_resolution_prototxt_path<span class="token punctuation">,</span> super_resolution_caffe_model_path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Mat</span> imread <span class="token operator">=</span> <span class="token class-name">Imgcodecs</span><span class="token punctuation">.</span><span class="token function">imread</span><span class="token punctuation">(</span>jpg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> strings <span class="token operator">=</span> weChatQRCode<span class="token punctuation">.</span><span class="token function">detectAndDecode</span><span class="token punctuation">(</span>imread<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>java -jar -Djava.library.path<span class="token operator">=</span>/home/roiding/opencv/opencv-4.5.2/build/lib opencv-wechatCode.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>java.library.path \u7F16\u8BD1\u540E\u751F\u6210\u7684.so\u6587\u4EF6\u7684\u76EE\u5F55\uFF08windows\u4E0B\u662F.dll\uFF09</li><li>\u6253\u5305<strong>opencv-wechatCode.jar</strong>\u65F6\u9700\u8981\u5C06<strong>build/bin/opencv-452.jar</strong>\u6DFB\u52A0\u8FDB\u6253\u5305\u8DEF\u5F84</li></ul>`,5);function b(_,g){const e=i("ExternalLinkIcon");return l(),o("div",null,[d,n("ul",null,[r,n("li",null,[u,n("a",v,[m,p(e)])])]),k])}var f=t(c,[["render",b],["__file","opencv-java.html.vue"]]);export{f as default};
