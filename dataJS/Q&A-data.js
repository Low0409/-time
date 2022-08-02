const app = Vue.createApp({
  data() {
    return {
      QA_List: [
        {
          Q: "個室を利用したいのですが、料金はどれくらいになりますか︖",
          A: "店舗によって異なりますので各店舗ページにある料金表をご確認ください。",
          path: "./search.html",
          pathName: "各店舗ページへ",
        },
        {
          Q: "どんな漫画が置いてありますか︖",
          A: "コミック検索から探すことができます。また、入荷したタイトルはコミック一覧ページで確認できます",
          path: "./comic.html",
          pathName: "コミックページへ",
        },
        {
          Q: "店舗にある設備はどこで確認できますか︖",
          A: "各店舗ページにある、サービスアイコンをご確認ください",
          path: "./search.html",
          pathName: "各店舗ページへ",
        },
        {
          Q: "コロナウイルス感染対策は徹底していますか︖",
          A: "店内備品の消毒はもちろん、通常より廃棄風量を上げて換気を徹底しています。また従業員も出勤前に検温を実施しており安心してご利用いただけます。",
        },
        {
          Q: "シニア割の適用は何歳からですか︖",
          A: "50歳から適用される店舗と60歳から適用される店舗があります。ご利用したい店舗ページにてご確認ください。",
        },
        {
          Q: "会員制ですが毎月会員費がかかったりしますか？",
          A: "いいえ、年会費、月会費はかかりません。@time新規ご利用のお客様には、入会金300円が必要になります。入会の際には、身分証明書(運転免許証・学生証・保険証などが必要です)",
        },
      ],
    };
  },
});
