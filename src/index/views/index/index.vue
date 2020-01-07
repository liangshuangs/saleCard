<template>
    <div class="home">
        <div class="header">
            <div class="logo"></div>
        </div>
          <b-scroll
            class="content"
          >
            <div class="scroll-wraper"> 
            <div class="user-info">
                <img src="../../assets/img/avatar.png" class="avatar">
                <p class="user-name text-overHidden">{{userInfo.name}} ({{userInfo.position}})</p>
                <p class="user-company text-overHidden">
                    <i class="icon approve-icon"></i>{{userInfo.company}}
                </p>
                <p class="user-tel user-info-item text-overHidden">
                    <i class="icon tel-icon"></i>{{userInfo.tel}}
                </p>
                <p class="user-info-item text-overHidden">
                    <i class="icon email-icon"></i>{{userInfo.email}}
                </p>
                <p class="user-info-item text-overHidden">
                    <i class="icon address-icon"></i>{{userInfo.address}}
                </p>
                <div class="good-skill">
                    <span class="good-skill-title">擅长领域</span>
                    <p class="split"></p>
                    <ul class="skill">
                        <li class="skill-item" v-for="(item, index) in domains" :key="index">{{item}}</li>
                    </ul>
                </div>
                <div class="tip">购买58产品，找我就对了只有在有起伏的道路，你才能看到更多的风景，最多填写45个汉字90个字符</div>
                <ul class="opration">
                    <li class="opration-item">
                        <i class="opration-icon to-friend-icon"></i>
                        <p>介绍TA给朋友</p>
                    </li>
                    <li class="opration-item">
                        <i class="opration-icon call-tel-icon"></i>
                        <p>打电话</p>
                    </li>
                    <li class="opration-item">
                        <i class="opration-icon wetchat-icon"></i>
                        <p>微信</p>
                    </li>
                </ul>
            </div>
            <div class="sale-ad" v-show="true">
                <p class="ad-title">营销活动</p>
                <swpier-demo :imgData="activeImg"/>
            </div>
            </div>
          </b-scroll>
        <div class="footer" >
            <ul class="footer-btn" v-show="isSale">
                <li class="edit-btn edit" @click="goEditPage">编辑名片</li>
                <li class="edit-btn share">分享名片(海报)</li>
            </ul>
        </div>
    </div>
</template>

