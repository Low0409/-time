
// 各店舗ページの料金表の切替タブメニューの表示/非表示↓
const price = Vue.createApp({
  data() {
    return {
      C1: true,
      C2: false,
      C3: false,
    };
  },
  methods: {
    button1() {
      this.C1 = true;
      this.C2 = false;
      this.C3 = false;
    },
    button2() {
      this.C1 = false;
      this.C2 = true;
      this.C3 = false;
    },
    button3() {
      this.C1 = false;
      this.C2 = false;
      this.C3 = true;
    },
  },
});
// 各店舗ページの料金表の切替タブメニューの表示/非表示↑


// 税込価格の計算法・・・Math.floor(b3 * 110 / 100).toLocaleString().replace(/1$/,0)
// Math.floor小数点以下切り捨て　.toLocaleString()コンマ付ける　.replace(/1$/,0)まれに末尾が1円になってしまう料金があるので0に置き換え　

const basicPlan = Vue.createApp({});
// 2行3列の料金表価格部分が5個　 c5要素がある場合は結合なしで6個
// smallを受け取った場合、1列と1行分無くなった表になる
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
    "small",
  ],
  template: `          <div><table class="min-w-full text-center bg-white font-black">
    <thead class="border-b">
      <tr>
        <th scope="col" class="text-sm sm:px-6 py-4 w-1/5">
  
        </th>
        <th scope="col" class="text-sm sm:px-6 py-4 w-1/5">
        </th>
        <th scope="col" class="text-md sm:px-6 py-4 bg-sky-200">
          {{time1}}
        </th>
        <th scope="col" class="text-md sm:px-6 py-4 bg-orange-200">
          {{time2}}
        </th>
        <th scope="col" class="text-md sm:px-6 py-4 bg-blue-200" v-if="!small">
          {{time3}}
        </th>
      </tr>
    </thead>
  
  
    <tbody v-if="a23basic">
      <tr class="border-b">
        <td class="text-sm sm:px-6 py-4 md:text-xl basic bg-green-200" rowspan="2">
          {{a23basic}}
        </td>
        <td class="sm:text-2xl sm:px-6 py-4">
          {{b2}}
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
          {{Number(b3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
        {{Number(b4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500" v-if="!small">
        {{Number(b5).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b5 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
        </td>
      </tr>
      <tr class="border-b" v-if="!small">
  
        <td class="sm:text-2xl sm:px-6 py-4">
          {{c2}}
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
        {{Number(c3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
        {{Number(c4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
        {{Number(c5).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c5 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
        </td>
  
      </tr>
    </tbody>

    <tbody v-if="a23free">
    <tr class="border-b">
      <td class="text-sm sm:px-6 py-4 bg-blue-200 md:text-xl" rowspan="2">
        {{a23free}}
      </td>
      <td class="sm:text-xl sm:px-6 py-4">
        一般
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(b3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(b4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500" rowspan="2" v-if="!c5">
      {{Number(b5).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b5 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500" v-else>
      {{Number(b5).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b5 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-xl sm:px-6 py-4">
        {{c2}}
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(c3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(c4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500" v-if="c5">
      {{Number(c5).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c5 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
  </tbody>
  
  
  
  </table>
  </div>
  `,
});
// 時間が2列で2行の表
basicPlan.component("basic-plan-table2_2", {
  props: [
    "time1",
    "time2",
    "title",
    "b2",
    "b3",
    "b4",
    "c2",
    "c3",
    "c4",
  ],
  template: `
  <table class="min-w-full text-center bg-white font-black">
  <thead class="border-b">
      <tr>
          <th scope="col" class="text-sm sm:px-6 py-4 w-1/5">
          </th>
          <th scope="col" class="text-sm sm:px-6 py-4 w-1/5">
          </th>
          <th scope="col" class="bg-orange-200 py-4">
              {{time1}}
          </th>
          <th scope="col" class="bg-sky-200 py-4">
              {{time2}}
          </th>

      </tr>
  </thead>

  <tbody>
      <tr class="border-b">
      <td class="text-sm sm:px-4 py-4 md:text-xl bg-green-200" rowspan="2" v-if="title==='基本料金'">
      {{title}}
  </td>
  <td class="text-sm sm:px-4 pt-10 md:text-xl bg-blue-200" rowspan="2" v-else-if="title ==='フリータイム'">
          {{title}}
          </td>
          <td class="text-sm sm:px-4 py-4 md:text-xl bg-yellow-200" rowspan="2" v-else>
              {{title.substr( 0, 6 )}}<br>{{title.substr( 6, 5 )}}
          </td>
          <td class="sm:text-xl sm:px-6 py-4">
            {{b2}}
          </td>
          <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
              {{Number(b3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b3 * 110 / 100).toLocaleString()  }}円)</span>
          </td>
          <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
              {{Number(b4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b4 * 110 / 100).toLocaleString()  }}円)</span>
          </td>

      </tr>
      <tr v-bind:class="{'border-b': title2 !=='フリータイム'}">

          <td class="sm:text-xl sm:px-4 py-4">
              {{c2}}
          </td>
          <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
              {{Number(c3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c3 * 110 / 100).toLocaleString()  }}円)</span>
          </td>
          <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
              {{Number(c4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c4 * 110 / 100).toLocaleString()  }}円)</span>
          </td>
      </tr>
  </tbody>

</table>
  </div>
  `,
});

