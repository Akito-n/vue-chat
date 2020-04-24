import Vue from 'vue';
import ActionCable from 'actioncable';
import Chat from '../TheChat';

const cable = ActionCable.createConsumer('ws:localhost:3000/cable');
Vue.prototype.$cable = cable;

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#chat',
    render: h => h(Chat)
  })
})
