import * as React from 'react';
import { ScrollView, View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";

import BackButton from '../../components/backbutton';
import Toolbar from '../../components/toolbar';

import styles from '../../styles';

class Stops extends React.Component {

  constructor() {
    super();
    this.state = {
    }
  }

  onBtnCrackCode() {
    this.props.navigation.navigate("crackcode");
  }

  onBtnSkipCode() {
    this.props.navigation.navigate("offer");
  }

  render() {
    const {title, subTitle, text, medias} = this.props.data.stops [0];

    return (
      <View style={styles.fullSize}>
        <ScrollView style={styles.Toolbar.mainContainer}>
          <ImageBackground source={{uri: medias [0].url}} style={styles.Weather.headerImage}>
            <LinearGradient colors={['#00000000', '#00000000', '#000000ff']} style={styles.Weather.headerImage}>
              <BackButton style={styles.backBtn} navigation={this.props.navigation}/>
              <View style={styles.Weather.topContentContainer}>
                <View style={styles.Weather.weather}></View>
                <Text style={styles.Weather.minorHeaderText}>Clue</Text>
                <Text style={styles.Weather.mainHeaderText}>One</Text>
              </View>
            </LinearGradient>
          </ImageBackground>

          <View style={[styles.Weather.mainContainer, styles.borderTopRadius]}>
            <Text style={styles.Weather.contentHeader}>{title}</Text>
            <Text style={styles.Weather.contentSubTitle}>{subTitle}</Text>
            <Text style={styles.Weather.contentText}>{text}</Text>
            <View style={styles.line}></View>
          </View>

          <TouchableOpacity style={[styles.Button.container, styles.Button.blue]} onPress={this.onBtnCrackCode.bind(this)}>
            <Text style={styles.Button.text}>Crack the Code</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.LinkButton.container} onPress={this.onBtnSkipCode.bind(this)}>
            <Text style={styles.LinkButton.text}>Skip code</Text>
          </TouchableOpacity>
        </ScrollView>
        <Toolbar />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data
});

export default connect(mapStateToProps)(Stops);