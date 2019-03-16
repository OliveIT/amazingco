import * as React from 'react';
import { ScrollView, View, Image, ImageBackground, Text, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";

import BackButton from '../../components/backbutton';
import Toolbar from '../../components/toolbar';

import styles from '../../styles';

class Easierclue extends React.Component {

  constructor() {
    super();
    this.state = {
      isShowedHint: false
    }
  }

  onBtnSolve() {
    this.props.navigation.push('offer');
  }

  onBtnGiveup() {
    this.props.navigation.push('offer');
  }

  render() {
    const {curStop} = this.props;
    const {medias, clues} = this.props.data.stops [curStop];
    const clue = clues [1];

    return (
      <ScrollView style={styles.fullSize}>
        <ImageBackground source={{uri: medias [0].url}} style={styles.Crackcode.headerImage}>
          <LinearGradient colors={['#00000000', '#00000000', '#000000ff']} style={styles.Crackcode.headerImage}>
            <BackButton style={styles.backBtn} navigation={this.props.navigation}/>
          </LinearGradient>
        </ImageBackground>

        <View style={[styles.Weather.mainContainer, styles.borderTopRadius]}>
          <Text style={styles.Weather.contentHeader}>{clue.title}</Text>
          <Text style={styles.Weather.contentSubTitle}>{clue.subTitle}</Text>
          <Text style={styles.Weather.contentText}>{clue.text}</Text>
          <View style={styles.line}></View>
        </View>

        <TouchableOpacity style={styles.LinkButton.container} onPress={this.onBtnSolve.bind(this)}>
          <Text style={styles.LinkButton.text}>I've solved it</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.Button.container, styles.Button.blue]} onPress={this.onBtnGiveup.bind(this)}>
          <Text style={styles.Button.text}>I give up, show me the answer</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data,
  curStop: state.reducer.curStop
});

export default connect(mapStateToProps)(Easierclue);