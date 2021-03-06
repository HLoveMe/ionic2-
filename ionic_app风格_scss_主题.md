* 主题

	* App适配
	
		```
		说明:浏览器最小字体是12px 所有按照ionic 16 *62.5% = 10px
			>浏览器显示有偏差  在手机上显示就是正常的
		A:
			@media screen and (min-width: 320px) {html{font-size:50px;}}
			@media screen and (min-width: 360px) {html{font-size:56.25px;}}
			@media screen and (min-width: 375px) {html{font-size:58.59375px;}}
			@media screen and (min-width: 400px) {html{font-size:62.5px;}}
			@media screen and (min-width: 414px) {html{font-size:64.6875px;}}
			@media screen and (min-width: 440px) {html{font-size:68.75px;}}
			@media screen and (min-width: 480px) {html{font-size:75px;}}
			@media screen and (min-width: 520px) {html{font-size:81.25px;}}
			@media screen and (min-width: 560px) {html{font-size:87.5px;}}
			@media screen and (min-width: 600px) {html{font-size:93.75px;}}
			@media screen and (min-width: 640px) {html{font-size:100px;}}
			@media screen and (min-width: 680px) {html{font-size:106.25px;}}
			@media screen and (min-width: 720px) {html{font-size:112.5px;}}
			@media screen and (min-width: 760px) {html{font-size:118.75px;}}
			@media screen and (min-width: 800px) {html{font-size:125px;}}
			@media screen and (min-width: 960px) {html{font-size:150px;}}
			
			20px设计稿 == (20/100 rem)
			
		B:
			head导入rem.js
			(640,100) 640设计稿的标准 100比例
			Button 设计稿为 200px === 2rem(200/100)
		```
	* App 风格
		<a href="https://ionicframework.com/docs/theming/platform-specific-styles/">查看所有默认配置</a>

		```
			IonicModule.forRoot(MyApp,{
				mode:"ios|mp",
				iconMode:"ios|mp"		
				过度动画	
				tabs样式
				tabsHideOnSubPages：bool
				backButtonText   返回按钮
				backButtonIcon 
				platforms: {
			        ios: {
			          tabsPlacement: 'top',
			        },
			        md:{
				        tabsPlacement: 'bottom',
			        }
		      }
				....
			})
			
		```
	* 组件样式
	
		```			
			<div color="" mode="ios|md|wp"  />
		```	
	* 主题  variables.scss
		
		```
		重点:
			任何你的修改。
			必须在@import "ionic.theme.default"之前
		
		颜色
			$colors: (
			  primary:    #488aff,
			  secondary:  #32db64,
			  danger:     #f53d3d,
			  light:      #f4f4f4,
			  dark:       #222,
			  myIcon:(
			  		base: #55acee,字体颜色
			    	contrast: #ffffff  背景
			  )
			);
			<div color='secondary' />
			.class_name{
				background-color:color($colors, myIcon, base)
			}
		
		定义全局变量
			$titleColor:"#ff99ff"
			
			使用
				.header {
				  backgroundColor:$titleColor
				}	
		
		```
	
	
* css

	* css 命令

		```
		attribute绑定
		<div [attr.text-center]="bool ? '':null">
		
		text-left	text-align: left 左对齐
		text-right	text-align: right	右对齐
		text-start	text-align: start	开始的地方 取决于对齐方式  （ltr  | rtl）
		text-end	text-align: end		结束的地方 取决于对齐方式  （ltr  | rtl）
		text-center	text-align: center	 居中
		text-justify	text-align: justify	 比例分布
		text-wrap	white-space: normal	   文本注册换行
		text-nowrap	white-space: nowrap 一行  不换行
		
		text-uppercase  文本大写
		text-lowercase 文本小写
		text-capitalize  首字母大写
		
		float-left
		float-right
		float-start
		float-end
		
		
		padding	padding: 16px
		padding-top	padding-top: 16px
		padding-left	padding-left: 16px
		padding-right	padding-right: 16px	
		padding-bottom	padding-bottom: 16px
		padding-vertical	padding: 16px 0
		padding-horizontal	padding: 0 16px
		no-padding	padding: 0
		
		margin	margin: 16px	
		margin-top	margin-top: 16px	
		margin-left	margin-left: 16px
		margin-right	margin-right: 16px
		margin-bottom	margin-bottom: 16px
		margin-vertical	margin: 16px 0	
		margin-horizontal	margin: 0 16px
		no-margin	margin: 0
		```
	* css指令
	
		```
		 自定义属性指令
		```
	* App css 针对平台的css
	
		```
		.ios .xxxx{
			ios平台css
		}
		.md .oooo{
			安卓平台css
		}
		```	
	* css 作用范围

		```
		variables.scss 
			最大的css;申明变量什么的;修改默认变量;
		app.scss	  
			app 全局css;申明变量;修改默认样式
		page.scss  
			针对某个文件 可覆盖之前的css
		
		例子
		variables.scss 
			$toolbar-background:yelllow;
		app.scss
			.toolbar-background {background-color: red;}
			
		home.scss
			home-page{
				.toolbar-background {background-color: blue;}
			}
		variables 被覆盖
		整个app 导航栏是red;
		home-page 页面为blue
		```
	* 重写App 样式 [可重写变量](https://ionicframework.com/docs/theming/overriding-ionic-variables/)
		
		```
		1:
			重写样式 
				.toolbar-background{backgroundColor:red;}
			重写变量 必须在variables.scss
				并且在@import "ionic.theme.default";前
				$toolbar-background:red;
			
		2: 针对平台重写样式 app.scss
			.ios .toolbar-background{xxxx}
			等于
			.toolbar-background-ios:{}
			
		特定的样式
		
		导航栏背景颜色
			.toolbar-background{} $toolbar-background:xx
		导航栏返回图标样式
			.back-button-icon{}
		导航栏标题文字
			.toolbar-title{} -ios|-md
		```
	
		
	* 网格 [AA](https://ionicframework.com/docs/theming/responsive-grid/)

* 修改默认组件
	* ion-input
		
		```
		高度是默认的 设置ion-input高度后 input 高度不跟随变化
		.text-input{
            height: 100%;
            margin: 0px !important;
            padding: 8px 0px;
        }
        ion-input input{
        	width: 100% !important;
    	}
		```