var posts=["2025/01/25/hello-world/","2025/01/25/试写第一篇文章/","2025/02/02/CRYPTO中的XOR问题/","2025/02/03/CRYPTO中的数论基础（更新中）/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };