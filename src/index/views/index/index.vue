<template>
    <div class="home">
        <div class="header">
            <div class="logo"></div>
        </div>
        <div class="content">
            <div class="user-info">
                <img src="../../assets/img/avatar.png" class="avatar">
                <p class="user-name text-overHidden">史璐明 (资深顾问)</p>
                <p class="user-company text-overHidden">
                    <i class="icon approve-icon"></i>北京五八信息技术有限公司
                </p>
                <p class="user-tel user-info-item text-overHidden">
                    <i class="icon tel-icon"></i>13898665355
                </p>
                <p class="user-info-item text-overHidden">
                    <i class="icon email-icon"></i>shiluming@58.com
                </p>
                <p class="user-info-item text-overHidden">
                    <i class="icon address-icon"></i>北京市朝阳区酒仙桥北路甲10号院
                </p>
                <div class="good-skill">
                    <span class="good-skill-title">擅长领域</span>
                    <p class="split"></p>
                    <ul class="skill">
                        <li class="skill-item">婚庆</li>
                        <li class="skill-item">搬家</li>
                        <li class="skill-item">本地服务</li>
                        <li class="skill-item">获客小能手</li>
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
                <swpier-demo/>
            </div>
        </div>
        <div class="footer" >
          <p class="ad-tip">58同城-让生活更简单</p>
            <ul class="footer-btn" v-show="isSale">
                <li class="edit-btn edit" @click="goEditPage">编辑名片</li>
                <li class="edit-btn share">分享名片(海报)</li>
            </ul>
        </div>
    </div>
</template>

<script>
// 滑动组件demo
import Bscroll from '@/index/components/scrollDmeo';
// loading组件demo
import Loading from '@/index/components/loading';
// 轮播图组件demo
import swpierDemo from '@/index/components/swpierDemo';
export default {
  components: {
    Bscroll,
    Loading,
    swpierDemo
  },
  data() {
    return {
      isSale: true, // 是否是销售人员
      initdata: []
    };
  },
  mounted() {},
  methods: {
    // 编辑
    goEditPage () {
      this.$router.push({
        name: 'editPage'
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  background-color: #ffffff;
  position: relative;
}
.header {
  width: 100%;
  height: 150px;
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
  background-color: #ffffff;
  width: 100%;
  position: relative;
  .user-info {
    margin: 0 auto;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    top: -75px;
    padding-bottom: 40px;
    width: 345px;
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
    margin-top: -55px;
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
  padding-bottom: 20px;
  text-align: center;
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