//   ブース共通・オープンブースの列がある＋3時間パックから始まる　ブース料金表
const BoothPlan = Vue.createApp({});

BoothPlan.component("booth-plan-table", {
  props: [
    "b3",
    "b4",
    "c3",
    "c4",
    "d3",
    "d4",
    "e3",
    "e4",
    "f3",
    "f4",
    "g3",
    "g4",
    "h3",
    "h4",
    "i3",
    "i4",
    "j3",
    "j4",
    "k3",
    "k4",
    "l3",
    "l4",
    "m3",
    "m4",
  ],
  template: `
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 block-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
    <table class="min-w-full text-center bg-white font-black">
  <thead class="border-b border-r">
    <tr>
      <th scope="col" class="text-sm sm:px-6 py-4">
      </th>
      <th scope="col" class="text-sm sm:px-6 py-4">
      </th>
      <th scope="col" class="text-md sm:px-6 py-4 bg-gray-300">
        ブース共通/麻雀/ビリヤード/ダーツ<br>/卓球/スポーツコート
      </th>
      <th scope="col" class="text-md sm:px-6 py-4 bg-orange-300">
        オープンブース
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-r">
      <td class="text-sm sm:px-6 py-4 bg-green-200 md:text-xl basic" rowspan="2">
        基本料金
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
        30分まで
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(b3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
  
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(b4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl sm:px-6 py-4">
        延長10分毎
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(c3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(c4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
  
      </td>
    </tr>
    <tr class="border-b">
      <td class="text-sm sm:px-6 py-4 bg-orange-100 md:text-xl" rowspan="8">
        パック料金
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
        3時間
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(d3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(d3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(d4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(d4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
  
    <tr class="border-b">
  
      <td class="sm:text-2xl sm:px-6 py-4">
        6時間
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(e3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(e3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(e4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(e4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
        9時間
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(f3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(f3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(f4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(f4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl sm:px-6 py-4">
        12時間
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(g3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(g3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(g4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(g4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
        15時間
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(h3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(h3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(h4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(h4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl sm:px-6 py-4">
        18時間
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(i3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(i3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(i4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(i4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
        21時間
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(j3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(j3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(j4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(j4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl sm:px-6 py-4">
        24時間
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(k3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(k3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(k4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(k4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
      <td class="text-sm sm:px-6 py-4 bg-gray-100 md:text-xl bg-blue-100" rowspan="2">
        ナイトパック<br>料金
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
        深夜8時間
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(l3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(l3 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(l4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(l4 * 110 / 100).toLocaleString().replace(/1$/,0)  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl sm:px-6 py-4">
        深夜10時間
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(m3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(m3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
      {{Number(m4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(m4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
  </tbody>
  </table>
  
  </div>
  </div>
  </div>
  `,
});

//   オープンブース列がないブース料金表

BoothPlan.component("booth-plan-table2", {
  props: [
    "text",
    "b3",
    "c3",
    "d3",
    "e3",
    "f3",
    "g3",
    "h3",
    "i3",
    "j3",
    "k3",
    "l3",
    "m3",
  ],
  template: `

    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 block-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center bg-white font-black">
          <thead class="border-b border-r">
            <tr>
              <th scope="col" class="text-sm sm:px-6 py-4">
              </th>
              <th scope="col" class="text-sm sm:px-6 py-4">
              </th>
              <th scope="col" class="text-md sm:px-6 py-4 bg-gray-300 w-1/2">
                {{text}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-r">
              <td class="text-sm sm:px-6 py-4 bg-green-200 md:text-xl basic" rowspan="2">
                基本料金
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                30分まで
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(b3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(b3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
  
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4">
                延長10分毎
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(c3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(c3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
  
              </td>
            </tr>
            <tr class="border-b">
              <td class="text-sm sm:px-6 py-4 bg-orange-100 md:text-xl" rowspan="8">
                パック料金
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                3時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(d3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(d3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
            </tr>
  
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4">
                6時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(e3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(e3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                9時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(f3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(f3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4">
                12時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(g3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(g3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                15時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(h3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(h3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4">
                18時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(i3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(i3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                21時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(j3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(j3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4">
                24時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(k3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(k3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
              <td class="text-sm sm:px-6 py-4 bg-gray-100 md:text-xl bg-blue-100" rowspan="2">
                ナイトパック<br>料金
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                深夜8時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(l3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(l3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4">
                深夜10時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(m3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(m3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
          </tbody>
        </table>
  
      </div>
    </div>
  </div>
  `,
});

//   5時間パックから始まる料金表/西大津・彦根(麻雀格闘俱楽部)に使用
const BoothPlan2 = Vue.createApp({});

BoothPlan2.component("booth-plan-table5", {
  props: [
    "title",
    "b3",
    "c3",
    "d3",
    "e3",
    "f3",
    "g3",
    "h3",
    "i3",
    "j3",
    "k3",
    "l3",
    "m3",
  ],
  template: `

    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 block-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center bg-white font-black">
          <thead class="border-b border-r">
            <tr>
              <th scope="col" class="text-md sm:px-6 py-4 bg-red-500 text-white" colspan="3">
                {{title}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-r">
              <td class="text-sm sm:px-6 py-4 bg-green-200 md:text-xl basic" rowspan="2">
                基本料金
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                30分まで
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(b3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(b3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4">
                延長10分毎
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(c3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(c3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
  
              </td>
            </tr>
            <tr class="border-b">
              <td class="text-sm sm:px-6 py-4 bg-orange-100 md:text-xl" rowspan="7">
                パック料金
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                5時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(d3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(d3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
            </tr>
  
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4">
                9時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(f3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(f3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                12時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(g3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(g3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4">
                15時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(h3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(h3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                18時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(i3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(i3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4">
                21時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(j3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(j3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                24時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(k3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(k3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
              <td class="text-sm sm:px-6 py-4 bg-gray-100 md:text-xl bg-blue-100" rowspan="2">
                ナイトパック<br>料金
              </td>
              <td class="sm:text-2xl sm:px-6 py-4">
                深夜8時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
                {{Number(l3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(l3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
                深夜10時間
              </td>
              <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(m3).toLocaleString()}}円<span class="text-xs text-black">税込({{ Math.floor(m3 * 110 / 100).toLocaleString().replace(/1$/,0) }}円)</span>
              </td>
            </tr>
          </tbody>
        </table>
  
      </div>
    </div>
  </div>
  `,
});


const BoothPlanDetail = Vue.createApp({});

