//机票信息
export const state = {
    //所有机票信息
    infoData:{
        seat_infos: {}
    },
      // 总价格
      allPrice: 0,
}

export const mutations = {
    setInfoData(state,data){
     state.infoData=data
    },
      // 修改总价格
      setAllPirce(state, price){
        state.allPrice = price
    }	    
}