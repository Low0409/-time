// 一部画像はBoothメニューと共有
new Vue({
  el: "#onecoin",
  data: {
    menulist: [
      {
        name: "三元豚の串カツ",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Karaoke/1coin/kushikatsu.png",
        description: "Skewwers of Ternary Pork",
      },
      {
        name: "たこ焼き",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Booth/side-menu/takoyaki.png",
        description: "Takoyaki",
      },
      {
        name: "柔らかタコ唐揚げ",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Karaoke/1coin/takokaraage.png",
        description: "Fried Octopus",
      },
      {
        name: "柔らかイカ下足唐揚げ",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Karaoke/1coin/ikakaraage.png",
        description: "Fried Squid",
      },
      {
        name: "コリコリ軟骨唐揚げ",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Karaoke/1coin/StaminaBowl.png",
        description: "Fried Cartilage",
      },
      {
        name: "若鶏の唐揚げ(6個)",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Booth/side-menu/karaage.png",
        description: "Deep-fried Chicken",
      },
      {
        name: "チキンナゲット",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Booth/side-menu/naget.png",
        description: "Naggets",
      },
      {
        name: "ハッシュドポテト＆ソーセージ",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Booth/side-menu/hashedsou.png",
        description: "Hashed Potato & Sausages",
      },
      {
        name: "ポテト＆ナゲット",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Booth/side-menu/poteto&naget.png",
        description: "French Fries & Naggets",
      },
      {
        name: "ポテト＆唐揚げ",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Booth/side-menu/potetokaraage.png",
        description: "French Fries & Deep-fried Chicken",
      },
      {
        name: "タワーオニオンフライ",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Karaoke/1coin/ChineeStyleFriedRice.png",
        description: "Onion rings",
      },
      {
        name: "フライドカルテット",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Karaoke/1coin/ChineeStyleFriedRice.png",
        description: "Fried Quartet",
      },
      {
        name: "メガポテト",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Booth/side-menu/megapoteto.png",
        description: "Mega French Fries",
      },
    ],
  },
});
new Vue({
  el: "#rice",
  data: {
    menulist: [
      {
        name: "オムハヤシ",
        price: "682",
        tax_price: "750",
        img: "./img/menu/Booth/curry/OmHayashi.png",
        description: "Omelette Hayashi",
      },
      {
        name: "ビーフカレー",
        price: "591",
        tax_price: "650",
        img: "./img/menu/Booth/curry/BeefCurry.png",
        description: "Beef Curry",      },
      {
        name: "ハヤシライス",
        price: "591",
        tax_price: "650",
        img: "./img/menu/Booth/curry/HayashiRice.png",
        description: "Hayashi Rice",
      },
      {
        name: "ビーフカレーオムライス",
        price: "682",
        tax_price: "750",
        img: "./img/menu/Booth/curry/RiceOmelette&BeefCurry.png",
        description: "Rice Omelette & Beef Curry",
      },
      {
        name: "ボルガライス",
        price: "800",
        tax_price: "880",
        img: "./img/menu/Booth/curry/BorgaRice.png",
        description: "Borga Rice",
          },
      {
        name: "たっぷりビーフのドリア",
        price: "655",
        tax_price: "720",
        img: "./img/menu/Booth/curry/BeefDoria.png",
        description: "Beef Doria",
      },
      {
        name: "ケチャップオムライス",
        price: "655",
        tax_price: "720",
        img: "./img/menu/Booth/curry/KetchupRiceOmelette.png",
        description: "Kechap Rice Omelette",
      },
      {
        name: "エビピラフ",
        price: "528",
        tax_price: "580",
        img: "./img/menu/Booth/don/ShrimpPiraf.png",
        description: "Shrimp Piraf",
      },
      {
        name: "本格炒めチャーハン",
        price: "528",
        tax_price: "580",
        img: "./img/menu/Booth/don/ChineeStyleFriedRice.png",
        description: "Chinee Style Fried Rice",
      },
    ],
  },
});
new Vue({
  el: "#pizza",
  data: {
    menulist: [
      {
        name: "ミックスピザ",
        price: "619",
        tax_price: "680",
        img: "./img/menu/Booth/Bread&Pizza/mixpizza.png",
        description: "Mix Pizza",
      },
      {
        name: "ジャンボミックスピザ",
        price: "619",
        tax_price: "680",
        img: "./img/menu/Karaoke/curry/OmHayashi.png",
        description: "Deep-fried chiken Plate",
      },
      {
        name: "カルボナーラ",
        price: "619",
        tax_price: "680",
        img: "./img/menu/Booth/Pasta/kalbo.png",
        description: "Carbonara",
      },
      {
        name: "ナポリタン",
        price: "619",
        tax_price: "680",
        img: "./img/menu/Booth/Pasta/napoli.png",
        description: "Napolitan Spaghetti",
      },
      {
        name: "ボロネーゼ",
        price: "619",
        tax_price: "680",
        img: "./img/menu/Booth/Pasta/bolo.png",
        description: "Bolognese",
      },
    ],
  },
});
new Vue({
  el: "#hot",
  data: {
    menulist: [
      {
        name: "きつねうどん",
        price: "410",
        tax_price: "450",
        img: "./img/menu/Booth/Pasta/kitsuneudon.png",
        description: "Kitsune Udon",
      },
      {
        name: "チゲうどん",
        price: "500",
        tax_price: "550",
        img: "./img/menu/Booth/Pasta/tigeudon.png",
        description: "Chige Udon",
      },
      {
        name: "とんこつラーメン",
        price: "473",
        tax_price: "520",
        img: "./img/menu/Booth/Pasta/tonkoturamen.png",
        description: "Tonkotsu Ramen",
      },
      {
        name: "しょうゆラーメン",
        price: "473",
        tax_price: "520",
        img: "./img/menu/Booth/Pasta/syoyuramen.png",
        description: "Soy sauce Ramen",
      },
      {
        name: "焼きそば",
        price: "473",
        tax_price: "520",
        img: "./img/menu/Booth/Pasta/yakisoba.png",
        description: "Fried Noodle",
      },
      {
        name: "オムソース焼きそば",
        price: "619",
        tax_price: "680",
        img: "./img/menu/Booth/Pasta/omusoba.png",
        description: "Fried Noodle Omelette",
      },
    ],
  },
});
new Vue({
  el: "#side",
  data: {
    menulist: [
      {
        name: "ミニサラダ",
        price: "346",
        tax_price: "380",
        img: "./img/menu/Booth/Bread&Pizza/salada.png",
        description: "Mini Salad",
      },
      {
        name: "枝豆",
        price: "255",
        tax_price: "280",
        img: "./img/menu/Karaoke/Bread&Pizza/mixpizza.png",
        description: "Mix Pizza",
      },
      {
        name: "メガバスケット",
        price: "891",
        tax_price: "980",
        img: "./img/menu/Karaoke/Bread&Pizza/katuSandwitch.png",
        description: "Deep-fried Sirloin Pork Sandwitch",
      },
      {
        name: "スナックバスケット",
        price: "528",
        tax_price: "580",
        img: "./img/menu/Karaoke/Bread&Pizza/katuSandwitch.png",
        description: "Miso katsu Sandwitch",
      },
    ],
  },
});
new Vue({
  el: "#sweets",
  data: {
    menulist: [
      {
        name: "パンケーキ",
        price: "319",
        tax_price: "350",
        img: "./img/menu/Booth/Sweets/pancake.png",
        description: "Pancake",
      },
      {
        name: "スイートパンケーキ",
        price: "364",
        tax_price: "400",
        img: "./img/menu/Booth/Sweets/sweetpancake.png",
        description: "Sweet Pancake",
      },
      {
        name: "フォンダンショコラ",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Booth/Sweets/chocolat2.png",
        description: "Fondant Chocolat",
      },
      {
        name: "フレンチトースト",
        price: "455",
        tax_price: "500",
        img: "./img/menu/Booth/Sweets/frenchtoast.png",
        description: "French Toast",
      },
    ],
  },
});
