import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";

import backgroundImage from '../../../images/background.png';
import logo from '../../../images/amazingco-logo.png';
import styles from '../../styles';

class Splash extends React.Component {
  static navigationOptions = {
  };

  constructor() {
    super();
    this.state = {
      splashHeight: 1,
      isFocusCode: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        splashHeight: 0.7,
      });
    }, 0);
  }

  onFocusCode() {
    this.setState({
      isFocusCode: true
    });
  }

  onBlurCode() {
    this.setState({
      isFocusCode: false
    });
  }

  onBtnGo() {

  }

  render() {
    const {width, height} = Dimensions.get("screen");

    return (
      <View style={[styles.fullSize, this.state.isFocusCode ? { backgroundColor: '#000' } : {}]}>
        <View style={[styles.fullSize, styles.borderBottomRadius, {height: height * this.state.splashHeight }]}>
          <ImageBackground source={backgroundImage} style={[styles.fullSize, {height: height * this.state.splashHeight }]}>
            <LinearGradient colors={['#00000000', '#000000ff']} style={[styles.fullSize, styles.Splash.gradientBack]}>
              <View>
                <Image source={logo} style={styles.Splash.logoImage}/>
                <Text style={styles.Splash.logoText}>Time better spent</Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
        <View style={styles.Splash.codeContainer}>
          <Text style={[styles.Splash.codeDescription, this.state.isFocusCode ? {color: '#fff'} : {}]} ref="edtCode">Enter your experience code</Text>
          <View style={styles.Splash.codeInputContainer}>
            <TextInput style={styles.Splash.codeInput}
              onFocus={this.onFocusCode.bind(this)}
              onBlur={this.onBlurCode.bind(this)}
              placeholder="MP - 123456 - 012345"></TextInput>
            <TouchableOpacity style={[styles.Splash.codeBtnContainer, this.state.isFocusCode ? {backgroundColor: '#b2e282'} : {}]}
              onPress={this.onBtnGo.bind(this)}>
              <Text style={styles.Splash.codeBtnText}>GO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}




export default connect()(Splash);