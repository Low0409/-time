const app = Vue.createApp({
  data() {
    return {
      more_comic_list: 0,
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
    };
  },
  methods: {
    more() {//もっと見るボタンが消えて、コミックリストが表示される
      this.btnMore--;
      this.more_comic_list++;
    },
  },
});
