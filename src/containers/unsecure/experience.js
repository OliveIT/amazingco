import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import styles from '../../styles';
import experience from '../../../images/experience.png';

class Experience extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onBtnStart() {
    this.props.navigation.navigate('weather');
  }

  render() {
    return (
      <View style={[styles.fullSize, styles.Experience.pageContainer]}>
        <Text style={styles.Experience.headerTxt}>Your experience</Text>
        <TouchableOpacity style={styles.Experience.startBtnContainer} onPress={this.onBtnStart.bind(this)}>
          <Image source={experience} style={styles.Experience.startBtnImage}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Experience;