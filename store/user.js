// 用户管理
export const state = {
  userInfo: {
    token: "",
    user: {}
  }
}

export const mutations = {
  //后台返回的用户信息
  setUserInfo(state, data) {
    state.userInfo = data;
  },
  // 清空userInfo 
  clearUserInfo(state) {
    state.userInfo = {
      token: "",
      user: {}
    }
  }
};
