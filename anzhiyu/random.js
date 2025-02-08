var posts=["2025/01/25/试写第一篇文章/","2025/02/02/CRYPTO中的XOR问题/","2025/02/03/跟随Cryptohack学习数论(上篇)/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };