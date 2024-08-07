var posts=["2024/08/07/Hexo搭建安之鱼主题配置/","2024/08/06/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };