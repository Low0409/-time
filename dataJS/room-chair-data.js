const app = Vue.createApp({
  data() {
    return {
      roomList: [
        {
          name: "レギュラールーム",
          img: "./img/room-chair/room_regular.jpg",
          description:
            "オーソドックスなカラオケルームです。大きめのソファーにゆったりと腰掛けながら、家族や友達とカラオケをお楽しみ下さい。",
        },
        {
          name: "フルフラットルーム",
          img: "./img/room-chair/room_flat.jpg",
          description:
            "全面がフラットになったお部屋です。思い切り足を伸ばせるほか、寝転んでもOK。くつろぎながらカラオケをお楽しみいただけます。",
        },
        {
          name: "階段の部屋",
          img: "./img/room-chair/room_kaidan.jpg",
          description:
            "階段状になっているお部屋です。ソファのように腰掛けたり、足を伸ばしたりしておくつろぎください。",
        },
        {
          name: "金の部屋",
          img: "./img/room-chair/room_gold.jpg",
          description:
            "壁紙からソファまで、すべてが金色のお部屋です。階段の部屋と同じく段差のある部屋になっており、腰掛けたり、足を伸ばしたりしてくつろげます。",
        },
        {
          name: "銀の部屋",
          img: "./img/room-chair/room_silver.jpg",
          description:
            "壁紙からソファまで、すべてが銀色のお部屋です。階段の部屋と同じく段差のある部屋になっており、腰掛けたり、足を伸ばしたりしてくつろげます。",
        },
        {
          name: "赤の部屋",
          img: "./img/room-chair/room_red.jpg",
          description:
            "壁紙からソファまで、すべてが赤色のお部屋です。レギュラールームと変わらない大きめのソファをご用意しておりますので、ゆったりとお楽しみいただけます。",
        },
        {
          name: "青の部屋",
          img: "./img/room-chair/room_blue.jpg",
          description:
            "壁紙からソファまで、すべてが青色のお部屋です。レギュラールームと変わらない大きめのソファをご用意しておりますので、ゆったりとお楽しみいただけます。",
        },
        {
          name: "ファミリールーム",
          img: "./img/room-chair/room_family.jpg",
          description:
            "ご家族でカラオケを楽しむのに最適なお部屋です。小さなお子様用にブロックなどもご用意してあります。",
        },
        {
          name: "キッズフラットルーム",
          img: "./img/room-chair/room_kids.jpg",
          description:
            "全面がフラットになったお部屋です。思い切り足を伸ばせるほか、寝転んでもOK。くつろぎながらカラオケをお楽しみいただけます。",
        },
        {
          name: "こたつの部屋",
          img: "./img/room-chair/room_kotatu.jpg",
          description:
            "座りやすい座椅子を設置したこたつのあるお部屋です。掘りごたつになっているので、足が痛くなる心配もありません。",
        },
        {
          name: "パーティールーム",
          img: "./img/room-chair/room_party.jpg",
          description:
            "30人ほどが入れる大きなお部屋です。大人数でカラオケを楽しむことができ、打ち上げや二次会などにもご利用頂けます。",
        },
      ],
        chairList: [
          {
            name: "リクライニング席",
            img: "./img/room-chair/booth_reclining.jpg",
            description: "個室仕様の静かでゆったりとしたリクライニングチェア席です。インターネットだけでなく、DVD鑑賞やゲーム、読書などを楽しむのに最適です。",
          },
          {
            name: "キャプテンシート",
            img: "./img/room-chair/booth_captain.jpg",

            description: "大人気！！座り心地抜群のキャプテンシート。頭を支えてくれるほどに背もたれが高いので、ビジネスや勉強にと、多目的にご利用いただけます。",
          },
          {
            name: "マッサージチェア",
            img: "./img/room-chair/booth_massage.jpg",

            description: "仕事や生活で溜まった疲れを、アットタイム自慢のスーパーマッサージチェアで癒してください。",
          },
          {
            name: "座敷席",
            img: "./img/room-chair/booth_zashiki.jpg",
            description: "個室仕様の静かな座敷席。足を伸ばしてみたり、寝転んでみたり。思い思いの過ごし方をお楽しみいただけます。",
          },
          {
            name: "ペア座敷席",
            img: "./img/room-chair/booth_pairzashiki.jpg",
            description: "座敷席をペアでお使いいただけます。パソコンやDVD観賞のほかに、PS2ゲームもお楽しみいただけます。",
          },
          {
            name: "ペアソファ席",
            img: "./img/room-chair/booth_pairsofa.jpg",
            description: "大きなソファが人気のペアソファ席。家族や友達とゆったりとした時間をお過ごし下さい。",
          },
          {
            name: "オープン席",
            img: "./img/room-chair/booth_open.jpg",
            description: "個室よりもリーズナブルな料金でご利用いただけます。景色を楽しみながらゆっくりとおくつろぎください！",
          },
        ],
    };
  },
});
