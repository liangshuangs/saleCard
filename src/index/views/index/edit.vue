<template>
  <div class="edit">
    <ul class="form" ref="FullScreenId">
      <li class="form-item">
        <label class="require" for="">头像</label>
        <div class="item-info avatar-w">
           <img class="avatar" src="../../assets/img/avatar.png" alt="">
           <i class="form-icon to-right-icon"></i>
        </div>
      </li>
       <li class="form-item">
        <label for="">姓名</label>
        <input class="item-info disabled" type="text" v-model="form.name" disabled />
      </li>
      <li class="form-item">
        <label for="">公司</label>
        <input class="item-info disabled" v-model="form.company" disabled type="text">
      </li>
      <li class="form-item">
        <label class="require" for="">地址</label>
        <input class="item-info" type="text" v-model="form.address">
      </li>
      <li class="form-item">
        <label for="">电话</label>
        <input class="item-info disabled" v-model="form.tel" type="text" disabled>
      </li>
      <li class="form-item">
         <label for="">二维码</label>
        <div class="item-info avatar-w">
           <img class="erweima" src="../../assets/img/erweima.png" alt="">
           <i class="form-icon to-right-icon"></i>
        </div>
      </li>
      <li class="form-item">
        <label class="require align-self" for="">擅长领域</label>
        <div class="item-info">
           <p class="tip">添加擅长领域标签(最多4个)</p>
           <ul class="good-ul">
             <li v-for="(item, index) in domains" :key="index" class="good-item"><span class="text">{{item}}</span> <i class="close-icon" @click="delDomain(item)"></i> </li>
             <li @click="isAddModal=true" v-show="!domains || domains.length < 4" class="good-item"><span class="text">添加</span> <i class="close-icon add-cion"></i> </li>
           </ul>
        </div>
      </li>
      <li class="form-item">
        <label class="require align-self" for="">自我介绍</label>
        <textarea rows="3" @focus="handleFocus" @blur="handleBlur" cols="20" class="item-info textarea" v-model="form.detail"></textarea>
      </li>
    </ul>
    <div class="footer" @click="handleSave">
      保存
    </div>
    <add-modal v-show="isAddModal" @close="isAddModal=false" @add="addGoods"></add-modal>
  </div>
</template>
<script>
import AddModal from './addModal';
import { setTimeout } from 'timers';
import * as actions from './sever';
export default {
  components: {AddModal},
  data() {
    return {
      isAddModal: false, // 添加擅长领域
      form: {
      }
    }
  },
 mounted() {
   this._getUserInfo();
 },
 computed: {
   domains() {
      let domains = this.form && this.form.domainMsg
      // console.log(domains,'domains')
      if(domains) {
        let arr = domains.split(',')
        return arr
      }
    }
 },
 methods: {
   // 获取用户信息
   _getUserInfo() {
     let info = this.$route.params
     this.form = info
   },
   // 失去焦点
   handleBlur() {
      window.scrollTo(0, 0);
   },
   // 获得焦点
   handleFocus() {
     let dom = this.$refs.FullScreenId
     dom.scrollTop = dom.scrollHeight
   },
   // 添加擅长领域
   addGoods (value) {
     if(this.domains && this.domains.includes(value)) {
       return
     }
     let msg = this.form.domainMsg ? this.form.domainMsg + ',' : ''
     this.$set(this.form,'domainMsg', msg + value)
   },
   // 删除删除领域
   delDomain(item) {
     let arr = this.form.domainMsg.split(',')
     let newArr = arr.filter(i => i !== item)
     this.$set(this.form,'domainMsg', newArr.join(','))

   },
    // 保存
    async handleSave() {
      if(!this.form.bspid) {
        this.$toolTip('缺少参数，请稍后再试!')
        return
      }
      let res = await actions.updateInfo(this.form)
      if(res.code === 200) {
        this.$toolTip('保存成功!')
      }

    }
 },
}
</script>
<style lang="scss" scoped>
.edit {
  box-sizing: border-box;
  background-color: #ffffff;
  padding-bottom: 60px;
  position: absolute;
  left:0;
  right: 0;
  top:0;
  bottom:0;
  font-size: 14PX;
  .form {
    box-sizing: border-box;
    height: calc(100% - 80px);
    padding: 5px 15px 0 20px;
    .form-item {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: center;
      border-bottom: 1px solid #EDEDED;
      position: relative;
      padding: 5px 0;
       input {
          height: 32px;
          line-height: 32px;
        }
        input:disabled {
          background-color: inherit;
        }
        input,.textarea {
          font-size:14Px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(51,51,51,1);
        }
      label {
        width: 65px;
        display: inline-block;
        font-size:14Px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(51,51,51,1);
        position: relative;
      }
      .align-self {
        align-self: flex-start;
      }
      .require::before {
        color: #FF0000;
        display: inline-block;
        content: "*";
        left:-10px;
        position: absolute;
      }
      .item-info {
        min-height: 32px;
        border:none;
        flex:1;
        flex-shrink: 0;
        align-self: flex-start;
        .avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .erweima {
          width: 16px;
          height: 16px;
          vertical-align: middle;
        }
        .tip {
          font-size:14Px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color:rgba(170,170,170,1);
        }
        .good-ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          box-sizing: border-box;
          .good-item {
            margin-top: 5px;
            box-sizing: border-box;
            font-size:14Px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(51,119,255,1);
            background:rgba(242,246,255,1);
            border-radius:2px;
            border:1px solid rgba(51,119,255,1);
            padding: 3px 6px;
             margin-right: 16px;
            .text {
              vertical-align: middle;
            }
            .close-icon {
              vertical-align: middle;
              width: 14px;
              height: 14px;
              display: inline-block;
              background: url('../../assets/img/del.png') no-repeat;
              background-size: 100%
            }
            .add-cion {
              background: url('../../assets/img/add.png') no-repeat;
              background-size: 100%
            }
          }
        }
      }
      .textarea {
        text-align: left;
      }
      .disabled {
        font-size:14Px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color: #515151;
      }
      .avatar-w {
        text-align: right;
      }
      .form-icon  {
        width: 14px;
        height: 14px;
        display: inline-block;
        vertical-align: middle;
      }
      .to-right-icon {
         background: url('../../assets/img/to-right.png') no-repeat;
        background-size: 100%
      }
    }
  }
  .footer {
    text-align: center;
    position: absolute;
    width: calc(100% - 30px);
    bottom: 20px;
    left: 15px;
    height: 40px;
    line-height: 40px;
    background:rgba(51,119,255,1);
    border-radius:3px;
    font-size:16Px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(255,255,255,1);
  }
}
</style>