<script>
// 滑动组件demo
import BScroll from '@/index/components/common/scroll'
import {stopScroll} from '@/index/utils/scroll'
// loading组件demo
import Loading from '@/index/components/loading';
// 轮播图组件demo
import swpierDemo from '@/index/components/swpierDemo';
import * as actions from './sever.js';
export default {
  components: {
    Loading,
    BScroll,
    swpierDemo
  },
  data() {
    return {
      isSale: true, // 是否是销售人员
      userInfo: {},// 销售信息,
      activeImg: [],// 活动轮播图
      bspid: 'sxf58mhk6o2'
    };
  },
  mounted() {
    this._getUserInfo()
    this._getActivesImg()
  },
  computed: {
    
    domains() {
      let domains = this.userInfo && this.userInfo.domainMsg
      if(domains) {
        let arr = domains.split(',')
        return arr
      }
    }
  },
  methods: {
    async _getUserInfo () {
      let params = {
        bspid: this.bspid
      }
      let res = await actions.getUserInfo(params);
      if(res && res.code === 200) {
        this.userInfo = res.result || {} 
      }
    },
    // 获取活动图片
    async _getActivesImg () {
      let params = {
        bspid: this.bspid
      }
      let res = await actions.getActiveImg(params);
      if(res && res.code === 200) {
        this.activeImg = res.result || []
      }
    },
    // 编辑
    goEditPage () {
      this.$router.push({
        name: 'editPage',
        params: this.userInfo
      })
    },
    // 初始化滑动区域函数
        initScroll () {
            // 判断如果页面不存在当前注册的dom就跳出函数
            if(!this.$refs.scroll){
                return;
            }else{

                /**
                 * Bscroll构造函数   
                 * 第一个参数是 初始化dom对象
                 * 第二个参数  滑动配置项
                 */
                this.myScrollDemo = new Bscroll(this.$refs.scroll,{
                    scrollX: false,     //开启左右滑动
                    scrollY: true,     //开启上下滑动
                    probeType: 3,
                    pullUpLoad:{       //配置开启上拉加载功能
                        threshold:20,  //开启上拉加载的位置
                    },
                    pullDownRefresh:{  //配置开启下拉刷新功能
                        threshold:40,  //开启下拉刷新的位置
                        stop:20        //刷新过程中上部留白的高度
                    },
                })
            }
        }
  }
};
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  background-color: #ffffff;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.header {
  height: 150px;
  position: fixed;
  z-index: 11;
  top: 0;
  width: 100vw;
  background: linear-gradient(
    270deg,
    rgba(76, 57, 255, 1) 0%,
    rgba(62, 119, 255, 1) 100%
  );
  .logo {
    margin: 22px 0 0 16px;
    display: inline-block;
    width: 50px;
    height: 17px;
    background: url('../../assets/img/logo.png') no-repeat;
    background-size: 100%;
  }
}
.content {
  z-index: 22;
   position: absolute;
   top: 75px;
   left: 15px;
   right: 15px;
   overflow: hidden;
   bottom: 50px;
   border-radius: 10px 10px 0 0;
    overscroll-behavior-y: none;
  .scroll-wraper {
  // overscroll-behavior-y: none;
  }
  .user-info {
    text-align: center;
    box-sizing: border-box;
    padding-bottom: 40px;
    width: 100%;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 10px 0px rgba(226, 226, 226, 0.5);
    border-radius: 10px;
    .avatar {
      position: absolute;
      width: 64px;
      height: 64px;
      border-radius: 50%;
      left: 50%;
      transform: translateX(-50%);
      top: -32px;
    }
    .user-name {
      display: inline-block;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #111111;
      margin-top: 42px;
      vertical-align: middle;
    }
    .user-company {
      font-size: 12px;
      margin-top: 4px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
    }
    .user-info-item {
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      margin-top: 5px;
    }
    .user-tel {
      margin-top: 20px;
    }
    .good-skill {
      margin-top: 20px;
      .split {
        width: 100%;
        border-bottom: 1px solid #ededed;
      }
      .good-skill-title {
        position: relative;
        padding: 0 5px;
        top: 8px;
        display: inline-block;
        background-color: #ffffff;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(170, 170, 170, 1);
      }
      .skill {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        align-content: center;
        margin-top: 20px;
        .skill-item {
          height: auto;
          padding: 6px;
          background: rgba(79, 144, 249, 0.1);
          border-radius: 1px;
          font-size: 11px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(79, 144, 249, 1);
        }
        .skill-item + .skill-item {
          margin-left: 16px;
        }
      }
    }
    .tip {
      background: rgba(255, 246, 226, 1);
      border: 1px solid rgba(252, 228, 179, 1);
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      margin: 0 22px;
      padding: 5px;
      margin-top: 20px;
      border-radius: 5px;
      text-align: left;
    }
    .opration {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      align-content: center;
      margin-top: 20px;
      text-align: center;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .opration-icon {
      width: 32px;
      height: 32px;
      display: inline-block;
    }
    .to-friend-icon {
      background: url('../../assets/img/to-friend.png') no-repeat;
      background-size: 100%;
    }
    .call-tel-icon {
      background: url('../../assets/img/call-tel.png') no-repeat;
      background-size: 100%;
    }
    .wetchat-icon {
      background: url('../../assets/img/wetchat.png') no-repeat;
      background-size: 100%;
    }
    .icon {
      width: 14px;
      height: 14px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
    }
    .approve-icon {
      background: url('../../assets/img/approve.png') no-repeat;
      background-size: 100%;
    }
    .tel-icon {
      background: url('../../assets/img/tel.png') no-repeat;
      background-size: 100%;
    }
    .email-icon {
      background: url('../../assets/img/email.png') no-repeat;
      background-size: 100%;
    }
    .address-icon {
      background: url('../../assets/img/address.png') no-repeat;
      background-size: 100%;
    }
  }
  .sale-ad {
    margin: 0 15px;
    padding-bottom: 25px;
    .ad-title {
      font-size: 15px;
      text-align: center;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      margin-bottom: 20px;
      &::after,
      &::before {
        display: inline-block;
        width: 8px;
        content: '-';
        color: #999;
        font-weight: normal;
      }
      &::before {
        margin-right: 9px;
      }
      &::after {
        margin-left: 9px;
      }
    }
  }
}
.footer {
  margin: 10px 15px 0 15px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  padding-bottom: 10px;
  width: 345px;
  text-align: center;
  z-index: 33;
  .ad-tip {
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(196, 196, 196, 1);
  margin-bottom: 30px;
}
  .footer-btn {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    align-content: center;
  }
  .edit-btn {
    flex: 1;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }
  .edit {
    background: rgba(255, 83, 25, 1);
    border-radius: 3px;
  }
  .share {
    background: rgba(51, 119, 255, 1);
    border-radius: 3px;
    margin-left: 10px;
  }
}
.text-overHidden {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-muti-overHidden {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
