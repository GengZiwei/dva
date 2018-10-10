// import { routerRedux } from 'dva/router';
import queryString  from 'query-string';
export default {
  namespace: 'login',
  state: {
  },
  effects: {
    * form ({payload}, {put}) {
      yield put({
        type: 'update',
        form: payload
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen( ({pathname, search}) => {
        if(pathname === '/login') {
          dispatch({
            type: 'form',
            replace: true,
            payload: queryString.parse(search)
          })
        }
      })
    }
  },
  reducers: {
    update( state, { form } ) {
      return {
        ...state,
        form: form
      };
    }
  }
};