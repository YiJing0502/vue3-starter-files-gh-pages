// 元件向 Pinia 取用資料
// 匯入 store
import cartStore from '../store/cartStore.js';
// 使用 Pinia 方法取得資料狀態
// 取得多個資料狀態(getters當中多個資料狀態), 使用 mapGetters, 但因為這個在之後版本會被棄用，改用 mapState
const { mapState, mapActions } = Pinia;
// 單純的使用沒有修改，因此在vue中使用 computed ，使用展開的方式
// 1.  從哪裡 productStore
// 2. 在getters中會被使用到的屬性名稱
export default {
    template: `<div class="container">
  <div class="bg-light my-4 p-4">
    <!-- v-if -->
    <p v-if="!cartList.carts.length">購物車內沒有任何品項</p> 
    <!-- v-else -->
    <table v-else class="table align-middle">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">#</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td><img :src="item.product.imageUrl" :alt="item.product.title" class="table-image"></td>
          <td>{{item.product.title}}</td>
          <td>
            <select class="form-select" aria-label="Default select example" :value="item.qty" @change="(ev)=>setCartQty(item.id,ev)">
              <option :value="i" v-for="i in 20" :key="i">{{i}}</option>
            </select>
          </td>
          <td>小計$ {{item.subtotal}}</td>
          <th scope="row"><a href="" class="text-dark" @click.prevent="removeCartItem(item.id)">x</a></th>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額：NT$ {{cartList.total}}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>`,
  computed: {
    ...mapState(cartStore, ['cartList'])
  },
  methods: {
    ...mapActions(cartStore, ['removeCartItem', 'setCartQty'])
  },
}