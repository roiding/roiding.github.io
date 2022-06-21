---
title: 编译opencv 并使用java驱动
head:
  - - meta
    - name: keywords
      content: OpenCV-java
---

## 编译脚本

```bash
# VERSION TO BE INSTALLED
# opencv版本
OPENCV_VERSION='4.5.2'
# 是否添加contrib包
OPENCV_CONTRIB=1

OPENCV_DIR_NAME=opencv-${OPENCV_VERSION}
CONTRIB_DIR_NAME=opencv_contrib-${OPENCV_VERSION}

CURRENT_DIR=`pwd`
CONTRIB_MODULES_DIR="${CURRENT_DIR}/${CONTRIB_DIR_NAME}/modules"

FLAGS=
FLAGS="${FLAGS}  -DCMAKE_BUILD_TYPE=RELEASE"
#FLAGS="${FLAGS} -DBUILD_JAVA=OFF"
#FLAGS="${FLAGS} -DBUILD_opencv_java=OFF"
#FLAGS="${FLAGS} -DCMAKE_CXX_COMPILER=g++"
#FLAGS="${FLAGS} -DCMAKE_C_COMPILER=gcc"
#FLAGS="${FLAGS} -DDCMAKE_INSTALL_PREFIX=/usr/local" #编译路径
FLAGS="${FLAGS} -DBUILD_TESTS=OFF"


# 1. KEEP UBUNTU OR DEBIAN UP TO DATE

sudo apt-get -y update
# sudo apt-get -y upgrade       # Uncomment this line to install the newest versions of all packages currently installed
# sudo apt-get -y dist-upgrade  # Uncomment this line to, in addition to 'upgrade', handles changing dependencies with new versions of packages
# sudo apt-get -y autoremove    # Uncomment this line to remove packages that are now no longer needed


# 2. INSTALL THE DEPENDENCIES

# Build tools:
sudo apt-get install -y build-essential cmake

# GTK
sudo apt-get install -y libgtk2.0-dev

# GUI (if you want to use GTK instead of Qt, replace 'qt5-default' with 'libgtkglext1-dev' and remove '-DWITH_QT=ON' option in CMake):
sudo apt-get install -y qt5-default libvtk6-dev

# Media I/O:
sudo apt-get install -y zlib1g-dev libjpeg-dev libwebp-dev libpng-dev libtiff5-dev libjasper-dev libopenexr-dev libgdal-dev

# Video I/O:
sudo apt-get install -y libdc1394-22-dev libavcodec-dev libavformat-dev libswscale-dev libtheora-dev libvorbis-dev libxvidcore-dev libx264-dev yasm libopencore-amrnb-dev libopencore-amrwb-dev libv4l-dev libxine2-dev

# Parallelism and linear algebra libraries:
sudo apt-get install -y libtbb-dev libeigen3-dev

# Python:
sudo apt-get install -y python-dev python-tk python-numpy python3-dev python3-tk python3-numpy

# Java:
sudo apt-get install -y ant default-jdk

# Documentation:
sudo apt-get install -y doxygen


# 3. INSTALL THE LIBRARY

# install unzip wget
sudo apt-get install -y unzip wget

wget https://github.com/opencv/opencv/archive/${OPENCV_VERSION}.zip -O ${OPENCV_DIR_NAME}.zip
unzip -o ${OPENCV_DIR_NAME}.zip
rm    ${OPENCV_DIR_NAME}.zip

if [ ${OPENCV_CONTRIB} -eq 1 ]; then
	wget https://github.com/opencv/opencv_contrib/archive/${OPENCV_VERSION}.zip -O ${CONTRIB_DIR_NAME}.zip
	unzip -o ${CONTRIB_DIR_NAME}.zip
	rm    ${CONTRIB_DIR_NAME}.zip
	FLAGS="${FLAGS} -DOPENCV_EXTRA_MODULES_PATH=${CONTRIB_MODULES_DIR}"
fi

# mv opencv-${OPENCV_VERSION} OpenCV
# cd OpenCV

cd ${OPENCV_DIR_NAME}

mkdir -p build
cd    build

echo "cmake ${FLAGS} .."

cmake ${FLAGS} ..

make -j8
sudo make install
sudo ldconfig
```

## WechatQRcode

### wechatQRcode模型文件

* 正常来说在编译4.5.2时会自动下载，目录为**XXXX/build/opencv-4.5.2/build/downloads/wechat_qrcode/**
* 如果没有在此处下载[github](https://github.com/WeChatCV/opencv_3rdparty)

### JAVA程序DEMO

```java
public static void main(String[] args) {
        System.loadLibrary(Core.NATIVE_LIBRARY_NAME);
        String detector_caffe_model_path="/home/roiding/opencv/jar/detect.caffemodel";
        String detector_prototxt_path="/home/roiding/opencv/jar/detect.prototxt";
        String super_resolution_prototxt_path="/home/roiding/opencv/jar/sr.prototxt";
        String super_resolution_caffe_model_path="/home/roiding/opencv/jar/sr.caffemodel";
        String jpg="/home/roiding/opencv/jar/1.jpg";
        WeChatQRCode weChatQRCode = new WeChatQRCode(detector_prototxt_path, detector_caffe_model_path, super_resolution_prototxt_path, super_resolution_caffe_model_path);
        Mat imread = Imgcodecs.imread(jpg);
        List<String> strings = weChatQRCode.detectAndDecode(imread);
        System.out.println(strings);
}
```

启动命令

```bash
java -jar -Djava.library.path=/home/roiding/opencv/opencv-4.5.2/build/lib opencv-wechatCode.jar
```

* java.library.path 编译后生成的.so文件的目录（windows下是.dll）
* 打包**opencv-wechatCode.jar**时需要将**build/bin/opencv-452.jar**添加进打包路径

