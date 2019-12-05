<template>
  <div class="edit">
    <ul class="form">
      <li class="form-item">
        <label for="">头像</label>
        <input type="text">
        <i class="form-icon to-right-icon"></i>
      </li>
       <li class="form-item">
        <label for="">姓名</label>
        <input type="text">
      </li>
      <li class="form-item">
        <label for="">公司名称</label>
        <input type="text">
      </li>
    </ul>
    <div class="footer">
      保存
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.edit {
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
  height: 100vh;
  padding-bottom: 60px;
  position: relative;
  .form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    .form-item {
      padding: 15px 20px;
      border-bottom: 1px solid #EDEDED;
      position: relative;
      label {
        width: 80px;
        display: inline-block;
        font-size:14px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(51,51,51,1);
      }
      input {
        border:none;
        height: 32px;
        line-height: 32px;
        width: calc(100% - 80px - 20px);
      }
      .form-icon  {
        width: 14px;
        height: 14px;
        display: inline-block;
        position: absolute;
        right: 15px;
        top: 20px;
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
font-size:16px;
font-family:PingFangSC-Regular,PingFang SC;
font-weight:400;
color:rgba(255,255,255,1);
  }
}
</style>

