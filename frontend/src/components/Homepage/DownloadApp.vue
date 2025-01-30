<template>
    <div class="cont-downloadBox">
      <div class="first-box">
        <h1 class="main-text">Download our mobile app, start learning today</h1>
        <div class="store-buttons">
          <img :src="require('@/assets/Homepage/Google_Play_Store.png')" class="imageStore" alt="Google Playstore">
          <img :src="require('@/assets/Homepage/Download_on_the_App_Store.png')" class="imageStore" alt="App Store">
        </div>
      </div>
      <div class="second-box">
        <img :src="require('@/assets/Homepage/download_app.jpg')" alt="mobile-view" class="mobile-view">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DownloadApp',
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .cont-downloadBox {
    background-color: #052A63;
    color: #fff;
    display: flex;
  }
  
  .first-box {
    width: 50%;
  }
  
  .main-text {
    padding: 50px;
    max-width: 600px;
    font-family: 'Inter', sans-serif;
    font-size: 42px;
    font-weight: 500;
    line-height: 50.83px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
  
  .store-buttons {
    display: flex;
    flex-direction: row;
    padding-left: 50px;
    gap: 20px;
  }
  
  .imageStore {
    height: auto;
    width: 25%;
    max-width: 200px;
  }
  
  .second-box .mobile-view {
    height: 275px;
    width: 300px;
  }
  
  @media (max-width: 1170px) {
    .main-text {
      font-size: 35px;
      line-height: 45px;
    }
  }
  
  @media (max-width: 768px) {
    .cont-downloadBox {
      display: block;
      text-align: center;
    }
    
    .first-box {
      width: 100%;
    }
    
    .main-text {
      max-width: 100%;
      padding: 20px;
      font-size: 35px;
      line-height: 40px;
    }
    
    .store-buttons {
      gap: 15px;
      padding-left: 100px;
    }
  
    .imageStore {
      max-width: 250px;
    }
  }
  
  @media (max-width: 690px) {
    .imageStore {
      height: auto;
      width: 30vw;
      max-width: 100px;
    }
  }
  
  @media (max-width: 470px) {
    .store-buttons {
      flex-direction: column;
      gap: 15px;
      padding-left: 100px;
    }
  
    .imageStore {
      height: auto;
      width: 45vw;
      max-width: 100px;
    }
  
    .main-text {
      max-width: 100%;
      padding: 20px;
      font-size: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
  </style>
  