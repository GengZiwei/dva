import dva from 'dva';
import createLoading from 'dva-loading';

import {
  browserHistory
} from 'dva/router';
// import createHistory from 'history/createBrowserHistory';
// 1. Initialize
/* const app = dva({
    history: createHistory()
    // history: createHistory({ basename: '/exampleone/' })
}); */
const app = dva({
    history: browserHistory
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/index').default);
app.model(require('./models/login').default);
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
