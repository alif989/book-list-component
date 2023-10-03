import React, { Component } from 'react'


export default class BookComponent extends Component {
  render() {
    var style = {
        border: "1px solid",
        borderRadius: '5px',
        color: 'black',
        width: '340px',
        margin: '40px auto',
        textAlign: 'center'
    };
    
    return (
      <div style={style}>
        <h3>Book Name : {this.props.bookName}</h3>
        <h3 onClick={this.props.delete}>Writer Name : {this.props.writerName}</h3>
        <input type="text" onChange={this.props.change}/>
        <br/>
        <br/>
      </div>
    )
  }
}

