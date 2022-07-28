const app = Vue.createApp({
  data() {
    return {
      amusementlist: [
        {
          name: "ビリヤード",
          img: "./img/TOP/2.jpg",
          description: "Billiard",
          url: "./services/amusement/billiard.html",
        },
        {
          name: "ダーツ",
          img: "./img/TOP/3.jpg",
          description: "Darts",
          url: "./services/amusement/darts.html",
        },
        {
          name: "卓球",
          img: "./img/TOP/4.jpg",
          description: "Table tennis",
          url: "./services/amusement/takkyu.html",
        },
        {
          name: "麻雀格闘俱楽部・麻雀",
          img: "./img/services/mahjong.jpg",
          description: "Mahjong",
          url: "./services/amusement/mahjong.html",
        },
        {
          name: "スポーツパーク",
          img: "./img/services/sports-park/batting.jpg",
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
      netcafeServiceList: [
        {
          name: "動画サービス",
          img: "./img/services/movie-services/bandai.jpg",
          description: "Video Content Service",
          url: "./services/net-cafe/video.html",
        },
        {
          name: "オンラインゲーム",
          img: "./img/TOP/9.jpg",
          description: "PC Online Game",
          url: "./services/online.html",
        },
        {
          name: "コミック・雑誌",
          img: "./img/TOP/7.jpg",
          description: "Comic & Magazines",
          url: "./comic.html",
        },
        {
          name: "ビジネス勉強",
          img: "./img/TOP/8.jpg",
          description: "Business & Study",
          url: "./services/net-cafe/work_study.html",
        },
      ],
      BasicServiceList: [
        {
          name: "ソフトクリーム食べ放題",
          img: "./img/services/basic-services/soft.jpg",
          description: "Soft-serve Ice Cream",
          url: "./services/defaultservice.html",
        },
        {
          name: "シャワー無料(一部店舗有料)",
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
          img: "./img/services/basic-services/soup.jpg",
          description: "Soup bar",
          url: "./services/defaultservice.html",
        },
        {
          name: "フリーWi-Fi",
          img: "./img/services/basic-services/wi-fi.jpg",
          description: "Free Wi-Fi",
          url: "./services/defaultservice.html",
        },
      ],
    };
  },
});
