const magazinelist = Vue.createApp({
  data() {
    return {
      MagagineList: [
        {
          name: "ビューン読み放題スポット",
          img: "./img/magazine/viewn2.jpg",
          description: "ビューンは雑誌・マンガの読み放題サービスです。",
        },
        {
          name: "各種雑誌",
          img: "./img/magazine/viewn2.jpg",
          description: "様々な雑誌を取り揃えております。また雑誌のバックナンバーもご用意しておりますので、調べ物などにもお役立てください。",
        },
        {
          name: "新聞",
          img: "./img/magazine/news_paper.jpg",
          description: "新聞もご覧いただけます。",
        },
      ],
    };
  },
});
