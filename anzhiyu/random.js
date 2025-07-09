var posts=["2025/02/02/CRYPTO中的XOR问题/","2025/02/03/跟随Cryptohack学习数论(上篇)/","2025/02/09/山河不足重，重在遇知己/","2025/02/09/使用python质因数分解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };