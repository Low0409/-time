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
  template: `          <div><table class="min-w-full text-center bg-white">
    <thead class="border-b">
      <tr>
        <th scope="col" class="text-sm font-medium sm:px-6 py-4 w-1/5">
  
        </th>
        <th scope="col" class="text-sm font-medium sm:px-6 py-4 w-1/5">
        </th>
        <th scope="col" class="text-md font-medium sm:px-6 py-4 bg-sky-200">
          {{time1}}
        </th>
        <th scope="col" class="text-md font-medium sm:px-6 py-4 bg-orange-200">
          {{time2}}
        </th>
        <th scope="col" class="text-md font-medium sm:px-6 py-4 bg-blue-200" v-if="!small">
          {{time3}}
        </th>
      </tr>
    </thead>
  
  
    <tbody v-if="a23basic">
      <tr class="border-b">
        <td class="text-sm font-medium sm:px-6 py-4 md:text-xl basic bg-green-200" rowspan="2">
          {{a23basic}}
        </td>
        <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
          {{b2}}
        </td>
        <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
          {{Number(b3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b3 * 110 / 100)  }}円)</span>
        </td>
        <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
        {{Number(b4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b4 * 110 / 100)  }}円)</span>
        </td>
        <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500" v-if="!small">
        {{Number(b5).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b5 * 110 / 100)  }}円)</span>
        </td>
      </tr>
      <tr class="border-b" v-if="!small">
  
        <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
          {{c2}}
        </td>
        <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
        {{Number(c3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c3 * 110 / 100)  }}円)</span>
        </td>
        <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
        {{Number(c4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c4 * 110 / 100)  }}円)</span>
        </td>
        <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
        {{Number(c5).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c5 * 110 / 100)  }}円)</span>
        </td>
  
      </tr>
    </tbody>

    <tbody v-if="a23free">
    <tr class="border-b">
      <td class="text-sm font-medium sm:px-6 py-4 bg-blue-200 md:text-xl" rowspan="2">
        {{a23free}}
      </td>
      <td class="sm:text-xl font-black font-black sm:px-6 py-4">
        一般
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(b3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(b4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500" rowspan="2" v-if="!c5">
      {{Number(b5).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b5 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500" v-else>
      {{Number(b5).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b5 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-xl font-black font-black sm:px-6 py-4">
        {{c2}}
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(c3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(c4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500" v-if="c5">
      {{Number(c5).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c5 * 110 / 100).toLocaleString()  }}円)</span>
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
    "title1",
    "title2",
    "b2",
    "b3",
    "b4",
    "c2",
    "c3",
    "c4",
  ],
  template: `
  <table class="min-w-full text-center bg-white">
  <thead class="border-b">
      <tr>
          <th scope="col" class="text-sm font-medium sm:px-6 py-4 w-1/5">
          </th>
          <th scope="col" class="text-sm font-medium sm:px-6 py-4 w-1/5">
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
      <td class="text-sm font-medium sm:px-4 py-4 md:text-xl bg-green-200" rowspan="2" v-if="title1==='基本料金'">
      {{title1}}<br>{{title2}}
  </td>
  <td class="text-sm font-medium sm:px-4 pt-10 md:text-xl bg-blue-200" rowspan="2" v-else-if="title2 ==='フリータイム'">
          {{title1}}<br>{{title2}}
          </td>
          <td class="text-sm font-medium sm:px-4 py-4 md:text-xl bg-yellow-200" rowspan="2" v-else>
              {{title1}}<br>{{title2}}
          </td>
          <td class="sm:text-xl font-black font-black sm:px-6 py-4">
            {{b2}}
          </td>
          <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
              {{Number(b3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b3 * 110 / 100).toLocaleString()  }}円)</span>
          </td>
          <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
              {{Number(b4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b4 * 110 / 100).toLocaleString()  }}円)</span>
          </td>

      </tr>
      <tr v-bind:class="{'border-b': title2 !=='フリータイム'}">

          <td class="sm:text-xl font-black font-black sm:px-4 py-4">
              {{c2}}
          </td>
          <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
              {{Number(c3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c3 * 110 / 100).toLocaleString()  }}円)</span>
          </td>
          <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
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
    <table class="min-w-full text-center bg-white">
  <thead class="border-b border-r">
    <tr>
      <th scope="col" class="text-sm font-medium sm:px-6 py-4">
      </th>
      <th scope="col" class="text-sm font-medium sm:px-6 py-4">
      </th>
      <th scope="col" class="text-md font-medium sm:px-6 py-4 bg-gray-300">
        ブース共通/麻雀/ビリヤード/ダーツ<br>/卓球/スポーツコート
      </th>
      <th scope="col" class="text-md font-medium sm:px-6 py-4 bg-orange-300">
        オープンブース
      </th>
    </tr>
  </thead>
  <tbody>
    <tr class="border-b border-r">
      <td class="text-sm font-medium sm:px-6 py-4 bg-green-200 md:text-xl basic" rowspan="2">
        基本料金
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
        30分まで
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(b3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b3 * 110 / 100).toLocaleString()  }}円)</span>
  
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(b4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(b4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
        延長10分毎
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(c3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(c4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(c4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
  
      </td>
    </tr>
    <tr class="border-b">
      <td class="text-sm font-medium sm:px-6 py-4 bg-orange-100 md:text-xl" rowspan="8">
        パック料金
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
        3時間
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(d3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(d3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(b4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(d4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
  
    <tr class="border-b">
  
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
        6時間
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(e3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(e3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(e4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(e4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
        9時間
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(f3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(f3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(f4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(f4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
        12時間
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(g3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(g3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(b4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(g4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
        15時間
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(h3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(h3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(h4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(h4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
        18時間
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(i3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(i3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(i4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(i4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
        21時間
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(j3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(j3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(j4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(j4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
        24時間
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(k3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(k3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(k4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(k4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
      <td class="text-sm font-medium sm:px-6 py-4 bg-gray-100 md:text-xl bg-blue-100" rowspan="2">
        ナイトパック<br>料金
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
        深夜8時間
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(l3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(l3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
      {{Number(l4).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(l4 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
    </tr>
    <tr class="border-b">
  
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
        深夜10時間
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
      {{Number(m3).toLocaleString()}}円<span class="text-xs text-black block">税込({{  Math.floor(m3 * 110 / 100).toLocaleString()  }}円)</span>
      </td>
      <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
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
        <table class="min-w-full text-center bg-white">
          <thead class="border-b border-r">
            <tr>
              <th scope="col" class="text-sm font-medium sm:px-6 py-4">
              </th>
              <th scope="col" class="text-sm font-medium sm:px-6 py-4">
              </th>
              <th scope="col" class="text-md font-medium sm:px-6 py-4 bg-gray-300">
                {{text}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-r">
              <td class="text-sm font-medium sm:px-6 py-4 bg-green-200 md:text-xl basic" rowspan="2">
                基本料金
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                30分まで
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(b3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(b3 * 110 / 100).toLocaleString() }}円)</span>
  
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                延長10分毎
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(c3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(c3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
  
              </td>
            </tr>
            <tr class="border-b">
              <td class="text-sm font-medium sm:px-6 py-4 bg-orange-100 md:text-xl" rowspan="8">
                パック料金
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                3時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(d3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(d3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
            </tr>
  
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                6時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(e3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(e3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                9時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(f3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(f3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                12時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(g3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(g3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                15時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(h3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(h3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                18時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(i3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(i3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                21時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(j3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(j3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                24時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(k3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(k3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
              <td class="text-sm font-medium sm:px-6 py-4 bg-gray-100 md:text-xl bg-blue-100" rowspan="2">
                ナイトパック<br>料金
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                深夜8時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(l3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(l3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                深夜10時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(m3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(m3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
          </tbody>
        </table>
  
      </div>
    </div>
  </div>
  `,
});

//   5時間パックから始まる料金表/西大津・彦根に使用
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
        <table class="min-w-full text-center bg-white">
          <thead class="border-b border-r">
            <tr>
              <th scope="col" class="text-md font-medium sm:px-6 py-4 bg-red-500" colspan="3">
                {{title}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-r">
              <td class="text-sm font-medium sm:px-6 py-4 bg-green-200 md:text-xl basic" rowspan="2">
                基本料金
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                30分まで
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(b3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(b3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                延長10分毎
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(c3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(c3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
  
              </td>
            </tr>
            <tr class="border-b">
              <td class="text-sm font-medium sm:px-6 py-4 bg-orange-100 md:text-xl" rowspan="7">
                パック料金
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                5時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(d3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(d3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
            </tr>
  
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                9時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(f3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(f3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                12時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(g3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(g3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                15時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(h3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(h3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                18時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(i3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(i3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                21時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(j3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(j3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                24時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(k3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(k3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
  
            </tr>
            <tr class="border-b">
              <td class="text-sm font-medium sm:px-6 py-4 bg-gray-100 md:text-xl bg-blue-100" rowspan="2">
                ナイトパック<br>料金
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4">
                深夜8時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500">
                {{Number(l3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(l3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
            </tr>
            <tr class="border-b">
  
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 bg-gray-100">
                深夜10時間
              </td>
              <td class="sm:text-2xl font-black font-black sm:px-6 py-4 text-red-500 bg-gray-100">
                {{Number(m3).toLocaleString()}}円<span class="text-xs text-black block">税込({{ Math.floor(m3 * 110 / 100).toLocaleString() }}円)</span>
              </td>
            </tr>
          </tbody>
        </table>
  
      </div>
    </div>
  </div>
  `,
});
