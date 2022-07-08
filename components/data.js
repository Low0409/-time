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

const services = Vue.createApp({});

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
    "kagituki",
    "woman",
    "video",
    "soft",
    "soup",
    "kagi",
    "motikomi",
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
  <div class="col-span-2" v-if="!sportspark">
    <img src="../img/icon/service-icon/batting.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">バッティング</p>
  </div>
  <div class="col-span-2" v-if="!sportspark">
    <img src="../img/icon/service-icon/badminton.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">バドミントン</p>
  </div>
  <div class="col-span-2" v-if="!sportspark">
    <img src="../img/icon/service-icon/3on3.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">3on3</p>
  </div>
  <div class="col-span-2" v-if="!sportspark">
  <img src="../img/icon/service-icon/football.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">フットボール</p>
  </div>
  <div class="col-span-2" v-if="!sportspark">
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
    <img src="../img/icon/service-icon/PC.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">オンラインゲーム</p>
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
  <div class="col-span-2" v-if="!motikomi">
  <img src="../img/icon/service-icon/motikomi.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">飲食物もちこみok</p>
</div>
</div>

<div class="grid grid-cols-12 max-w-4xl">
  <div class="col-span-full mb-3">
    <p class="text-2xl text-gray-800 text-center font-black my-10 catch flex justify-center items-center">カラオケルーム・ネットカフェ席</p>
  </div>
  <div class="col-span-2" v-if="!regularroom">
    <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">レギュラールーム</p>
  </div>
  <div class="col-span-2" v-if="!partyroom">
    <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">パーティールーム</p>
  </div>
  <div class="col-span-2" v-if="!goldroom">
    <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">金の部屋</p>
  </div>
  <div class="col-span-2" v-if="!silverroom">
    <img src="../img/icon/service-icon/room2.svg" class="rounded-xl px-2" />
    <p class="text-xs font-semibold sm:text-base text-center">銀の部屋</p>
  </div>
  <div class="col-span-2" v-if="!woman">
  <img src="../img/icon/service-icon/woman.svg" class="rounded-xl px-2" />
  <p class="text-xs font-semibold sm:text-base text-center">女性専用部屋</p>
</div>
<div class="col-span-2" v-if="!kagi">
<img src="../img/icon/service-icon/kagi.svg" class="rounded-xl px-2" />
<p class="text-xs font-semibold sm:text-base text-center">鍵付き防音個室</p>
</div>
</div>

`,
});
const price = Vue.createApp({
  data() {
    return {
      table: "karaoke",
      C1: true,
      C2: false,
      C3: false,
    };
  },
  methods: {
    karaoke() {
      this.table = "karaoke";
      this.C1 = true;
      this.C2 = false;
      this.C3 = false;
    },
    booth() {
      this.table = "booth";
      this.C1 = false;
      this.C2 = true;
      this.C3 = false;
    },
    mahjong() {
      this.table = "mahjong";
      this.C1 = false;
      this.C2 = false;
      this.C3 = true;
    },
  },
});

const basicPlan = Vue.createApp({});

basicPlan.component("basic-plan-table3", {
  props: [
    "a23free",
    "a23basic",
    "time1",
    "time2",
    "time3",
    "b2",
    "b3",
    "b4",
    "b5",
    "c2",
    "c3",
    "c4",
    "c5",
    "color",
  ],
  template: `          <div><table class="min-w-full text-center bg-white">
  <thead class="border-b">
    <tr>
      <th scope="col" class="text-sm font-medium sm:px-6 py-4">

      </th>
      <th scope="col" class="text-sm font-medium sm:px-6 py-4">
      </th>
      <th scope="col" class="text-md font-medium sm:px-6 py-4 bg-sky-200">
        {{time1}}
      </th>
      <th scope="col" class="text-md font-medium sm:px-6 py-4 bg-orange-200">
        {{time2}}
      </th>
      <th scope="col" class="text-md font-medium sm:px-6 py-4 bg-blue-200">
        {{time3}}
      </th>
    </tr>
  </thead>




  <tbody v-if="a23basic">
    <tr class="border-b">
      <td class="text-sm font-medium sm:px-6 py-4 md:text-xl basic" rowspan="2" v-bind:class="{'bg-green-200 ': a23basic, 'bg-sky-200': !a23basic}">
        {{a23basic||a23free}}
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
        {{b2}}
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
        {{b3}}円<span class="text-xs text-black block">税込({{  Math.floor(b3 * 110 / 100)  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{b4}}円<span class="text-xs text-black block">税込({{  Math.floor(b4 * 110 / 100)  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{b5}}円<span class="text-xs text-black block">税込({{  Math.floor(b5 * 110 / 100)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">

      <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
        {{c2}}
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{c3}}円<span class="text-xs text-black block">税込({{  Math.floor(c3 * 110 / 100)  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{c4}}円<span class="text-xs text-black block">税込({{  Math.floor(c4 * 110 / 100)  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{c5}}円<span class="text-xs text-black block">税込({{  Math.floor(c5 * 110 / 100)  }}円)</span>
      </td>

    </tr>
  </tbody>




  <tbody v-if="a23free">
  <tr class="border-b">
    <td class="text-sm font-medium sm:px-6 py-4 bg-blue-200 md:text-xl" rowspan="2">
      フリータイム
    </td>
    <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
      一般
    </td>
    <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
    {{b3}}円<span class="text-xs text-black block">税込({{  Math.floor(b3 * 110 / 100)  }}円)</span>
    </td>
    <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
    {{b4}}円<span class="text-xs text-black block">税込({{  Math.floor(b4 * 110 / 100)  }}円)</span>
    </td>
    <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500" rowspan="2">
    {{b5}}円<span class="text-xs text-black block">税込({{  Math.floor(b5 * 110 / 100)  }}円)</span>
    </td>
  </tr>
  <tr class="border-b">

    <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
      シニア<br><span class="text-sm">(50歳以上)</span>
    </td>
    <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
    {{c3}}円<span class="text-xs text-black block">税込({{  Math.floor(c3 * 110 / 100)  }}円)</span>
    </td>
    <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
    {{c4}}円<span class="text-xs text-black block">税込({{  Math.floor(c4 * 110 / 100)  }}円)</span>
    </td>
  </tr>
</tbody>



</table>
</div>
`,
});
