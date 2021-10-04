const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: 'unix编程',
        date: '2016-9',
        price: 75.00,
        count: 1
      },
      {
        id: 3,
        name: '精通mysql',
        date: '2009-4',
        price: 145.00,
        count: 1
      },
      {
        id: 4,
        name: 'python入门',
        date: '2019-4',
        price: 99.00,
        count: 1
      }
    ],
    isRemoveId: []
    // sum: this.books[0].price
  },
  methods: {

    addClick(index) {
      let currentCount = this.books[index].count;
      if (currentCount >= 0) {
        this.books[index].count += 1;
      }
    },
    subClick(index) {
      let currentCount = this.books[index].count;
      if (currentCount > 0) {
        this.books[index].count -= 1;

      }
    },
    // removeBook(item, books) {
    removeBook(index) {
      // console.log(item);
      // console.log(this.isRemoveId);
      // for (let i = 0; i < books.length; i++) {
      //   if (books[i].id === item.id) {
      //     books.splice(i, 1)
      //   }
      // }
      this.books.splice(index,1)
    }
  },
  //定义过滤器,用来复用小数点两位小数
  filters: {
    showPrice(price) {
      //.toFixed(2)保留两位小数
      return '$' + price.toFixed(2)
    }
  },
  computed: {
    sum() {
      let sum = 0;
      // if (Object.keys(this.books).length) {
        // let i in/of obj, 这里的i是索引值
        // for (let item in this.books) {
        //   sum += this.books[item].price * this.books[item].count;
        // }
        // 这里of进行遍历,item得到的是里面的对象
        for (let item of this.books) {
          sum += item.price * item.count
        }
      return sum
      }
    }
  // }
});