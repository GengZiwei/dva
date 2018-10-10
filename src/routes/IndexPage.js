import { connect } from 'dva';
import styles from './IndexPage.less';
import React, { Component } from 'react';
import { Button  } from 'antd';

import Example from '../components/Example';
import { onScreenfull } from "../services/dispatch";

class IndexPage extends Component{
    onc(dispatch,example){
       dispatch({
        type: 'example/oncolue',
        value: example.payload.data.length
      })
      if(example.payload.data.length === example.number){
        onScreenfull({},"div","Screenfull")
      }
    }
  render() {
    const {example,dispatch} = this.props
    return (
    <div className={styles.normal}>
      {example.payload && example.payload.data.map((value,key) => {
        return <Example key={key} add={value}></Example>
      })}
      <div id="Screenfull">点我点我{example.number}</div>
      <Button
        type="dashed"
        className = {`${styles.button} animated bounce`}
        onClick = {() => {this.onc(dispatch,example)}}>
        点击我(我是不可能超过人数量的)
      </Button>
    </div>
    )
  };
}

IndexPage.propTypes = {

};

export default connect(
  ({example}) => ({example}),
  (dispatch) => {
    return {dispatch}
  }
)(IndexPage)
