const app = Vue.createApp({});
// 各店舗ページの共通パーツ
app.component("store-div", {
  props: ["store", "text", "img"],
  template: `
  <div class="lg:flex items-center shadow-2xl py-12 md:px-20 sm:px-14 px-6 rounded-2xl mb-20 sm:mx-8 bg-white mt-10">
  <div class="md:px-10 sm:px-4">
      <img src="../img/logo.JPG" class="mx-auto">
      <h2 class="text-red-800 py-4 text-center text-4xl font-black m-auto">{{store}}</h2>
      <p class="text-gray-700 mb-2 md:mb-6 text-xl mt-4">{{text}}</p>
  </div>
  <div>
      <img class="bg-cover rounded-2xl" :src="img" alt="" />
  </div>
</div>
<div class="flex bg-red-800 text-white text-center py-4 md:text-xl leading-normal font-bold h-28 justify-center items-center">

  <a href="#access" class="text-yellow-100 mx-4 sm:mx-8 hover:text-white">アクセス情報</a>
  <a href="#price_table" class="text-yellow-100 mx-4 sm:mx-8 hover:text-white">料金案内表</a>
  <a href="#services" class="text-yellow-100 mx-4 sm:mx-8 hover:text-white">設備・サービス</a>
</div>`,
});

const Access = Vue.createApp({});

Access.component("access-div", {
  props: ["src"],
  template: `<h2 class="text-2xl leading-normal mb-2 font-bold text-center bg-red-800 text-yellow-100 mt-2 py-4">— アクセス情報 —</h2>
  <div class="googleMap mx-auto">
    <iframe :src="src" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" zoom="1" frameborder="0"></iframe>
  </div>`,
});

const Flexdiv = Vue.createApp({});

Flexdiv.component("flex-div", {
  props: ["src", "text"],
  template: `<div class="sm:flex bg-gray-200 max-w-4xl py-8 px-8 rounded-3xl mb-20 shadow-2xl bg-white">
  <img :src="src" alt="" class="sm:w-1/2 rounded-lg rounded-3xl">
  <p class="ml-4 mt-4 align-middle">{{text}}</p>
  </div>`,
});

const services = Vue.createApp({
  
});

services.component("service-div", {
  props: ["karaoke", "billiard","darts","pinpon","mahjong","mahjongkakutou","online","comic","band","slot","food","drink","shower","massage","zashiki","kagituki","jyosei"],
  template: `
  <h3 class="text-center">アミューズメント</h3>
  <div class="flex">
    <img src="../img/icon/service-icon/karaoke.jpg" alt="" class="w-2/12" v-if=karaoke>
    <img src="../img/icon/service-icon/billiards.jpg" alt="" class="w-2/12" v-if=billiard>
    <img src="../img/icon/service-icon/darts.jpg" alt="" class="w-2/12" v-if=darts>
    <img src="../img/icon/service-icon/tabletennis.jpg" alt="" class="w-2/12" v-if=pinponn>
    <img src="../img/icon/service-icon/mahjong.jpg" alt="" class="w-2/12" v-if=mahjong>
    <img src="../img/icon/service-icon/mahjongkakutou.jpg" alt="" class="w-2/12" v-if=mahjongkakutou>
    <img src="../img/icon/service-icon/online.jpg" alt="" class="w-2/12" v-if=online>
    <img src="../img/icon/service-icon/comic.jpg" alt="" class="w-2/12" v-if=comic>
    <img src="../img/icon/service-icon/band.jpg" alt="" class="w-2/12" v-if=band>
    <img src="../img/icon/service-icon/slot.jpg" alt="" class="w-2/12" v-if=slot>
    </div>
    <h3 class="text-center">基本サービス・基本設備</h3>
    <div class="flex">
    <img src="../img/icon/service-icon/food.jpg" alt="" class="w-2/12" v-if=food>
    <img src="../img/icon/service-icon/drink.jpg" alt="" class="w-2/12" v-if=drink>
    <img src="../img/icon/service-icon/shower.jpg" alt="" class="w-2/12" v-if=shower>
    </div>
    <h3 class="text-center">カラオケルーム・ネットカフェ席</h3>
    <div class="flex">
    <img src="../img/icon/service-icon/massage.jpg" alt="" class="w-2/12" v-if=massage>
    <img src="../img/icon/service-icon/zashiki.jpg" alt="" class="w-2/12" v-if=zashiki>
    <img src="../img/icon/service-icon/kagituki.jpg" alt="" class="w-2/12" v-if=kagituki>
    <img src="../img/icon/service-icon/jyosei.jpg" alt="" class="w-2/12" v-if=jyosei>

    </div>
  `,
});
