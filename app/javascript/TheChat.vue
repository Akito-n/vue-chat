<template>
  <div>
    <input v-model="msgText" placeholder="ここにメッセージ" />
    <button v-if="messageChannel" @click="speak">送信</button>
    <li v-for="(message, index) in messages" :key="index">{{ message.message || "中身ないよ" }}</li>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msgText: "",
      messages: [],
      messageChannel: null
    };
  },
  created() {
    this.messageChannel = this.$cable.subscriptions.create("MessageChannel", {
      received: data => {
        console.log("dataきた");
        this.messages.push(data);
      }
    });
  },
  methods: {
    speak() {
      console.log("msg送った", this.msgBox);
      this.messageChannel.perform("speak", {
        message: this.msgText
      });
    }
  }
};
</script>
