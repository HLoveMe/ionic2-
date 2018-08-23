* 自定义组件 （和Angular自定义组件一致）


* 需要注意的
	
	* styleurls
	
		```
		> 不需要申明 ionic 会自动拾取相同目录下 项目名称的scss
		> 你申明了 路径必须 /app/xxx/oo../xxoo.css
		```
		
	* 关于组件宿主样式
	 
	 	```
 		angular 可以使用 
	 		css中
	 		:host{
	 			display:block
	 		}
	 		使宿主标签支持 class style
 			<angular-com class="xx" style = "xx">
 		
 		ionic
 			在scss 中申明没有作用
 			1:component.html
 				<style>>
 					:host{
 						display:block
 					}
 				</style>
 			2:
 			 styles:[`:host{display:block;}`]	
	 	```