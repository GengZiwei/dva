import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';

import {LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import './style';

function RouterConfig({ history, app }) {
  const IndexPage = dynamic({
    app,
    component: () => import('./page/index/Index.js')
  });
  const LoginPage = dynamic({
    app,
    component: () => import('./page/Login/Index.js')
  });

  return (
    <Router history={history}>
    <LocaleProvider locale={zh_CN}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="*" exact component={IndexPage} />
      </Switch>
    </LocaleProvider>
    </Router>
  );
}

export default RouterConfig;
