import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';

import styles from '../../styles';
import ExperienceButton from '../../components/experiencebutton';

class Experience extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onBtnStart() {
    if (this.props.navigation.state.params) {
      const curStop = this.props.navigation.state.params;
      this.props.navigation.navigate('splash');
    } else
      this.props.navigation.navigate('weather');
  }

  render() {
    let curStop = this.props.curStop;
    if (this.props.navigation.state.params)
      curStop = this.props.navigation.state.params.curStop;
      
    return (
      <View style={[styles.fullSize, styles.Experience.pageContainer]}>
        <Text style={styles.Experience.headerTxt}>Your experience</Text>
        <ExperienceButton onPress={this.onBtnStart.bind(this)} curStop={curStop}/>
      </View>
    );
  }
}

export default Experience;