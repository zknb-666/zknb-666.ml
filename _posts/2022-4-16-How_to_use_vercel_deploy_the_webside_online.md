---
layout: post
title: "如何使用vercel在线部署网页" 
description: "神器vercel"
tag: 教程
---
# 前言
我们在github在线部署的博客，在国内速度缓慢甚至无法访问，而在gitee部署网站，速度是上去了，可是不稳+无法绑定域名，很不爽.于是又去寻找其他的在线托管服务，始终没有满意的

直到我找到了

<a href="https://vercel.com" target="_blank" alt="vercel"><img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.sspai.com%2F2020%2F10%2F04%2Fdba588ae94bdfecbe1f85d16ccbc62a5.jpg%3FimageMogr2%2Fauto-orient%2Fquality%2F95%2Fthumbnail%2F%211420x708r%2Fgravity%2FCenter%2Fcrop%2F1420x708%2Finterlace%2F1&refer=http%3A%2F%2Fcdn.sspai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652689187&t=6492beeedcafa5abaa2dd288b5a7febb" hight="50%" width="50%"></a>

# Vercel特点
1. vercel类似于github page，但远比github page强大，速度也快得多得多，而且将Github授权给vercel后，可以达到最优雅的发布体验，只需将代码轻轻一推，项目就自动更新部署了。

2. vercel还支持部署serverless接口。那代表着，其不仅仅可以部署静态网站，甚至可以部署动态网站，而这些功能，统统免费。

3. vercel还支持自动配置https，不用自己去FreeSSL申请证书，更是省去了一大堆证书的配置，简直是懒人利器！

![](/images/posts/20220416/2.jpeg)

# 过程

## 1.Vercel项目存储到github上

这里本博客是使用Jekyll作为框架，如果不出意外的话，你的文件目录大概是这样：

![](/images/posts/20220416/3.png)

## 2.部署

登录/注册vercel，个人推荐使用github登录

![](/images/posts/20220416/4.png)

单击New Project，在Import Git Repository栏选择import需要部署的项目

![](/images/posts/20220416/5.png)

在FRAMEWORK PRESET选择自己的框架，单击Deploy

![](/images/posts/20220416/6.png)

等待Vercel自动构建部署完成

![](/images/posts/20220416/7.png)

部署完成后会在Overview菜单下看见自己的项目，可以通过vercel自动分配的域名查看效果

![](/images/posts/20220416/8.png)

到这里，你已经完成了所有操作，可以选择使用vercel提供的子域名

点击你的网站，点击Settings,选择Domains,点击你现有域名旁的Edit，进行修改

![](/images/posts/20220416/9.png)

## 3.添加域名

vercel还可以自定义顶级域名，点击Domians，你可以看见以下选项

![](/images/posts/20220416/10.png)

你可以进行购买，添加和转入操作

点击Add，选取项目，点击CONTINUE

![](/images/posts/20220416/11.png)

输入你的域名，点击ADD

![](/images/posts/20220416/12.png)

根据提示进行配置，完成后，你大概可以看见这样

![](/images/posts/20220416/12.png)

至此，你的网站部署全部完成

# 后记

关于Vercel，还有许多进阶玩法，前面说过，Vercel还支持动态网站，并且免费，这个等我学会了再分享给大家
