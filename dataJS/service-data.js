new Vue({
  el: "#amusement",
  data: {
    amusementlist: [
      {
        name: "ビリヤード",
        img: "./img/services/billiard.jpg",
        description: "Billiard",
        url: "./services/amusement/billiard.html",
      },
      {
        name: "ダーツ",
        img: "./img/services/darts.jpg",
        description: "Darts",
        url: "./services/amusement/darts.html",
      },
      {
        name: "卓球",
        img: "./img/services/takkyu.jpg",
        description: "Table tennis",
        url: "./services/amusement/takkyu.html",
      },
      {
        name: "麻雀格闘俱楽部・麻雀",
        img: "./img/services/majan.jpeg",
        description: "Majan",
        url: "./services/amusement/mahjong.html",
      },
      {
        name: "スポーツパーク",
        img: "./img/services/sports_batting.jpg",
        description: "Sports Park",
        url: "./services/amusement/sportspark.html",
      },
      {
        name: "バンドスタジオ",
        img: "./img/services/karaoke_band.jpg",
        description: "Band Studio",
        url: "./services/amusement/bandstudio.html",
      },
    ],
  },
});
new Vue({
  el: "#netcafe",
  data: {
    netcafeServiceList: [
      {
        name: "動画サービス",
        img: "./img/services/movie-services/bandai.jpg",
        description: "Video Content Service",
        url: "./services/net-cafe/video.html",
      },
      {
        name: "オンラインゲーム",
        img: "./img/online_game/valorant.jpg",
        description: "PC Online Game",
        url: "./services/online.html",
      },
      {
        name: "コミック雑誌を読む",
        img: "./img/services/takkyu.jpg",
        description: "Comic & Magazines",
        url: "./comic.html",
      },
      {
        name: "ビジネス勉強",
        img: "./img/services/majan.jpeg",
        description: "Business & Study",
        url: "./services/net-cafe/work_study.html",
      },
    ],
  },
});
new Vue({
  el: "#basic",
  data: {
    BasicServiceList: [
      {
        name: "ソフトクリーム食べ放題",
        img: "./img/services/basic-services/soft.jpg",
        description: "Soft-serve Ice Cream",
        url: "./services/defaultservice.html",
      },
      {
        name: "シャワー無料",
        img: "./img/services/basic-services/syawa.jpg",
        description: "Shower",
        url: "./services/defaultservice.html",
      },
      {
        name: "ドリンクバー飲み放題",
        img: "./img/services/basic-services/drink.jpg",
        description: "Drink bar",
        url: "./services/defaultservice.html",
      },
      {
        name: "スープバー",
        img: "./img/services/majan.jpeg",
        description: "Soup bar",
        url: "./services/defaultservice.html",
      },
    ],
  },
});
