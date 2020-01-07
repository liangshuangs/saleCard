import './tooltip.css'
let ToolTip = {}
ToolTip.install = (Vue) => {
  Vue.prototype.$toolTip = (msg, time=3000) => {
// 1、创建构造器，定义toolTip模板
let TipTemplate = Vue.extend({
  template: `<div id="tooltip">
              </div>`

})
let container = document.querySelector('#tooltip')
if(!container) {
  // 2、创建实例，挂载到文档以后的地方
  container = new TipTemplate().$mount().$el
}
let app = document.querySelector('#app')
// loading延迟200ms消失，所以这里也延迟200ms出现，防止冲突
setTimeout(() => {
  app && app.appendChild(container)
},200)
   

let contentTpl = Vue.extend({
  template: `<div class="tooltip-msg">
              ${msg} 
              </div>`

})
let msgtpl = new contentTpl().$mount().$el
 // 3、把创建的实例添加到app中
 container && container.appendChild(msgtpl)
 setTimeout(() => {
  container && container.removeChild(msgtpl)
 },time)
  }
}
export default ToolTip
