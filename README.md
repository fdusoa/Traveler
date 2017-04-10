## 1. Traveler——一款旅游分享软件
1. 类似于高德地图的导航搜索功能
2. 在搜索出的界面上添加语音解说功能，有官方的，也有以前的游客留下的对这个景点的评论（评论的排序可以根据点赞的次数多少排序，包括选择自动播放和点击播放全部或特定解说两种模式），自己也可以上传，需要审核
3. 跟随讲解，可以根据游客当前的定位和朝向，行走速度等信息播放官方的解说语音，相当于一个电子导游
4. 打开相机界面拍照，显示游客评论弹幕，弹幕位置根据相机的朝向（现在弹幕很流行，技术上这算AR，以前有个创意就是根据相机朝向显示这个朝向上的景点）
5. 拍照完毕可以支持分享，来到同一个地点的游客可以查看别的游客分享的照片文字，就是一个评论功能，但包括照片的，网易云音乐就因为评论功能颇受欢迎
6. 一些需要大量编辑的功能，游客可以上传游玩攻略和游玩日记等
7. 支持私信？可以后续开发
8. 根据游客游玩历史推荐景点？
9. 景点打分，需要确认是否去过该景点，并审核
10. 后期可以支持专业人士的拍照摄影展览

## 2. 开发配置

1. 安装nodejs：[Nodejs 官网](https://nodejs.org/en/)
2. 使用npm安装cordova和ionic：npm install -g cordova ionic
3. IDE：[webstorm](http://www.jetbrains.com/webstorm/)

## 3. 运行测试

1. 使用webstorm运行index.html即可。

2. 或者使用ionic等建立server

3. 建议使用chrome浏览器进行测试

4. build android：在项目目录下：

   ```shell
   cordova platform add android
   cordova build android
   cordova run android(需要usb连接手机)
   ```

## 4. 开发指南
1. 每个开发人员请先新建自己的分支然后进行开发，在请求merge到dev分支
2. [ionic教程](http://www.runoob.com/ionic/ionic-tutorial.html) && [ionic css参考网站](http://ionicframework.com/docs/components/) && [ionic service和指令（标签）参考](http://ionicframework.com/docs/api/service/$ionicActionSheet/)
3. [angularJs教程1](http://www.runoob.com/angularjs/angularjs-tutorial.html) && [angularJs教程2](http://www.imooc.com/learn/156/) && [angularJs API referrence](http://docs.ngnice.com/api)
4. 插件编写教程[create plugin](https://github.com/fdusoa/Traveler/tree/master/docs/create%20plugin)


