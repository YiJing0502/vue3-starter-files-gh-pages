// 匯入 store
import cartStore from '../store/cartStore.js';
// 使用 Pinia 方法取得資料狀態
const { mapState } = Pinia;
export default {
    template: `<div class="container">
  <nav class="navbar bg-light">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">GLOW</span>
      <button type="button" class="btn">
        購物車
        <span class="badge rounded-pill text-white bg-danger">{{cart.length}}</span>
      </button>
    </div>
  </nav>
</div>`,
    computed: {
      ...mapState(cartStore, ['cart'])
    }
  }