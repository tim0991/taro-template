import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
// import { connect } from '@tarojs/redux';

import './index.scss';

// @connect()
class Index extends Component {
    config = {
      navigationBarTitleText: '首页',
    }

    componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps);
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
      return (
        <View className='index'>
          Welcome
        </View>
      );
    }
}

export default Index;
