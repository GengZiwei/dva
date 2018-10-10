import { routerRedux } from 'dva/router';
import Cookie from '../utils/cookie'
import queryString  from 'query-string';

export default {
  namespace: 'index',
  state: {
    Sidelist: [
      {
        type: "user",
        path: '/',
        name: "默认主页"
      },
      {
        type: "user",
        path: '/user',
        name: "个人信息",
        search: {
          user: 'admin',
          password: 123456
        }
      },
      {
        type: "upload",
        name: "子集",
        child:[
          {
            type: "upload",
            name: '子集1',
            path: '/'
          },
          {
            type: "upload",
            name: '子集2',
            path: '/login'
          },
          {
            type: "upload",
            name: '退出',
            onClick: 0
          }
        ]
      }
    ]
  },
  effects: {
    * redirect ({ path, search, query, replace }, { put }) {
      if(replace) {
        return yield put(routerRedux.replace({
          pathname: path,
          search: search && queryString.stringify( search ),
          query: query || {}
        }))
      }
      yield put(routerRedux.push({
        pathname: path,
        search: search && queryString.stringify( search ),
        query:query || {}
      }))
    },
    * logo() {
      const token = 123
      yield Cookie.set('token', token)
    },
    * clear() {
      yield Cookie.clear('token')
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen( ({pathname, search}) => {
        // let payload = search || query
        let token = Cookie.get('token')
        if(!token && pathname !== '/login') {
          dispatch({
            type: 'redirect',
            path: '/login',
            search: {
              form: pathname + search
            }
          })
        }
          if(pathname === '/user') {
            // queryString.parse(search)
            dispatch({
              type: 'parse',
              search: search
            })
          }
       })
     }
  },
  reducers: {
    parse(state, {search}) {
      return {
        ...state,
        search: queryString.parse(search)
      }
    }
  }
};