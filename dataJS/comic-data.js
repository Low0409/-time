new Vue({
  el: "#comiclist2",
  data: {
    number: 0,
    btnMore: 1,
  },
  methods: {
    more: function () {
      this.number++;
      this.btnMore--;
    },
  },
});
new Vue({
  el: "#comiclist1",
  data: {
    ComicList: [
      {
        name: "G123",
        img: "../img/online_game/G123.jpg",
        url: "https://g123.jp/?lang=ja",
      },
      {
        name: "LOST ARK",
        img: "../img/online_game/LA.jpg",
        url: "https://lostark.pmang.jp/",
      },
      {
        name: "VALORANT",
        img: "../img/online_game/valorant.jpg",
        url: "https://playvalorant.com/ja-jp/",
      },
      {
        name: "War Thunder",
        img: "../img/online_game/WT.jpg",
        url: "http://www.nepoca.com/title/warthunder/index.html",
      },
      {
        name: "ドラゴンクエストX",
        img: "../img/online_game/DQ10.jpg",
        url: "http://www.nepoca.com/dqx/",
      },
      {
        name: "FINAL FANTASY XIV",
        img: "../img/online_game/FF14.jpg",
        url: "https://jp.finalfantasyxiv.com/lodestone/",
      },
      {
        name: "PSO2 ニュージェネシス",
        img: "../img/online_game/PSO2.jpg",
        url: "https://pso2.jp/players/",
      },
      {
        name: "リネージュ",
        img: "../img/online_game/lineage.jpg",
        url: "https://www.ncsoft.jp/lineage/",
      },
      {
        name: "リネージュ2",
        img: "../img/online_game/lineage2.jpg",
        url: "https://www.ncsoft.jp/lineage2/",
      },
    ],
  },
});
