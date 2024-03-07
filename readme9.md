# 项目启动动画

直接替换index.html
```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue + TS</title>
  </head>
  <style media="screen" type="text/css">
    /* #app-cockpit-loading { width: 100%; height: 100%; }
    #app-cockpit-loading span {
         position: absolute;
         display: block;
         font-size: 50px;
         line-height: 50px;
         top: 50%;
         left: 50%;
         width: 200px;
         height: 100px;
         -webkit-transform: translateY(-50%)  translateX(-50%);
         transform: translateY(-50%)  translateX(-50%);
     } */
  
    #app-cockpit-loading {
      width: 120px;
      height: 40px;
      position: absolute;
      font-size: 50px;
      line-height: 50px;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
    }
  
    #app-cockpit-loading span {
      display: inline-block;
      width: 8px;
      height: 100%;
      border-radius: 4px;
      background: lightgreen;
      -webkit-animation: load 1s ease infinite;
    }
  
    @-webkit-keyframes load {
  
      0%,
      100% {
        height: 40px;
        background: lightgreen;
      }
  
      50% {
        height: 70px;
        margin: -15px 0;
        background: lightblue;
      }
    }
  
    #app-cockpit-loading span:nth-child(2) {
      -webkit-animation-delay: 0.2s;
    }
  
    #app-cockpit-loading span:nth-child(3) {
      -webkit-animation-delay: 0.4s;
    }
  
    #app-cockpit-loading span:nth-child(4) {
      -webkit-animation-delay: 0.6s;
    }
  
    #app-cockpit-loading span:nth-child(5) {
      -webkit-animation-delay: 0.8s;
    }
    
  </style>
  
  <body>
    <noscript>
      <strong>We're sorry but the network doesn't work properly without JavaScript enabled.
          Please enable it to continue.</strong>
    </noscript>
    <div id="app-cockpit-loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

## App.vue 中配置
```
<template>
	<!-- 设置路由出口 -->
 <router-view v-slot="{ Component, route }">
	 <transition name="animation" mode="out-in">
		 <component :is="Component" :key="route.path" />
	 </transition>
 </router-view>
</template>
<style lang="scss">
/* 过度动画配置代码 */
.animation-enter-from,
.animation-leave-to {
 transform: translateX(20px);
 opacity: 0;
}
.animation-enter-to,
.animation-leave-from {
 opacity: 1;
}
.animation-enter-active {
 transition: all 0.7s ease;
}
.animation-leave-active {
 transition: all 0.3s cubic-bezier(1, 0.6, 0.6, 1);
}
</style>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
	document.getElementById('app-cockpit-loading').remove();
});
</script>
```