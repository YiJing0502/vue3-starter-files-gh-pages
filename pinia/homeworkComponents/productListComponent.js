// 元件向 Pinia 取用資料
// 使用 Pinia 方法取得資料狀態
// 使用 const 的方式取用 Pinia 方法
// 取得多個資料狀態(getters當中多個資料狀態), 使用 mapGetters, 但因為這個在之後版本會被棄用，改用 mapState
// 取得多個方法，使用mapActions
const { mapState, mapActions } = Pinia;
// 匯入 store
import productStore from '../store/productStore.js';
import cartStore from '../store/cartStore.js';
// 單純的使用沒有修改，因此在vue中使用 computed ，使用展開的方式
// 1.  從哪裡 productStore
// 2. 在getters中會被使用到的屬性名稱
export default {
  template: `<div class="container">
  <div class="row row-cols-3 g-4">
    <div class="col" v-for="item in sortProducts" :key="item.id">
      <div class="card">
        <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
        <div class="card-body">
          <h6 class="card-title">{{item.title}}</h6>
          <p class="card-text">NT$ {{item.price}}
          </p>
          <a href="#" class="btn btn-outline-primary w-100" @click.prevent="addToCart(item.id)">加入購物車</a>
        </div>
      </div>
    </div>
  </div>
</div>`,
  computed: {
    ...mapState(productStore, ['sortProducts'])
  },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  },
}