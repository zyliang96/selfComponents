# Referer 防盗链

MDN 解释:
`Referer` 请求头包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。服务端一般使用 `Referer` 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。

详细的内容和一些概念可以在维基百科中查看![HTTP referer on Wikipedia](https://zh.wikipedia.org/wiki/HTTP%E5%8F%83%E7%85%A7%E4%BD%8D%E5%9D%80)


referer在日常的中后台中实际上使用的场景较少，更多的是用在toC场景或者是一些官方政务网站上。referer是由浏览器设置的，有些浏览器设置里是可以屏蔽的（例如Firefox）,一般带referer的都是`a` 标签和 `img`标签中，http 请求应该也会带上.

现在很多埋点工具，都是通过referer来判断网站来源的（百度统计这些分析的，应该都是通过这样的方法），也可以用来防盗链（很多官方政务网站都由这个限制），当然referer也不是一定会有的，但是也可以阻拦一部分门外汉了。

在以下几种情况下，Referer 不会被发送：

1. 来源页面采用的协议为表示本地文件的 "file" 或者 "data" URI；
2. 当前请求页面采用的是非安全协议，而来源页面采用的是安全协议（HTTPS）。
3. js 调用打开的网站或资源（一般iframe嵌入的页面我都采用这种方式处理，但我本人还是遵重版权的）
4. 通过设置meta 解决
完全不需要referer
```
 <meta name="referrer" content="no-referrer" />
```
其他设置
```
<meta name="referrer" content="unsafe-url" />
<meta name="referrer" content="origin" />
<meta name="referrer" content="no-referrer-when-downgrade" />
<meta name="referrer" content="origin-when-cross-origin" />
```

图片的防盗链应该也是采用的同样的逻辑

对于前端而言，现在大部分应该都是nginx服务器，那么就说一下nginx对应的配置吧。
详细的官方说明在这里![ngx_http_referer_module](http://nginx.org/en/docs/http/ngx_http_referer_module.html)


nginx模块ngx_http_referer_module通常用于阻挡来源非法的域名请求。当一个请求头的Referer字段中包含一些非正确的字段，这个模块可以禁止这个请求访问站点。构造Referer的请求很容易实现，所以使用这个模块并不能100%的阻止这些请求。

nginx 官方配置
Syntax:	valid_referers none | blocked | server_names | string ...;
Default:	—
Context:	server, location

参数说明：

none：请求头缺少Referer字段，即空Referer
blocked：请求头Referer字段不为空（即存在Referer），但是值被代理或者防火墙删除了，这些值不以“http://”或“https://”开头
server_names：Referer请求头白名单。
arbitrary string：任意字符串，定义服务器名称或可选的URI前缀，主机名可以使用*号开头或结尾，Referer字段中的服务器端口将被忽略掉。
regular expression：正则表达式，以“~”开头，在“http://”或"https://"之后的文本匹配
 
示例
```
valid_referers none blocked server_names
               *.example.com example.* www.example.org/galleries/
               ~\.google\.;
```
