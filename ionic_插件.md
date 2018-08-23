# ionic2-记录

* 自定义插件


* 使用不是官方定义的插件
	
	```
	cordova-plugin-ionic-keyboard 
		js写的 不支持ts
		(<any>window).Keyboard.hide();
	编写ts 见下
	```

* 已有插件  IonicNativePlugin 化

	```
	cordova-plugin-ionic-keyboard 为例子
	
	> git clone https://github.com/ionic-team/ionic-native.git
	
	> cd ionic-native
	
	> npm install gulp
	
	> npm i
	
	> gulp plugin:create -n 名字(首字母大写)
	
	>src/@ionic-native/plugins/名字 就是你的组件
	
	src/@ionic-native
		是支持的所有插件
	目录就是你的插件
		index.ts
		
	```
	
	```
	import { Injectable } from '@angular/core';
	import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
		import { Observable } from 'rxjs/Observable';
		
	父类 IonicNativePlugin
	  获取	(插件名称 创建实例  是否创建 支持的平台)方法	
	  
	插件	
	插件类型A:(window.device 直接是插件对象)
		Plugin 申明插件
		Cordova 申明插件方法
		CordovaProperty 申明插件属性
			插件对象 devide  <--(window.devide)
				devide.uuid
				devide.version
		checkAvailability 验证工具
			检查是否可用
			
			
		CordovaFunctionOverride
		InstanceCheck
		CordovaCheck
		CordovaInstance
		InstanceProperty
		
		
		@Plugin({
		  //你的插件名称
		  pluginName: 'KeyboardPlugin', 
		  //npm 插件 id
		  plugin: 'cordova-plugin-ionic-keyboard', 
		  //插件对象是哪个
		  pluginRef: 'window.Keyboard',
		  //github地址
		  repo: 'https://github.com/ionic-team/cordova-plugin-ionic-keyboard',
		  install: '', 
		  installVariables: [],
		  //平台
		  platforms: ['Android', 'iOS', 'Windows'] 
		})
		@Injectable()
		export class KeyboardPlugin extends IonicNativePlugin {
		  /**
		   * window.addEventListener('keyboardDidHide', () => {});
		   * window.addEventListener('keyboardDidShow', (event) => {});
		   * window.addEventListener('keyboardWillShow', (event) => {});
		   * window.addEventListener('keyboardWillHide', () => {})
		   */
	//属性
		  @CordovaProperty isVisible: boolean;
			
	//申明方法	
		  {
		  	 sync:boolean  是否是同步方法默认是false 异步的
		  	 platforms:[] 支持的设备
		  	 observable:boolean 方法返回值为Observable
		  	 
		  	 callbackOrder: 'reverse' 表示成功 失败是前面两个参数
		  	 
		  	 event:"keyboardDidHide"事件,
		  	 element:window 监听对象
		  	 eventObservable:true返回Observable
		  	 
		  	 callbackStyle: 'object',指定回调的类型
		  	 successName: 'success',指定成功回调名称 必须为object
		  	 errorName: 'error'   指定错误回调名称 必须为object
		  	 
		  	 successIndex: 2,指定回调的位置
		  	 errorIndex: 3指定回调的位置
		  }
		  @Cordova({ sync: true })
		  hideFormAccessoryBar(status?: boolean, completeCallback?: Function): void { }
		
		  @Cordova({ sync: true })
		  hide() { }
		
		  @Cordova({ sync: true })
		  show() { }
		  
	异步	  
		  @Cordova()
		  preloadSimple(id: string, assetPath: string): Promise<any> {return; }
		  @Cordova({observable:true})
		  preloadSimple(id: string, assetPath: string): Observable <any> {return; }
	
	监听
			window.addEventListener('keyboardDidHide', () => {})
				  
			@Cordova({
				event:"keyboardDidHide"事件,
				element:window 监听对象
				eventObservable:true返回Observable
			})
			onAAAAHide():Observable{return;}
			}
		
	回调是以函数方式
		cordova.plugins.fileOpener2.open(
			参数1,参数2,
			{
				success:func
				error:func
			}
		)
		
		@Cordova({
	    	callbackStyle: 'object',指定回调的类型
	    	successName: 'success',指定成功回调名称
	    	errorName: 'error'   指定错误回调名称
	  	})
	  	XXXOOO(packageId: string): Promise<any> {return;}
	
	参数为回调函数 A
		cordova.base64ToGallery(
			data,
			options,
			successFun,
			errFunc,
			falg,
			xxx
		);
	
		@Cordova({
			//这种情况下callbackOrder  callbackStyle 都不能设置
			successIndex: 2,
			errorIndex: 3
		})
		base64ToGallery(data: string,options?:any,falg,xxx): Promise<any> {
	    return;
	  }
	  
	 参数为回调函数 B
	 	getPicture(
	 		successCallback, 
	 		errorCallback, 
	 		options
	 	)
	 	
	 	@Cordova({
	 		callbackOrder: 'reverse'
	 	})
	 	getPicture(options?: CameraOptions): Promise<any>{ return; }
 	
	插件类型B:(window.Media 对象   再次new出实例) 
	
		@Plugin({})
		@Injectable()
		export class Media extends IonicNativePlugin {
			//var my_media:XXMedia = new window.Media('cdvfile://.mp3', ...);
			create(src):XXMedia{
				var install = any
				if(checkAvailability验证通过){
					// new  window.Media(src)
					return new (Media.getPlugin())(src)
				}
				
				return new XXMedia(install)
			}
		}
		class XXMedia{
			所有方法 都用CordovaInstance修饰
		}
		参见
		* /ionic-native/src/@ionic-native/plugins/media/index.ts
		* https://ionicframework.com/docs/native/media/
		* https://github.com/apache/cordova-plugin-media
		
			
		
	```