let plugin = {
    "插件编写工程":```
        :找个文件夹 (https://github.com/driftyco/ionic-native/issues/912)
            1：git clone https://github.com/driftyco/ionic-native
            2：cd ionic-native
            3：npm i
        ```
    "工程Root下  创建插件":{
        "A":"安装plugman npm install -g plugman",
        "B":"创建模板 plugman create --name MYNAME --plugin_id com.zzh.MYPUGIN --plugin_version 1.0.0",
        "C":"cd XXX",
        "D":"增加平台 plugman platform add --platform_name android / plugman platform add --platform_name ios"
    },
    "创建OC java 源代码":"在ionic ios项目中编写完成",
    "plugin.xml":`配置`,
    "创建package.json":"sudo plugman createpackagejson . ",
    "安装":"cordova plugin add path",
    "移除":"cordova plugin rm pluginID",
    "使用":`<clobbers target="navigator.ZQBluetooth" />
                            window.Bluetooth
                            cordova.plugins.BluetoothDetection
                            BluetoothDetection

            1:在window下得到 window.Bluetooth.method()
            2: declare var BluetoothDetection:any;
            
    "插件包装":"
        {
            1:在上面的插件工程中 node_modules创建一个文件夹 AAA
            2:文件夹下创建 index.ts   编写  https://github.com/ionic-team/ionic-native/blob/master/DEVELOPER.md
            3:编写好ts 后 copy 到你工程node_models/AAA import {xxx} from"AAAA"
        }

    "
    `
}

/**
    <?xml version='1.0' encoding='utf-8'?>
<plugin id="com.zzh.BlutetoohPlugin" version="0.0.1" xmlns="http://apache.org/cordova/ns/plugins/1.0" xmlns:android="http://schemas.android.com/apk/res/android">
    <name>ZQBluetooth</name>
    <description>使用真趣配合蜂鸟云进行定位</description>
    <author>爱上无名氏</author>
    <js-module name="ZQBluetooth" src="www/ZQBluetooth.js">
        <clobbers target="navigator.ZQBluetooth" />
    </js-module>
    <platform name="android">
    
    </platform>
    <platform name="ios">
        <header-file src="src/ios/ZQBluetooth.h" />
        <source-file src="src/ios/ZQBluetooth.m" />
        
        <source-file src="src/ios/lib/jpush-ios-3.0.7.a" framework="true" />

        <framework src="src/ios/JoysuchSDK.framework" custom="true" compiler-flags="-ObjC" />
        <framework src="CoreMotion.framework" />
        <framework src="CoreLocation.framework" />
        <framework src="Accelerate.framework" />
        <framework src="CoreGraphics.framework" />
        <framework src="QuartzCore.framework" />
        <framework src="Corebluetooth.framework" />
        <framework src="libsqlite3.tbd" />
        <framework src="libc++.tbd" />
        <framework src="libz.tbd" />
        <framework src="libxml2.tbd" />
        <config-file target="*-Info.plist" parent="NSLocationUsageDescription">
                <string>定位权限</string>
        </config-file>
        <config-file target="*-Info.plist" parent="NSLocationWhenInUseUsageDescription">
                <string>定位权限</string>
        </config-file>
        <config-file target="*-Info.plist" parent="NSBluetoothPeripheralUsageDescription">
                <string>蓝牙</string>
        </config-file>
        <config-file target="config.xml" parent="/*">
            <feature name="ZQBluetooth">
                <param name="ios-package" value= "ZQBluetooth"/>
                <param name="onload" value="true"/>
            </feature>
        </config-file>
    </platform>
</plugin>


 */
