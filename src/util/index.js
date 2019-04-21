export default {
    // navigator.userAgent在_apiConfig.xml设置了
    isApp: navigator.userAgent.indexOf('apicloud_vue') > 0 ? true : false,
    // 若app用于生产打包 也可以这样判断
    // isApp: process.env.NODE_ENV === 'production',
    isAndroid: /android/gi.test(navigator.appVersion.toLocaleLowerCase())
}
