#ionic Pro 仔细看看  没有任何作用
 

```
	依赖你的本地代码 仅仅属于附加功能
	可用可不用 方便管理你的app  
		编译测试  Bug监控 更新 
		DevApp 便于时时查看（测试可以使用）
		Deploy 便于更新代码 热更新（应该是不会使用到的）
		Package 提供的打包服务
		Monitoring 监控bug（测试）
```
* 命令

	```
	ionic login 登入
	ionic link 进行连接操作（pro 和 github）	
	```


* github 作为你的代码仓库
	
	```
	在创建玩本地代码后 并创建你的github仓库
	```
	
* 创建 Pro app
	* Pro 网址上(不存在)你的app
		* 存在本地代码
			* ionic link
		* 不存在本地代码
			* 创建本地代码 初始化github
			* ionic link
		
	* Pro 网址上(存在)你的app
		* 不存在本地代码
			* ionic start --pro-id e6b426e9 创建你的本地工程
		* 存在本地代码
			* ionic link --pro-id e6b426e9  连接的的pro app
* 关于连接Pro
	*  全新创建的本地代码 会提醒你是否进行Pro创建 并连接
	*  已经存在的代码 ionic link进行操作
	*  链接过程
		* 是否连接Pro SDK 安装对应库	
		* 是否Pro app 在网站上是否存在
		* 选择github 作为你的代码库 （并进行ionic连接）
	
* 使用 

	* 下载 Ionic DevApp
	* 开启调试 ionic serve -c
	* Ionic DevApp 处于同一wifi 下	