import * as React from 'react';
import { ScrollView, View, Image, ImageBackground, Text, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";

import BackButton from '../../components/backbutton';
import Toolbar from '../../components/toolbar';

import styles from '../../styles';

class Crackcode extends React.Component {

  constructor() {
    super();
    this.state = {
      isShowedHint: false
    }
  }

  onBtnSolve() {
    this.props.navigation.push('offer');
  }

  onBtnHint() {
    const hint = this.props.data.stops [0].clues [0].hint;
    Alert.alert(
      hint.title,
      hint.text,
      [
        {
          text: 'OK',
          onPress: () => this.setState({isShowedHint: true}),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  onBtnEasierClue() {
    this.props.navigation.push('easierclue');
  }

  render() {
    let {curStop} = this.props;
    if (!this.props.data.stops [curStop]) curStop = 1;
    const {medias, clues} = this.props.data.stops [curStop];
    const clue = clues [0];

    return (
      <ScrollView style={styles.Toolbar.fullSize} bounces={false}>
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

        <Image source={{uri: clue.medias [0].url}} style={styles.Crackcode.contentImage}/>
        
        <TouchableOpacity style={styles.LinkButton.container} onPress={this.onBtnSolve.bind(this)}>
          <Text style={styles.LinkButton.text}>I've solved it</Text>
        </TouchableOpacity>

        {!this.state.isShowedHint ?
        <TouchableOpacity style={[styles.Button.container, styles.Button.white]} onPress={this.onBtnHint.bind(this)}>
          <Text style={[styles.Button.text, styles.Button.whiteText]}>I need a hint</Text>
        </TouchableOpacity> :
        <TouchableOpacity style={[styles.Button.container, styles.Button.orange]} onPress={this.onBtnEasierClue.bind(this)}>
          <Text style={styles.Button.text}>I need an easier clue</Text>
        </TouchableOpacity> }
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data,
  curStop: state.reducer.curStop
});

export default connect(mapStateToProps)(Crackcode);