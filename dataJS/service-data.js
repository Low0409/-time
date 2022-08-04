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
          text: "@timeでは、ソフトクリーム食べ放題です。豊富な品揃えのコミックを片手に、思い思いの時間をお過ごしください。",
          url: "./services/defaultservice.html#soft",
        },
        {
          name: "シャワー無料(一部店舗有料)",
          id: "shower",
          img: "./img/services/basic-services/syawa.jpg",
          description: "Shower",
          text: `汗を流したい⽅には、シャワールームも完備。※一部有料の店舗がございます。詳しくは各店舗ページのサービス一覧をご確認ください。`,
          url: "./services/defaultservice.html#shower",
        },
        {
          name: "ドリンクバー飲み放題",
          id: "drink",
          img: "./img/services/basic-services/drink.jpg",
          description: "Drink bar",
          text: "@timeでは、ソフトドリンクは勿論、淹れたてのコーヒーや紅茶、フローズンドリンクまで。20種類以上のドリンクが全て飲み放題です。",
          url: "./services/defaultservice.html#drink",
        },
        {
          name: "スープバー",
          id: "soup",
          img: "./img/services/basic-services/soupbar.jpg",
          description: "Soup bar",
          text: "@timeでは、無料のスープバーもご用意しています。",
          url: "./services/defaultservice.html#soup",
        },
        {
          name: "フリーWi-Fi",
          id: "wifi",
          img: "./img/services/basic-services/wi-fi.jpg",
          description: "Free Wi-Fi",
          text: "@timeでは、フリーWi-Fiをご利用いただけます。",
          url: "./services/defaultservice.html#wifi",
        },
      ],
    };
  },
});
