// 因為 Pinia 是建立在全域的環境下，所以直接使用const方式導入
// 因為要定義 store 所以會使用 defineStore
const { defineStore } = Pinia;
// 使用defineStore 建立一個 store
// 有兩個參數，第一個是自定義名稱，一個是建立一個物件
export default defineStore('productsStore', {
  // data, methods, computed
  // state, action, getters
  // 資料給元件做使用時可以使用 getters(讓元件取用相關的資料狀態)
  state: ()=>({
    products: [
        {
          id: 1,
          title: '多色餅乾',
          imageUrl: 'https://images.unsplash.com/photo-1576717585968-8ea8166b89b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: 80
        },
        {
          id: 2,
          title: '綠色馬卡龍',
          imageUrl: 'https://images.unsplash.com/photo-1623066463831-3f7f6762734d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1135&q=80',
          price: 120
        },
        {
          id: 3,
          title: '甜蜜左擁右抱',
          imageUrl: 'https://images.unsplash.com/photo-1558312657-b2dead03d494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: 200,
        },
        {
          id: 4,
          title: '巧克力心連心',
          imageUrl: 'https://images.unsplash.com/photo-1606913084603-3e7702b01627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: 160
        },
        {
          id: 5,
          title: '粉係馬卡龍',
          imageUrl: 'https://images.unsplash.com/photo-1612201142855-7873bc1661b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          price: 120
        }
      ]
  }),
  getters: {
    // 將products帶過來時，給他另外一個名稱，等等會做排序這個產品列表
    // 先不做任何事情先回傳
    // 如何取用products?在這裡是使用箭頭函示解構的方式取用products,再回傳出去就可以ㄌ
    sortProducts: ({products})=>{
      return products.sort((a,b)=>a.price-b.price);
    }
  }
})