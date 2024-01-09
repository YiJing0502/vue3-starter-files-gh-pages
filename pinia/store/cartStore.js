// 因為 Pinia 是建立在全域的環境下，所以直接使用const方式導入
// 定義 store
const { defineStore } = Pinia;
// 引入 productStore
import productStore from './productStore.js';
// 建立 store
export default defineStore('cartStore', {
  // 資料
  state: ()=>({
    // 存放購物車資料
    cart: []
  }),
  // 方法
  actions: {
    addToCart(productId, qty = 1){
      const findItemIndex = this.cart.findIndex((el)=>el.productId===productId);
      if(findItemIndex !== -1 ){
        console.log();
        this.cart[findItemIndex].qty += qty;
      }else{
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty
        })
      }
      console.log(this.cart);
    },
    setCartQty(id, event){
      const findCartIdIndex = this.cart.findIndex((el)=>el.id === id);
      this.cart[findCartIdIndex].qty = event.target.value * 1;
      // event 接收到的數值為字串 使用 *1 轉型成 數值
    },
    removeCartItem(cartId){
      const findCartIdIndex = this.cart.findIndex((el)=>el.id === cartId);
      this.cart.splice(findCartIdIndex, 1);
    }
  },
  getters: {
    // 資料給元件做使用時可以使用 getters(讓元件取用相關的資料狀態)，在vue中對應的是 computed
    // 在getters如何取用cart，當前的購物狀態？在這裡是使用箭頭函示可以用解構的方式取用cart
    cartList: ({cart})=>{
      // 3-1 購物車的品項資訊需要整合產品資訊
      // 在 store 取用 另一個 store的資料時是直接去執行這個 store
      // 透過展開的形式將資料取出來
      // 這裡的「展開」是指使用解構賦值方式取得物件中的特定屬性
      const { products } = productStore();
      // 取出購物車中的產品
      const carts = cart.map((el)=>{
        // 單一產品取出
        const product = products.find((item)=>item.id === el.productId);
        return {// 匯出
          ...el, // 展開當前購物車資訊
          product, // 單一產品資訊
          subtotal: product.price * el.qty
        }
      });
      const total = carts.reduce((pre,cur)=>pre+cur.subtotal,0);
      return {
        carts,
        total,
      }
    }
  }
})

