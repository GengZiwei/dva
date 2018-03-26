import React from 'react';
import { connect } from 'dva';
import Example from '../components/Example';
import styles from './IndexPage.css';
function IndexPage({dispatch,example}) {
  function _onc(){
    dispatch({
      type: 'example/oncolue',
      value:example.payload.data.length
    })
  }

  return (
    <div className={styles.normal}>
      <div>{example.payload && example.payload.data.map((value,key)=>{
        return (
          <Example add={value} key={key}></Example>
        )
      })}</div>
      <div>这是我点击的次数{example.number}</div>
      <button onClick={_onc}>点击我(我是不可能超过人数量的)</button>
    </div>
  );
}

IndexPage.propTypes = {

};

export default connect(({ example }) => ({
  example,
}))(IndexPage);
