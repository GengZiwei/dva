import { connect } from 'dva';
import React, { Component } from 'react';


class User extends Component{
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    let { search } = this.props.index
    return (
      <div>user我得到的参数为{JSON.stringify(search)}</div>
    )
  };

}


User.propTypes = {

};

export default connect((index => {return index}))(User)
