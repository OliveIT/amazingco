import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import styles from '../../styles';
import ExperienceButton from '../../components/experiencebutton';
import { setStop } from '../../redux/actions';

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
    } else {
      this.props.setStop(0);
      this.props.navigation.navigate('weather');
    }
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

const mapStateToProps = state => ({
  data: state.reducer.data
});

const mapDispatchToProps = {
  setStop
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);