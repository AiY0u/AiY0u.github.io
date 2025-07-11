var posts=["2025/02/02/CRYPTO中的XOR问题/","2025/02/03/跟随Cryptohack学习数论(上篇)/","2025/02/09/山河不足重，重在遇知己/","2025/02/09/使用python质因数分解/","2025/07/09/中国剩余定理解题实例/","2025/07/09/使用勒让德符号求解flag例题/","2025/07/10/Cryptohack-ModularBinomials/","2025/07/11/AES加密详细解释/","2025/07/11/扩散与混淆/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };