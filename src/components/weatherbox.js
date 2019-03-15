import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';


class WeatherBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      min: 16,
      max: 21,
      source: null,
      ...props
    }
  }

  render() {
    return (
      <View style={[styles.WeatherBox.container, this.props.style]}>
        <Image source={this.state.source} style={styles.WeatherBox.image}/>
        <Text style={styles.WeatherBox.text}>{this.state.min}° / {this.state.max}°</Text>
      </View>
    );
  }
}

export default WeatherBox;