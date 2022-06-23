new Vue({
  el: "#comiclist",
  data: {
    number: 0,
    btnMore: 1,
    ComicList: [
      {
        title: "ワンパンマン/26巻",
        img: "./img/comic/comic1.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic2.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic4.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic5.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic6.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic7.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
    ],
    MoreComicList: [
      {
        title: "ワンパンマン/26巻",
        img: "./img/comic/comic1.JPG",
        day: "2022/06/23",
      },
      {
        title: "ワンパンマン/26巻",
        img: "./img/comic/comic1.JPG",
        day: "2022/06/23",
      },
      {
        title: "ワンパンマン/26巻",
        img: "./img/comic/comic1.JPG",
        day: "2022/06/23",
      },
      {
        title: "ワンパンマン/26巻",
        img: "./img/comic/comic1.JPG",
        day: "2022/06/23",
      },
      {
        title: "ワンパンマン/26巻",
        img: "./img/comic/comic1.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic2.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic4.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic5.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic6.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic7.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
      {
        title: "タイトル/〇巻",
        img: "./img/comic/comic3.JPG",
        day: "2022/06/23",
      },
    ],
  },
  methods: {
    more: function () {
      this.number++;
      this.btnMore--;
    },
  },
});
