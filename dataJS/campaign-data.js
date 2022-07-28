const app = Vue.createApp({
  data() {
    return {
      // campaign.htmlのデータ
      campaignList: [
        {
          title: "【全店】入会金無料キャンペーン実施中！",
          img: "../img/news&campaign/07_nyukai.jpg",
          id: "nyukai",
          date: "2022/07/25",
        },
        {
          title: "ダーツ岩田夏海プロ、来店イベント開催！",
          img: "../img/news&campaign/07_darts.jpg",
          id: "iwatapro",
          date: "2022/07/04",
        },
        {
          title: "グリーンチャンネル7月のおすすめレースはコチラ!",
          img: "../img/news&campaign/gc_2205.jpg",
          id: "greenchannel",
          date: "2022/07/01",
        },
        {
          title: "ボルガライスフェア実施中!",
          img: "../img/news&campaign/06_borga.jpg",
          id: "borga",
          date: "2022/06/20",
        },
        {
          title: "【水口・西大津限定】ネットカフェ3時間以上ご利用で席料半額!",
          img: "../img/news&campaign/06_sekiryou.jpg",
          id: "hangaku",
          date: "2022/07/01",
        },
        {
          title: "ベルロード店リニューアルオープン！",
          img: "../img/news&campaign/04_bell.jpg",
          id: "bellroad",
          date: "2022/04/28",
        },
        {
          title:
            "【長浜店・長浜バイパス店・彦根店・八日市店・近江八幡店・水口店・守山店・草津店・西大津店】麻雀格闘倶楽部 Extreme 絶賛稼働中！",
          img: "../img/news&campaign/05_mahjong.jpg",
          id: "mahjong",
          date: "2022/04/26",
        },
        {
          title: "【西大津店】カラオケ・ダーツ・ビリヤード新料金プラン登場！",
          img: "../img/news&campaign/02_nishi.jpg",
          id: "newplan",
          date: "2022/02/24",
        },
        {
          title: "【彦根店】@time会員カードでジムが利用できます!",
          img: "../img/news&campaign/12_hikone_hf24.jpg",
          id: "hf24",
          // date: "yyyy/mm/dd",
        },
        {
          title: "【長浜バイパス店】ボードゲーム無料貸し出ししています!",
          img: "../img/news&campaign/02_bord.jpg",
          id: "boadgame",
          // date: "2022/07/01",
        },
        {
          title: "【全店】 オーダーストップに関してのお知らせ!",
          img: "../img/news&campaign/09_odstop.jpg",
          id: "odstop",
          // date: "2022/07/01",
        },
        {
          title: "【全店】飲食物持ち込みOK!!",
          img: "../img/news&campaign/09_insyoku.jpg",
          id: "motikomi",
          // date: "2022/07/01",
        },
        {
          title: "電子マネー・クレジットカード使えます",
          img: "../img/news&campaign/06_dencre.jpg",
          id: "dencre",
          // date: "2022/07/01",
        },
        {
          title: "当店の高速Wi-Fは無料でご利用頂けます!",
          img: "../img/news&campaign/wifi.jpg",
          id: "wifi",
          // date: "2022/07/01",
        },
        {
          title: "LINE始めました!",
          img: "../img/news&campaign/line.jpg",
          id: "line",
          // date: "2022/07/01",
        },

        {
          title: "小学生以下のお子様、ご利用料金無料キャンペーン実施中！",
          img: "../img/news&campaign/02_kids.jpg",
          id: "syougakusei",
          // date: "2022/07/01",
        },
        {
          title: "【ネットカフェ】 60歳以上毎日ブース料金10%オフ！",
          img: "../img/news&campaign/senior.jpg",
          id: "senior",
          // date: "2022/07/01",
        },
        {
          title: "レディースデー毎週水曜日席料20%OFF",
          img: "../img/news&campaign/ladies.jpg",
          id: "ladies",
          // date: "2022/07/01",
        },
        {
          title: "徹底したコロナ対策@timeの取り組み",
          img: "../img/news&campaign/corona.jpg",
          id: "corona",
          date: "2022/07/20",
        },
      ],
    };
  },
});
