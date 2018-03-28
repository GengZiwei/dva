import React, { Component } from 'react';
import { connect } from 'dva';
import Example from '../components/Example';
import styles from './IndexPage.css';
import { onScreenfull } from "../services/dispatch";
class IndexPage extends Component{
    onc(dispatch,example){
       dispatch({
        type: 'example/oncolue',
        value:example.payload.data.length
      })
      if(example.payload.data.length === example.number){
        onScreenfull({},"div","Screenfull")
      }
    }
  render() {
    const {example,dispatch} = this.props
    console.log(example)
    return (
    <div className={styles.normal}>
      {example.payload && example.payload.data.map((value,key) => {
        return <Example key={key} add={value}></Example>
      })}
      <div id="Screenfull">点我点我{example.number}</div>
      <button className="animated infinite rubberBand" className={styles.button} onClick={()=>{this.onc(dispatch,example)}}>点击我(我是不可能超过人数量的)</button>
    </div>
    )
  };
}

IndexPage.propTypes = {

};

export default connect(({example})=>({example}),(dispatch)=>{return {dispatch}})(IndexPage)
