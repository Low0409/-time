// トップページのPC用画像とスマホ用アイコンデータ
const app = Vue.createApp({
  data() {
    return {
      ServiceList: [
        {
          name: "カラオケ",
          icon: "./img/icon/karaoke.svg",
          img: "./img/TOP/1.jpg",
          path: "./services/karaoke.html",
        },
        {
          name: "ビリヤード",
          icon: "./img/icon/billiard.svg",
          img: "./img/TOP/2.jpg",
          path: "./services/amusement/billiard.html",
        },
        {
          name: "ダーツ",
          icon: "./img/icon/darts.svg",
          img: "./img/TOP/3.jpg",
          path: "./services/amusement/darts.html",
        },
        {
          name: "卓球",
          icon: "./img/icon/pinpon.svg",
          img: "./img/TOP/4.jpg",
          path: "./services/amusement/takkyu.html",
        },
        {
          name: "麻雀格闘俱楽部",
          icon: "./img/icon/MKG.png",
          img: "./img/TOP/5.jpg",
          path: "./services/amusement/mahjong.html",
        },
        {
          name: "映画・アニメ",
          icon: "./img/icon/anime.svg",
          img: "./img/TOP/6.jpg",
          path: "./services/net-cafe/video.html",
        },
        {
          name: "コミック・雑誌",
          icon: "./img/icon/book.svg",
          img: "./img/TOP/7.jpg",
          path: "./comic.html",
        },
        {
          name: "ビジネス・勉強",
          icon: "./img/icon/study.svg",
          img: "./img/TOP/8.jpg",
          path: "./services/net-cafe/work_study.html",
        },
        {
          name: "オンラインゲーム",
          icon: "./img/icon/game.svg",
          img: "./img/TOP/9.jpg",
          path: "./services/online.html",
        },
      ],
    };
  },
});

const topslider = Vue.createApp({
  data() {
    return {
      TOPsliderList: [
        {
          img: "./img/top-slider-img/slider_11.jpg",
          path: "./services/karaoke.html",
          alt: "ダーツ岩田夏海プロ、来店イベント開催！",
        },
        {
          img: "./img/top-slider-img/slider_6.jpg",
          path: "./services/amusement/billiard.html",
          alt: "LIVEDAMAi大量導入!",
        },
        {
          img: "./img/top-slider-img/slider_4.jpg",
          path: "./services/amusement/darts.html",
          alt: "24時間年中無休のカラオケ&アミューズ&インターネットカフェ",
        },
        {
          img: "./img/top-slider-img/slider_10.jpg",
          path: "./services/amusement/takkyu.html",
          alt: "各種アミューズ施設も充実！",
        },
      ],
    };
  },
});
//Infomation バナースライド 部分 クリックするとcampaign.htmlに移動する ココ修正するときcampaign-data.jsも同時に書き換える
const subslider = Vue.createApp({
  data() {
    return {
      // pathのページ内リンク(#)はcampaign-data.jsのid属性と同じにする
      SUBsliderList: [
        {
          img: "./img/top-slider-img/7.jpg",
          path: "./info/campaign.html#corona",
          alt: "安心の新型コロナウイルス対策",
        },
        {
          img: "./img/top-slider-img/08_nomihoudai.jpg",
          path: "./info/campaign.html#nomihoudai",
          alt: "セルフ飲み放題プラン",
        },
        {
          img: "./img/top-slider-img/4.jpg",
          path: "./info/campaign.html#nyukai",
          alt: "新規入会金無料キャンペーン実施中",
        },
        {
          img: "./img/top-slider-img/07_darts.jpg",
          path: "./info/campaign.html#iwatapro",
          alt: "岩田夏海プロ来店イベント",
        },
        {
          img: "./img/top-slider-img/8.jpg",
          path: "./info/campaign.html#greenchannel",
          alt: "GREENチャンネル店内放送中",
        },
        {
          img: "./img/top-slider-img/2.jpg",
          path: "./info/campaign.html#bellroad",
          alt: "@time彦根ベルロードリニューアルオープン",
        },
        {
          img: "./img/top-slider-img/6.jpg",
          path: "./info/campaign.html#borga",
          alt: "ボルガライス",
        },
        {
          img: "./img/top-slider-img/3.jpg",
          path: "./info/campaign.html#mahjong",
          alt: "麻雀格闘俱楽部",
        },
        {
          img: "./img/top-slider-img/1.jpg",
          path: "./info/campaign.html#newplan",
          alt: "カラオケビリヤード新料金プラン登場",
        },
        {
          img: "./img/top-slider-img/senior.jpg",
          path: "./info/campaign.html#senior",
          alt: "いつでもシニア割",
        },
        {
          img: "./img/top-slider-img/woman.jpg",
          path: "./info/campaign.html#ladies",
          alt: "レディースデー",
        },
      ],
    };
  },
});
