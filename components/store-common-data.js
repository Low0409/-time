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
    "regular",
    "slot",
    "kids_flat"
  ],
  template: `
  <div class="grid grid-cols-12 max-w-4xl text-xs font-semibold sm:text-base text-center">
    <div class="col-span-full mb-3">
      <p class="text-2xl text-gray-800 font-black my-10 catch flex justify-center items-center">アミューズメント</p>
    </div>
    <div class="col-span-2" v-if="!karaoke">
      <img src="../img/icon/service-icon/karaoke.svg" class="rounded-xl px-2" />
      <p>カラオケ</p>
    </div>
    <div class="col-span-2" v-if="!billiard">
      <img src="../img/icon/service-icon/billi.svg" class="rounded-xl px-2" />
      <p>ビリヤード</p>
    </div>
    <div class="col-span-2" v-if="!darts">
      <img src="../img/icon/service-icon/darts.svg" class="rounded-xl px-2" />
      <p>ダーツ</p>
    </div>
    <div class="col-span-2" v-if="!pinpon">
      <img src="../img/icon/service-icon/pinpon.svg" class="rounded-xl px-2" />
      <p>卓球</p>
    </div>
    <div class="col-span-2" v-if="sportspark">
      <img src="../img/icon/service-icon/batting.svg" class="rounded-xl px-2" />
      <p>バッティング</p>
    </div>
    <div class="col-span-2" v-if="sportspark">
      <img src="../img/icon/service-icon/badminton.svg" class="rounded-xl px-2" />
      <p>バドミントン</p>
    </div>
    <div class="col-span-2" v-if="sportspark">
      <img src="../img/icon/service-icon/3on3.svg" class="rounded-xl px-2" />
      <p>3on3</p>
    </div>
    <div class="col-span-2" v-if="sportspark">
    <img src="../img/icon/service-icon/football.svg" class="rounded-xl px-2" />
    <p>フットサル</p>
    </div>
    <div class="col-span-2" v-if="sportspark">
    <img src="../img/icon/service-icon/volleyball.svg" class="rounded-xl px-2" />
    <p>バレーボール</p>
    </div>
    <div class="col-span-2" v-if="!mahjong">
      <img src="../img/icon/service-icon/table.svg" class="rounded-xl px-2" />
      <p>麻雀卓</p>
    </div>

    <div class="col-span-2" v-if="!comic">
      <img src="../img/icon/service-icon/comic.svg" class="rounded-xl px-2" />
      <p>コミック</p>
    </div>
    <div class="col-span-2" v-if="!online">
      <img src="../img/icon/service-icon/game.svg" class="rounded-xl px-2" />
      <p>オンラインゲーム</p>
    </div>
    <div class="col-span-2" v-if="!PC">
    <img src="../img/icon/service-icon/PC.svg" class="rounded-xl px-2" />
    <p>ビジネス・勉強</p>
  </div>
    <div class="col-span-2" v-if="!video">
    <img src="../img/icon/service-icon/video.svg" class="rounded-xl px-2" />
    <p>各種動画サービス</p>
  </div>
  <div class="col-span-2" v-if="!band">
  <img src="../img/icon/service-icon/band.svg" class="rounded-xl px-2" />
  <p>バンドスタジオ</p>
  </div>
  <div class="col-span-2" v-if="slot">
  <img src="../img/icon/service-icon/slot.svg" class="rounded-xl px-2" />
  <p>スロットマシン</p>
  </div>
  <div class="col-span-2" v-if="!mahjongkakutou">
  <img src="../img/icon/service-icon/MKG1.svg" class="rounded-xl px-2" />
  <p>麻雀格闘俱楽部</p>
</div>
  </div>
  



<div class="grid grid-cols-12 max-w-4xl text-xs font-semibold sm:text-base text-center">
  <div class="col-span-full mb-3">
    <p class="text-2xl text-gray-800 font-black my-10 catch flex justify-center items-center">基本サービス・基本設備</p>
  </div>
  <div class="col-span-2" v-if="!food">
  <img src="../img/icon/service-icon/food.svg" class="rounded-xl px-2" />
  <p>お食事</p>
</div>
  <div class="col-span-2" v-if="!drink">
    <img src="../img/icon/service-icon/drink.svg" class="rounded-xl px-2" />
    <p>ドリンクバー無料</p>
  </div>
  <div class="col-span-2" v-if="!soft">
    <img src="../img/icon/service-icon/soft.svg" class="rounded-xl px-2" />
    <p>ソフトクリーム食べ放題</p>
  </div>
  <div class="col-span-2" v-if="!soup">
    <img src="../img/icon/service-icon/soup.svg" class="rounded-xl px-2" />
    <p>スープバー無料</p>
  </div>
  <div class="col-span-2" v-if="!shower">
    <img src="../img/icon/service-icon/shower.svg" class="rounded-xl px-2" />
    <p>シャワー無料</p>
  </div>
  <div class="col-span-2" v-if="shower_no_free">
    <img src="../img/icon/service-icon/shower.svg" class="rounded-xl px-2" />
    <p>シャワー(有料)</p>
  </div>
  <div class="col-span-2" v-if="!motikomi">
  <img src="../img/icon/service-icon/motikomi.svg" class="rounded-xl px-2" />
  <p>飲食物もちこみok</p>
</div>
</div>

<div class="grid grid-cols-12 max-w-4xl text-xs font-semibold sm:text-base text-center">
<div class="col-span-full mb-3">
  <p class="text-2xl text-gray-800 font-black my-10 catch flex justify-center items-center">カラオケルーム・ネットカフェ席</p>
</div>
<p class="col-span-full text-gray-800 font-black mb-4">カラオケルーム</p>
<div class="col-span-2" v-if="!party">
  <img src="../img/icon/service-icon/partyroom.svg" class="rounded-xl px-2" />
  <p>パーティールーム</p>
</div>
<div class="col-span-2" v-if="!regular">
  <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
  <p>レギュラールーム</p>
</div>

<div class="col-span-2" v-if="kaidan">
  <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
  <p>階段の部屋</p>
</div>
<div class="col-span-2" v-if="tatami">
  <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
  <p>畳の部屋</p>
</div>


<div class="col-span-2" v-if="!gold">
  <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
  <p>金の部屋</p>
</div>
<div class="col-span-2" v-if="!silver">
  <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
  <p>銀の部屋</p>
</div>
<div class="col-span-2" v-if="red">
  <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
  <p>赤の部屋</p>
</div>
<div class="col-span-2" v-if="blue">
  <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
  <p>青の部屋</p>
</div>
<div class="col-span-2" v-if="family">
  <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
  <p>ファミリールーム</p>
</div>
<div class="col-span-2" v-if="kids">
  <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
  <p>キッズルーム</p>
</div>
<div class="col-span-2" v-if="kids_flat">
  <img src="../img/icon/service-icon/flatroom.svg" class="rounded-xl px-2" />
  <p>キッズルーム</p>
</div>
<div class="col-span-2" v-if="flat">
  <img src="../img/icon/service-icon/flatroom.svg" class="rounded-xl px-2" />
  <p>フルフラットルーム</p>
</div>
<p class="col-span-full text-gray-800 text-center font-black my-8">ネットカフェ席</p>

<div class="col-span-2" v-if="kagi">
  <img src="../img/icon/service-icon/kagi.svg" class="rounded-xl px-2" />
  <p>鍵付き防音個室</p>
</div>
<div class="col-span-2" v-if="!reclining">
  <img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
  <p>リクライニング席</p>
</div>
<div class="col-span-2" v-if="!captain">
  <img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
  <p>キャプテンシート席</p>
</div>
<div class="col-span-2" v-if="!massage">
  <img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
  <p>マッサージ席</p>
</div>
<div class="col-span-2" v-if="pairsofa">
  <img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
  <p>ペアソファ席</p>
</div>
<div class="col-span-2" v-if="open">
  <img src="../img/icon/service-icon/sheet.svg" class="rounded-xl px-2" />
  <p>オープン席</p>
</div>
<div class="col-span-2" v-if="!zashiki">
  <img src="../img/icon/service-icon/sheet_flat_type.svg" class="rounded-xl px-2" />
  <p>座敷席</p>
</div>
<div class="col-span-2" v-if="pairzashiki">
  <img src="../img/icon/service-icon/sheet_flat_type.svg" class="rounded-xl px-2" />
  <p>ペア座敷席</p>
</div>
</div>


`,
});
