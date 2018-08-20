* 主题

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