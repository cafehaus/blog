# 电脑上打不开github解决办法

电脑上github速度慢、甚至直接打不开怎么办，如果会科学上网，直接用科学了就能访问，不会的话就只能试试下面的修改本地 hosts 文件方法。

**windows 10解决方案**

1. 找到你电脑的这个文件夹 C:\Windows\System32\drivers\etc
2. 用编辑器打开里面的 hosts 文件
3. 把下面这段代码加到最后，然后保存（注意要管理员权限，否则没有修改权限会修改不成功，还有 ip 会变，自己找个查 ip 的网站获取下那两个网址最新的 ip，如：https://www.ipaddress.com/）

```json
# Added by zhou Github
20.205.243.166 github.com
140.82.114.4 github.com
20.205.243.165 codeload.github.com
151.101.1.6 github.global.ssl.fastly.net
185.199.108.153 assets-cdn.github.com
185.199.109.153 assets-cdn.github.com
185.199.110.153 assets-cdn.github.com
185.199.111.153 assets-cdn.github.com
192.30.253.119 gist.github.com 
151.101.100.133 assets-cdn.github.com
151.101.100.133 raw.githubusercontent.com 
151.101.100.133 gist.githubusercontent.com 
151.101.100.133 cloud.githubusercontent.com 
151.101.100.133 camo.githubusercontent.com 
151.101.100.133 avatars0.githubusercontent.com 
151.101.100.133 avatars1.githubusercontent.com 
151.101.100.133 avatars2.githubusercontent.com 
151.101.100.133 avatars3.githubusercontent.com 
151.101.100.133 avatars4.githubusercontent.com 
151.101.100.133 avatars5.githubusercontent.com 
151.101.100.133 avatars6.githubusercontent.com 
151.101.100.133 avatars7.githubusercontent.com 
151.101.100.133 avatars8.githubusercontent.com
185.199.108.154 github.githubassets.com
185.199.109.133 camo.githubusercontent.com
# GitHub End
```

4. 在终端里输入命令刷新下本地 dns 缓存：ipconfig/flushdns

**Mac 解决方案**

1. 找到你电脑的这个文件夹 /private/etc（点击finder,  顶部菜单栏：前往-前往文件夹，输入 /private/etc/hosts）
2. 将里面的 hosts 文件复制一份（因为不能直接修改，然后修改了之后再覆盖原来的 hosts）
3. 跟 windows 一样，在 hosts 里加入 ip 映射地址
4. 刷新dns：sudo killall -HUP mDNSResponde