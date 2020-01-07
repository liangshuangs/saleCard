<template>
  <div class="mask">
    <div class="add-wraper">
     <div class="title">添加擅长领域</div>
     <div class="content">
       <input type="text" v-model="value" placeholder="最多8个汉字(16个字符)">
     </div>
     <div class="footer">
       <span class="footer-btn cancel" @click="handleCancel">取消</span>
       <span class="footer-btn confirm" @click="handleOk">确定</span>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    handleCancel() {
      this.$emit('close')
    },
    handleOk(){
      this.$emit('close')
      this.$emit('add', this.value)
    }
  },
}
</script>
<style lang="scss" scoped>
.mask {
  position: absolute;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  .add-wraper {
    width: 280px;
    min-height: 157px;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color: #ffffff;
    border-radius:4px;
    .title {
      font-size:16px;
      font-family:PingFangSC-Semibold,PingFang SC;
      font-weight:600;
      color:rgba(17,17,17,1);
      padding: 20px 0 0 15px;
    }
    .content {
      padding: 0 15px 0 15px;
      margin-top: 20px;
      input {
        border: none;
        width: 100%;
        border-bottom: 1px solid #ededed;
        padding: 5px 0;
        font-size:14Px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(51,51,51,1);
      }
    }
    .footer {
      display: flex;
      flex-direction: row;
      text-align: center;
      align-content: center;
      align-items: center;
      margin-top: 20px;
      border-top: 1px solid #ededed;
      .footer-btn {
        flex: 1;
        height: 40px;
        line-height: 40px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1)
      }
      .confirm {
        color:rgba(51,119,255,1);
      }
      .footer-btn + .footer-btn {
        border-left: 1px solid #ededed;
      }
    }
  }
}
</style>