BoothPlanDetail.component("booth-plan-detail", {

  template: `
  <div class="sm:flex font-black border-4 border-orange-500 bg-yellow-100">
  <div class="bg-orange-500 text-white py-2 sm:py-8 text-center sm:w-1/3 text-xl">自動パック料金<br>キャンペーン実施中!</div>
  <div class="py-4 sm:pt-10 mx-auto text-xl md:text-2xl text-center text-red-500">お得なパック料金に自動的に<br class="sm:hidden">切り替わります！</div>
</div>
<p class="font-black">※0歳～3歳のお子様は無料、4歳～小学生(12歳)のお子様は各席料金の半額となります。(保護者の方同伴のご利用となります。)</p>
<p class="font-black">※当店は会員制となっております。ご入店のお客様、お一人様ずつの会員登録が必要となります。</p>
<p class="font-black">※チャックアウト予定時間より5分経過しますと延長料金が発生し、10分毎に料金が加算されますので予めご了承ください。</p>
</div>
  `,
});



//麻雀timeの料金表/彦根・長浜バイパス・草津に使用　料金は店舗共通のため引数無し
const MahjongTime = Vue.createApp({});

MahjongTime.component("mahjong-time-price-table", {

  template: `
  <div class="bg-green-800 p-2 sm:p-4 font-black">
  <h3 class="text-center text-white text-3xl mb-2">麻雀time料金表</h3>
  
  <table class="min-w-full text-center bg-white my-4">
  
    <tbody>
      <tr class="border-b">
        <td class="text-sm sm:px-6 py-4 bg-green-200 md:text-xl basic">
          基本料金
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
          最初の30分
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
          273円<span class="text-xs text-black block">税込(300円)</span>
        </td>
  
      </tr>
      <tr class="border-b">
        <td class="text-sm sm:px-6 py-4 bg-green-200 md:text-xl basic">
          延長料金
        </td>
        <td class="sm:text-2xl sm:px-6 py-4">
          15分毎
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
          91円<span class="text-xs text-black block">税込(100円)</span>
        </td>
      </tr>

      <tr class="border-b bg-green-800">
      <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-green-800" colspan="3">
  
      </td>
      </tr>

      <tr class="border-b">
        <td class="text-sm sm:px-6 py-4 bg-orange-100 md:text-xl" rowspan="6">
          パック料金
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
          3時間
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
          1,091円<span class="text-xs text-black block">税込(1,200円)</span>
        </td>
      </tr>
  
      <tr class="border-b">
  
        <td class="sm:text-2xl sm:px-6 py-4">
          6時間
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
          1,910円<span class="text-xs text-black block">税込(2,100円)</span>
        </td>
      </tr>
      <tr class="border-b">
  
        <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
          9時間
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
          2,455円<span class="text-xs text-black block">税込(2,700円)</span>
        </td>
      </tr>
      <tr class="border-b">
  
        <td class="sm:text-2xl sm:px-6 py-4">
          12時間
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500">
          2,910円<span class="text-xs text-black block">税込(3,200円)</span>
        </td>
      </tr>
      <tr class="border-b">
  
        <td class="sm:text-2xl sm:px-6 py-4 bg-gray-100">
          15時間
        </td>
        <td class="sm:text-2xl sm:px-6 py-4 text-red-500 bg-gray-100">
          3,364円<span class="text-xs text-black block">税込(3,700円)</span>
        </td>
  
      </tr>
    </tbody>
  </table>
  
  <div class="flex bg-white mb-4">
    <div class="p-2 sm:p-6 mt-6">
      <p class="text-2xl font-black text-center">営業時間6:00～24:00</p>
      <p class="text-red-600">※最終受付は23:00までとさせて頂きます。</p>
    </div>
    <div class="p-2 sm:p-6">
      <p class="bg-red-500 text-white p-2 text-center">20歳未満(高校生以下)のご利用はお断りいたします。</p>
      <p>※3名様以上からのご利用となります。(1名様ずつ会員証が必要になります。)</p>
      <p>※賭博行為・公共秩序を乱す行為は固くお断りさせていただきます。</p>
      <p>※貸卓は行っておりません。</p>
  
    </div>
  </div>
  </div>
  `,
});
