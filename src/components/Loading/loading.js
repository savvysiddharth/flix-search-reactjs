import React,{Component} from 'react';
import logo from './loading.svg';
import './loading.css';

class Loading extends Component {
  render() {
    return (
      <img src={logo} className="loading" alt="logo" />
    );
  }
}

export default Loading;