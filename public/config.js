window.config = {
    "version": "2.0.0",
    "systemName": 'GA1400配置中心', //系统名称
    "baseName": "",
    "logoConfig": {
        "systemLogo": false, //系统logo
        "companyLogo": true //公司logo
    },
    "hasCountDownLogout": true,
    "countDownLogoutTime": 1800000,
    "environments": {
        "ifaas": {
            "host": '127.0.0.1:8066',
            "apiBaseURL": 'http://127.0.0.1:8083', //api端口
            "mqttServer": {
            "host": '127.0.0.1',
            "port": 9001
            },
            "domain": {
            "replaceDomain": false
            },
            "pathMiddle": ""
        },
        "localhost": {
            "host": "localhost:3000",
            "apiBaseURL": 'http://192.168.11.128:8083',    
            "mqttServer": {
                "host": '192.168.11.128',
                "port": 9001
            },
            "domain": {
                "replaceDomain": false
            },
            "pathMiddle": ""
        }
    },
    "centerProxyServerPrefix": 'http://127.0.0.1', //中心代理服务器前缀
    "proxyLoginServerPrefix": 'http://10.204.120.178:1111', //二维码代理服务器前缀
    "keepLogin": true,//是否保持登录
    "tokenInvalid": 1, //token保存时间(天)
    "loginTypeConfig": {
        "defaultType": 'form', //配置默认登录方式（form或qrcode）
        "form": true, //是否支持表单登录
        "qrcode": false //是否支持二维码登录
    },
    "getSearchStatisticWay": 'parallel', //请求检索统计结果方式:串行serial、并行parallel、混合mixin

}