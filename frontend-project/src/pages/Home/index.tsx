import React, { Component } from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { Button, message } from 'antd';
import './style.css';

class HomePage extends Component {
  state = {
    loaded: false,
    isLogin: true
  }

  componentDidMount(): void {
    axios.get('/api/isLogin').then((res) => {
      if (!res.data?.data) {
        this.setState({
          isLogin: false,
          loaded: true,
        });
      } else {
        this.setState({
          loaded: true,
        });
      }
    });

    axios.get('/api/showData').then((res) => {
      if (res.data?.data) {
        console.log(res);
      } else {

      }
    });
  }

  handleCrowllerClick = () => {
    axios.get('/api/getData').then((res) => {
      if (res.data?.data) {
        console.log(res);
      } else {
        message.error('爬取失败');
      }
    });
  }

  handleLogoutClick = () => {
    axios.get('/api/logout').then((res) => {
      if (res.data?.data) {
        this.setState({
          isLogin: false,
        });
      } else {
        message.error('退出失败');
      }
    });
  }

  render(): React.ReactNode {
    const { isLogin, loaded } = this.state;
    if (isLogin) {
      if (loaded) {
        return (
          <div className='home-page'>
            <Button type='primary' onClick={this.handleCrowllerClick}>爬取数据</Button>
            <Button type='primary'>展示数据</Button>
            <Button type='primary' onClick={this.handleLogoutClick}>退出</Button>
          </div>
        )
      }
      return null;
    }
    return <Navigate to="/login" replace state={this.state} />;
  }
}

export default HomePage;