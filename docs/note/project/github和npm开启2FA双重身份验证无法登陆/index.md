
# github和npm开启2FA双重身份验证无法登陆

现在很多应用都强制要求开启2FA双重身份验证来登录，比如码农们常用的 github 和 npm，这样就会导致如果我们无法来获取动态码时，比如手机丢了、误操作把手机上的获取动态码app给删了、app挂了...那即使我们有用户名和密码也是没法登录的。

### 什么是2FA
2FA 是 two-factor authentication 的缩写，翻译成中文就是双重身份验证，是登录网站或应用时使用的额外保护层。当启用了 2FA 时，登录的时候除了用户名和密码外，还必须提供另一种只有你自己知道或可以访问的身份验证形式。

这样就是别人盗取到了你的用户名和密码也没办法登录你的账号了，对我们来说也更加的安全。github 和 npm 从2023年起就强制要求账号只能用 2FA 登录了。

### TOTP应用
另外一种验证形式其实就是跟短信验证码一样，需要实时来获取，而且每次生成的动态码30秒后就会失效。而这里实时获取动态码我们就需要借助其他的 TOTP 应用了，TOTP 全称 Time-based One-Time Password 时间同步一次性密码，是一种基于时间戳和共享密钥生成动态密码的安全认证技术。

之前 github 刚要强制开启 2FA 时我也是一脸懵逼，直接按照网上的教程在我的 iphone 上下了个“神锁离线版” app 装上后也一直用得好好的，直到今天我想登录下 github 再次打开手机上的“神锁离线版”，提示直接停止服务了。

然后去网上搜到官网还在，还是广州的一家公司搞的，这下直接整报废了。接着在网上找解决办法，看到有人推荐 Bitwarden，安装了结果发现注册不了。

所以不建议用这些不知名的小应用，指不定哪天就没了，后面我在 github 的官方文档上也找到了官方推荐安装下面这 3 个应用：

* [1Password](https://support.1password.com/backups/)
* [Google Authenticator](https://security.googleblog.com/2023/04/google-authenticator-now-supports.html)
* [Microsoft Authenticator](https://support.microsoft.com/en-us/account-billing/back-up-and-recover-account-credentials-in-the-authenticator-app-bb939936-7a8d-4e88-bc43-49bc1a700a40)

最后我选择了 github 他爹微软的 Microsoft Authenticator，感觉这下应该不会没了。

### recovery code
记得当初开启 2FA 时还下载了个啥备份文件，接着电脑、笔记本、U盘、网盘里一通找，还好没扔😂，最终在 U盘里找到了 github-recovery-codes.txt 和 npm-recovery-codes.txt，然后靠文件里的 code 成功登录进了账号。

如果不记得有没有下载的赶紧去 github 个人中心-Password and authentication-Recovery codes 里下载一份，这样即使 TOTP 应用挂了我们也可以用这里的备份码登录进账号然后重新换绑一个 TOTP 应用，下载下来是一个 github-recovery-codes.txt 文件，里面记录的就是很多个码，在 github 登录界面输入用户名密码后可以点击最下面的：Use a recovery code or begin 2FA account recovery，切换到用 recovery code 来登录。

如果这个备份码也没找到，那就只能去走人工申诉，github 登录那也有入口，不过说要 3 个工作日左右才会回复你。