import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

import whiteback from '../../images/whiteback.png';

class BackButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onBtnPress() {
    if (this.props.onPress)
      this.props.onPress();
    else
      this.props.navigation.goBack();
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.onBtnPress.bind(this)}
        style={[styles.BackButton.btnContainer, this.props.style]}
        >
        <ImageBackground 
          blurRadius={1}
          source={whiteback}
          style={styles.BackButton.btnImgContainer}>
          <Icon name="chevron-left" color='#fff' style={styles.BackButton.icon} size={10}></Icon>
          <Text style={styles.BackButton.btnText}>Back</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export default BackButton;