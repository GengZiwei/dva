import * as userService from '../services/api';


export default {
  namespace: 'example',
  state: 
    {
      payload:"",
      number:0
    }
  ,
  reducers: {
    dealData(state, {payload}) {
      return {
         ...state,
         payload
      }
    },
    oncolue(state,{value}){
      const newnub = state.number+1
      return {
        ...state,
        number:newnub > value ? value:newnub
      }
    }
  },
  effects: {
    *getData(action, { call, put }) {
      const temp = yield call(userService.getUserData, {});
      yield put({
        type: 'dealData',
        payload:temp
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
     return history.listen( ({pathname, query}) => {
        if(pathname === '/') {
          dispatch({
            type: 'getData',
            payload: {
              txt: '欢迎进入登陆界面'
            }
          })
        }
      })
    },
  },
};