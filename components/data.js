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

  <a href="#access" class="text-yellow-100 mx-4 sm:mx-8">アクセス情報</a>
  <a href="#price_table" class="text-yellow-100 mx-4 sm:mx-8">料金案内表</a>
  <a href="#services" class="text-yellow-100 mx-4 sm:mx-8">設備・サービス</a>
</div>`,
})

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

