# HTML 面试点知识点

### 1 DOCTYPE 的作用是什么？

<!DOCTYPE>声明位于 HTML 文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。

DOCTYPE 不存在或格式不正确会导致文档以兼容模式呈现。

常见的 DOCTYPE 格式有哪些？

1、 HTML 5

```HTML
<!DOCTYPE html>
```

2、 HTML 4.01 Strict
该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

```HTML
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

3、 HTML 4.01 Transitional
该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。

```HTML
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

4、 HTML 4.01 Frameset
该 DTD 等同于 HTML 4.01 Transitional，但允许框架集内容。

```HTML
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

5、 XHTML 1.0 Strict
该 DTD 包含所有 HTML 元素和属性，但不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。

```HTML
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

6、 XHTML 1.0 Transitional
该 DTD 包含所有 HTML 元素和属性，包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）。必须以格式正确的 XML 来编写标记。

```HTML
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

7、 XHTML 1.0 Frameset
该 DTD 等同于 XHTML 1.0 Transitional，但允许框架集内容。

```HTML
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
```

8、 XHTML 1.1
该 DTD 等同于 XHTML 1.0 Strict，但允许添加模型（例如提供对东亚语系的 ruby 支持）。

```HTML
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
```

#### <frameset></frameset>

指的是框架集，在一个网页中插入多个框架并对框架进行排版布局，每个框架用 frame 标记，且框架之间互相独立，每个框架的大小是由 frameset 定义的。Frameset 不能嵌套在 body 中。对于不支持 frameset 的浏览器，可以用<noframes>添加提示文本。

- <noframes></noframes>
  此标签只在浏览器不支持frameset时才有用，对于支持frameset的浏览器，此标签会被忽略。
  注意：标签的提示文本必须放在 body 中，即<noframes><body>抱歉你的浏览器不支持框架</body></noframes>

- <frame/>
  指的是单个框架，框架的大小不能由自己定义。Frame必须与frameset一起使用，不能单独使用。

注意：
1、frameset 不能嵌套在 body 中

```HTML
<!--<body>-->

<frameset rows="80,*">
    <noframes>
        <body>很抱歉，阁下使用的浏览器不支援框架功能，请转用新的浏览器。</body>
    </noframes>
    <frame name="top" src="a.html">
    <frame name="bottom" src="b.html">
</frameset>

<!--<body>-->
```

2、嵌套在 frameSet 中的 iframe 必需放在 body 中

```HTML
  <body>
    <frameset>
      <iframe   name="frame1"   src="test1.htm"/>
      <iframe   name="frame2"   src="test2.htm"/>
    </frameset>
  </body>
```

3、不嵌套在 frameSet 中的 iframe 可以随意使用

```HTML
<body>
   <iframe   name="frame1"    src="test1.htm"/>
   <iframe   name="frame2"   src="test2.htm"/>
</body>
<!--<body>-->
   <iframe   name="frame1"    src="test1.htm"/>
   <iframe   name="frame2"   src="test2.htm"/>
<!--</body>-->
```

#### <iframe></iframe>

和 frame 类似用来定义单个框架，和 frame 最大的区别是 iframe 的框架是嵌入到当前页面中的，即内联框架（inline frame）。iframe 可以单独使用，不用必需嵌套在 frameset 中。框架的大小只能由 iframe 自身控制，不能用 frameset 控制。

当浏览器不支持 iframe 时需要提示文本，只需将提示文本放在 iframe 标签之间即可，即<iframe>抱歉你的浏览器不支持框架</iframe>,此作用和 noframes 相同，当浏览器支持 iframe 时便忽略提示文本。

注意：在 HTML 4.1 Strict DTD 和 XHTML 1.0 Strict DTD 中，不支持 iframe 。



### 行内元素定义