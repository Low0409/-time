const video = Vue.createApp({
  data() {
    return {
      VideoServiceList: [
        {
          name: "BANDAI CHANNEL",
          img: "../../img/services/movie-services/bandai.jpg",
          description:
            "最新作から名作までアニメをたっぷり楽しめる動画配信サービス!@timeでは、対象の作品が見放題!",
        },
        {
          name: "DAZN",
          img: "../../img/services/movie-services/DAZN.jpg",
          description:
            "プロ野球・サッカー・F1™ ・テニス、ゴルフなど、最新のライブ&見逃し配信コンテンツをチェック! まだまだライブ配信コンテンツが充実!番組表で最新のライブ中継の詳細を観てみよう。 年間10,000試合以上・ライブ中継・見逃し配信・スポーツを高画質で観戦。",
        },
        {
          name: "CINEMA CHANNEL",
          img: "../../img/services/movie-services/bnr-cinemach.gif",
          description:
            "シネマチャンネル. 国内外の多数の映画・プロレス・グラビアの動画などが、 インターネットカフェの店内に限り、無料でお楽しみいただけるサービスです。",
        },
        {
          name: "Piction",
          img: "../../img/services/movie-services/piction.jpg",
          description:
            "人気のアニメや国内外の映画・ドラマ・バラエティコンテンツなどが、@timeで無料で楽しめる。",
        },
        {
          name: "GREEN CHANNEL",
          img: "../../img/services/movie-services/green.jpg",
          description:
            "中央競馬全レースをライブ配信するJRA公式の動画配信サービスです。レース展望など勝ち馬検討に役立つ中央競馬最新情報はもちろん、海外、地方競馬情報のコンテンツも充実。見逃し配信でお好きな時間にVOD動画で視聴することもできます。 ",
        },
        {
          name: "ふらっと動画",
          img: "../../img/services/movie-services/frat.jpg",
          description:
            "懐かしの名作から最新作まで見放題!全国のふらっと動画公認店舗でお楽しみいただける国内最大の動画配信サービスです。",
        },
        {
          name: "パリーグTV",
          img: "../../img/services/movie-services/Pa.jpg",
          description:
            "パ・リーグTVはスマホ、PC、タブレットでパ・リーグ主催全試合をライブ配信します。見逃したシーンはVOD（動画）で見放題!いつでもどこでもプロ野球をお楽しみ頂けます。",
        },
        {
          name: "韓流チャンネル",
          img: "../../img/services/movie-services/kanryu.jpg",
          description:
            "韓国ドラマならではのラブコメや、K-POPアイドルが活躍するドラマ及びバラエティー作品などを中心に、様々なジャンルの韓流映像コンテンツを保有。",
        },
        {
          name: "パチンコ★パチスロTV!",
          img: "../../img/services/movie-services/pati.png",
          description:
            "「パチテレ!NETプレミアム」が全面リニューアル! 5000本以上の動画が見放題!新規番組を毎月70本追加&最新話を一挙最速配信! 再生プレイヤーの機能が大幅アップ!",
        },
      ],
    };
  },
});

const study = Vue.createApp({
  data() {
    return {
      StudyServiceList: [
        {
          name: "WPS Office",
          img: "../../img/services/business/WPSOffice.png",
          description:
            "ビジネスや勉強にも役立つ「エクセル」「ワード」を全てのパソコンにインストールしてあります。試験勉強やレポート作成の際などにご利用ください。",
        },
        {
          name: "NewsPicks",
          img: "../../img/services/business/newspicks.png",
          description:
            "NewsPicksは、日本のソーシャル型オンライン経済メディア、ニュースサイトです。国内外90以上のメディアから経済ニュースを配信。@timeなら無料で閲覧できます。",
        },
        {
          name: "flier",
          img: "../../img/services/business/flier.png",
          description:
            "flier（フライヤー）は本の要約サービスです。1冊10分、忙しくてもスキマ時間で効率よくインプットできます。 ベストセラーから新刊まで2,600冊以上!今読むべきビジネス書に出会える、時短読書サービス。 スキマ時間でインプット・1冊10分で読める要約。",
        },
        {
          name: "LEC東京リーガルマインド",
          img: "../../img/services/business/LEC.jpg",
          description: "資格の総合スクールLECの講座を無料で受講可能!",
        },
      ],
    };
  },
});
