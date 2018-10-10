import { connect } from 'dva';
import React, { Component } from 'react';


class Index extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>home页面</div>
    )
  };

}


Index.propTypes = {

};

export default connect()(Index)
