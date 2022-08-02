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

const services = Vue.createApp({});
// 引数を少なくするためにほとんどの店舗にあるサービスは、無い店舗だけ引数を渡して表示しないようにする　       例) v-if="!darts"
// 逆に2店舗ぐらいにしかないサービスは引数を渡した店舗にだけ表示させる                                      例) v-if="sportspark"  ("!"付けない)

services.component("service-div", {
  props: [
    "karaoke",
    "billiard",
    "darts",
    "pinpon",
    "sportspark",
    "mahjong",
    "mahjongkakutou",
    "online",
    "comic",
    "band",
    "slot",
    "food",
    "drink",
    "shower",
    "massage",
    "zashiki",
    "woman",
    "video",
    "soft",
    "soup",
    "kagi",
    "motikomi",
    "reclining",
    "captain",
    "massage",
    "shower_no_free",
    "open",
    "flat",
    "gold",
    "silver",
    "kaidan",
    "red",
    "blue",
    "family",
    "kids",
    "party",
    "pairsofa",
    "pairzashiki",
    "tatami",
    "regular"
  ],
  template: `
  <div class="grid grid-cols-12 max-w-4xl">
  <div class="col-span-full mb-3">
    <p class="text-2xl text-gray-800 text-center font-black my-10 catch flex justify-center items-center">アミューズメント</p>
  </div>
  <div class="col-span-2" v-if="!karaoke">
    <img src="../img/icon/service-icon/karaoke.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">カラオケ</p>
  </div>
  <div class="col-span-2" v-if="!billiard">
    <img src="../img/icon/service-icon/billi.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">ビリヤード</p>
  </div>
  <div class="col-span-2" v-if="!darts">
    <img src="../img/icon/service-icon/darts.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">ダーツ</p>
  </div>
  <div class="col-span-2" v-if="!pinpon">
    <img src="../img/icon/service-icon/pinpon.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">卓球</p>
  </div>
  <div class="col-span-2" v-if="sportspark">
    <img src="../img/icon/service-icon/batting.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">バッティング</p>
  </div>
  <div class="col-span-2" v-if="sportspark">
    <img src="../img/icon/service-icon/badminton.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">バドミントン</p>
  </div>
  <div class="col-span-2" v-if="sportspark">
    <img src="../img/icon/service-icon/3on3.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">3on3</p>
  </div>
  <div class="col-span-2" v-if="sportspark">
  <img src="../img/icon/service-icon/football.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">フットボール</p>
  </div>
  <div class="col-span-2" v-if="sportspark">
  <img src="../img/icon/service-icon/volleyball.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">バレーボール</p>
  </div>
  <div class="col-span-2" v-if="!mahjong">
    <img src="../img/icon/service-icon/mahjong.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">麻雀卓</p>
  </div>
  <div class="col-span-2" v-if="!mahjongkakutou">
  <img src="../img/icon/service-icon/billi.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">麻雀格闘俱楽部</p>
</div>
  <div class="col-span-2" v-if="!comic">
    <img src="../img/icon/service-icon/comic.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">コミック</p>
  </div>
  <div class="col-span-2" v-if="!online">
    <img src="../img/icon/service-icon/game.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">オンラインゲーム</p>
  </div>
  <div class="col-span-2" v-if="!PC">
  <img src="../img/icon/service-icon/PC.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">ビジネス・勉強</p>
</div>
  <div class="col-span-2" v-if="!video">
  <img src="../img/icon/service-icon/video.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">各種動画サービス</p>
</div>
<div class="col-span-2" v-if="!band">
<img src="../img/icon/service-icon/band.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">バンドスタジオ</p>
</div>
</div>



<div class="grid grid-cols-12 max-w-4xl">
  <div class="col-span-full mb-3">
    <p class="text-2xl text-gray-800 text-center font-black my-10 catch flex justify-center items-center">基本サービス・基本設備</p>
  </div>
  <div class="col-span-2" v-if="!food">
  <img src="../img/icon/service-icon/food.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">お食事</p>
</div>
  <div class="col-span-2" v-if="!drink">
    <img src="../img/icon/service-icon/drink.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">ドリンクバー無料</p>
  </div>
  <div class="col-span-2" v-if="!soft">
    <img src="../img/icon/service-icon/soft.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">ソフトクリーム食べ放題</p>
  </div>
  <div class="col-span-2" v-if="!soup">
    <img src="../img/icon/service-icon/soup.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">スープバー無料</p>
  </div>
  <div class="col-span-2" v-if="!shower">
    <img src="../img/icon/service-icon/shower.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">シャワー無料</p>
  </div>
  <div class="col-span-2" v-if="shower_no_free">
    <img src="../img/icon/service-icon/shower.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">シャワー(有料)</p>
  </div>
  <div class="col-span-2" v-if="!motikomi">
  <img src="../img/icon/service-icon/motikomi.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">飲食物もちこみok</p>
</div>
</div>

<div class="grid grid-cols-12 max-w-4xl">
  <div class="col-span-full mb-3">
    <p class="text-2xl text-gray-800 text-center font-black my-10 catch flex justify-center items-center">カラオケルーム・ネットカフェ席</p>
  </div>
  <div class="col-span-2" v-if="!regular">
    <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">レギュラールーム</p>
  </div>
  <div class="col-span-2" v-if="flat">
  <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">フルフラットルーム</p>
</div>
<div class="col-span-2" v-if="kaidan">
<img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">階段の部屋</p>
</div>
<div class="col-span-2" v-if="tatami">
<img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">畳の部屋</p>
</div>
  <div class="col-span-2" v-if="!party">
    <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">パーティールーム</p>
  </div>

  <div class="col-span-2" v-if="!gold">
    <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">金の部屋</p>
  </div>
  <div class="col-span-2" v-if="!silver">
    <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">銀の部屋</p>
  </div>
  <div class="col-span-2" v-if="red">
<img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">赤の部屋</p>
</div>
<div class="col-span-2" v-if="blue">
<img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">青の部屋</p>
</div>
<div class="col-span-2" v-if="family">
<img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">ファミリールーム</p>
</div>
<div class="col-span-2" v-if="kids">
<img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">キッズルーム</p>
</div>

<div class="col-span-2" v-if="kagi">
<img src="../img/icon/service-icon/kagi.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">鍵付き防音個室</p>
</div>
<div class="col-span-2" v-if="!reclining">
<img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">リクライニング席</p>
</div>
<div class="col-span-2" v-if="!captain">
<img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">キャプテンシート席</p>
</div>
<div class="col-span-2" v-if="!massage">
<img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">マッサージ席</p>
</div>
<div class="col-span-2" v-if="!zashiki">
<img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">座敷席</p>
</div>
<div class="col-span-2" v-if="pairzashiki">
<img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">ペア座敷席</p>
</div>
<div class="col-span-2" v-if="pairsofa">
<img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">ペアソファ席</p>
</div>
<div class="col-span-2" v-if="open">
<img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">オープン席</p>
</div>
</div>

`,
});
