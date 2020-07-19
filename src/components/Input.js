import React from 'react';
class Input extends React.Component {


render() {
    return(
    <input value={this.props.title} type="text" onChange={this.props.search}></input>
  )
}
}

export default Input;
