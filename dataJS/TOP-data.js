new Vue({
  el: "#sp-content",
  data: {
    ServiceList: [
      {
        name: "ビリヤード",
        icon: "./img/icon/billiard.svg",
        path: "./services/amusement/billiard.html",
      },
      {
        name: "ダーツ",
        icon: "./img/icon/darts.svg",
        path: "./services/amusement/darts.html",
      },
      {
        name: "卓球",
        icon: "./img/icon/pinpon.svg",
        path: "./services/amusement/takkyu.html",
      },
      {
        name: "麻雀格闘俱楽部",
        icon: "./img/icon/karaoke.svg",
        path: "./services/amusement/mahjong.html",
      },
      {
        name: "映画・アニメ",
        icon: "./img/icon/anime.svg",
        path: "",
      },
      {
        name: "コミック・雑誌",
        icon: "./img/icon/book.svg",
        path: "./comic.html",
      },
      {
        name: "ビジネス・勉強",
        icon: "./img/icon/study.svg",
        path: "",
      },
      {
        name: "オンラインゲーム",
        icon: "./img/icon/game.svg",
        path: "./services/online.html",
      },
    ],
  },
});
