// pages/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1:'1',
    chatList:[]
  },
  handleClick(event){
    let list = this.data.chatList
    let con={
      username: 'test',
      userdate: this.getNowDate(),
      content: this.data.value1
    }
    list.push(con)
    this.setData({
      chatList: list,
      value1:''
    })
    
  },
  handerInput({detail}){
    this.setData({
      value1: detail.detail.value
    })
  },
  getNowDate(){
    let now=new Date()
    let day = now.getDate() >= 10 ? now.getDate() : '0' + now.getDate(),
     month = now.getMonth() >= 10 ? now.getMonth() : '0' + now.getMonth(),
     year = now.getFullYear() >= 10 ? now.getFullYear() : '0' + now.getFullYear(),
      hour = now.getHours() >= 10 ? now.getHours() : '0' + now.getHours(),
      minute = now.getMinutes() >= 10 ? now.getMinutes() : '0' + now.getMinutes(),
      socend = now.getSeconds() >= 10 ? now.getSeconds() : '0' + now.getSeconds()
    return `${year}-${month}-${day} ${hour}:${minute}:${socend} `

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})