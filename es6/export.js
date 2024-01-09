export default {
  data: [ // 資料
      '這是第一句話',
      '這是第二句話',
      '這是第三句話'
  ],
  removeData(id){ // 事件觸發
    this.data.splice(id, 1);
    this.render();
  },
  render(){ // 資料渲染到畫面上的方法
    const list = document.querySelector('.component ul');
    let content = '';
    this.data.forEach((item, i)=>{
      content = `${content}<li>${item}<button data-id="${i}" type="button" class="btn">移除</button></li>`;
      console.log(content);
    });
    list.innerHTML = content;
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((button)=>{
      button.addEventListener('click',(event)=>{
        this.removeData(event.target.dataset.id);
      })
    })
    console.log(buttons);
  },
  init(){ // 生命週期
    this.render();
  }
}