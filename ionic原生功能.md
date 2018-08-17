#<p style="text-align:center">Strorage</p>

//执行命令 加载该插件 npm

1: 用于保存数据  
2: import { Storage } from '@ionic/storage'     
3: app 导入 Storage服务     
4: 注入后使用     

```
还可使用splite存储
	追加sqlite存储
	1：插件导入
	2：提供服务商
	[{provide: Storage, useFactory:func(){
			return new Storage(['sqlite', 'websql', 'indexeddb'], { name: '__mydb' });
		}
	}}]
	
	this.storage.ready().then(()=>{
							async
		set(key,value)
		get(key)
		remove(key)	
		clear()
		length()
		keys()
		forEach
	})
```
	



#<p style="text-align:center">Native</p>

* npm install @ionic-native/core --save
* ionic cordova plugin add cordova-plugin-app-version
* npm install --save @ionic-native/app-version


* import {AppVersion} from "@ionic-native/app-version";
*  @NgModule({providers: [AppVersion]})

|!|!|
|------|-----|
|3DTouch||
|Action Sheet ||
|App Version |  获取App 版本等等信息|
|Background Mode | 防止APP进入休眠模式|
|BackgroundGeolocation | 提供前台后台位置操作|
|Badge | Badge支持|
|Barcode Scanner| 条形码扫描|
|ZBar||
|Base64 To Gallery|容许保存base64图片到你的手机|
|Battery Status  |电池信息|
|BLE|  提供蓝牙连接外设|
|Bluetooth Serial | 蓝牙通信|
|EstimoteBeacons||
|Brightness | 控制亮度|
| Insomnia | 屏幕常亮|
|Broadcaster | 和本地应用进行交互   通过 通知|
|Calendar  | 日历|
|CallNumber | 打电话|
|Camera |  拍照 和  录像|
|CameraPreview| 试试拍摄并在网页中显示 beta|
|Media Capture||
|CardIO | 银行卡扫描|
|Clipboard| 剪切板|
|CodePush | ionic应用热更新|
|Contacts | 联系人|
|Crop  | 图片清晰度调整|
|Date Picker | 使用本地控件 选择时间|
|DB Meter |麦克风|
|Device  | 设备信息|
|Device Motion | 陀螺仪|
|Device Orientation | 指南针|
|Diagnostic |  管理 摄像头 GPS wifi等等|
|Dialogs | 提供原生会话能力|
|File  |  提供文件管理能力|
|FileOpener | 代开文件  用默认的程序|
|Flashlight| 控制闪关灯|
|Geofence |监控一个范围的地理|
| NativeGeocoder |反地理编码 beta|
|Geolocation | 提供位置信息，IP地址、RFID推断，WiFi和蓝牙的MAC地址，和GSM / CDMA小区ID。|
|Globalization|时间国际化|
|HTTP|提供网络访问 文件上传下载|
|Httpd|容许你在设备上开启一个小型的服务器|
| iBeacons |利用iBeacons  实现室内定位|
|Image Picker| 相册 |
|ImageResizer|图片大小调整|
|Photo Viewer|全屏显示图片|
|InAppBrowser|在App内部打开某些网站|
|InAppPurchase|内购|
| IsDebug |应用是否为调试阶段|
| Keyboard |键盘|
|LaunchReview|在审查之后 再次提交加入 引导区评分界面|
|Local Notifications| 本地通知 |
| Market |应用商店打开自己|
|MediaPlugin| 播放音乐和录音的能力|
|NativeAudio|音频播放|
|StreamingMedia|网络视频、音乐播放|
|NativeStorage|本地数据保存   NSUserDefault|
|Secure Storage| 本地存储数据  ios 使用钥匙串|
|Network|网络情况监测|
|NFC|NFC|
|PinDialog|认证窗口 exam:两次输入一致|
|Screen Orientation| 屏幕旋转|
|Screenshot|截屏|
|Sim|得到电话卡信息|
|SMS|发送短信|
|Social Sharing|分享使用默认App|
|Spinner Dialog|等待动画|
|SQLite|数据库操作|
|Status Bar|状态栏|
|TextToSpeech|读出文字|
|Toast| 弹出显示信息 类似系统消息提示|
|TouchID|指纹识别 ios|
| FingerprintAIO |ios/android 指纹识别  beta|
| Transfer |上传下载文件|
| Vibration |设备震动|
|Zip|文件解压|
|Email Composer|邮件  beta|



[查找更多插件](https://cordova.apache.org/plugins/?platforms=cordova-ios)


扩展 / 修改  已有插件:

```
	export class CameraMock extends Camera{
		.....
	}
	
	app.module.ts 替换注入
	providers:[
		{
			provide:Camera,
			useClass: CameraMock
		}
	]
	使用:依旧注入 public camera:Camera
		
```

