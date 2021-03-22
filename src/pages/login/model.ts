import { Effect, ImmerReducer, Reducer } from 'umi';


/*
 effect =>action

 ImmerReducer Reducer=>mutation
*/ 
export interface UserModelState {
 users?:any[]
}


// 声明类型
export interface UserModelType {
  namespace: 'user';  //命名空间
  state: UserModelState;
  effects: { //=>action
    getUser: Effect;
  };
  reducers: {
    // save: Reducer<UserModelState>;
    // 启用 immer 之后
    save: ImmerReducer<UserModelState>;
  };
}




const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    users:[],
  },


  /*
  发请求的action
  每一个方法前面要写一个*  等同于async
  */
  effects: {
    *getUser({ payload }, { call, put }) {
      // 发请求
      let res = yield call(api.getUser, payload)
      if(res.meta.atatus===200){
        yield put({
          type: 'save',
          payload:res.data.users
        })
      }
    },
  },

  //mutation
  reducers: {
    // save(state, action) {
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // },
    // 启用 immer 之后
     save(state, action) {
       state.users = action.payload;
     },
  },
};

export default UserModel;