import * as React from 'react';
import { ScrollView, View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";
import { CheckBox } from 'react-native-elements'

import BackButton from '../../components/backbutton';
import WeatherBox from '../../components/weatherbox';

import styles from '../../styles';
import agreement from '../../../images/agreement.png';

class Weather extends React.Component {

  constructor() {
    super();
    this.state = {
      isTerms: false
    }
  }

  onCheckTerms() {
    this.setState({
      isTerms: !this.state.isTerms
    })
  }

  onBtnSee() {
    this.props.navigation.navigate("stops");
  }

  render() {
    const {name, shortName, presentation} = this.props.data.product;
    const {weather} = this.props.data;
    const {title, subTitle, text} = this.props.data.introduction;
    const texts = text.split('<br />');
    const {width, height} = Dimensions.get("screen");

    return (
      <ScrollView style={styles.fullSize}>
        <ImageBackground source={{uri: presentation.medias [0].url}} style={styles.Weather.headerImage}>
          <LinearGradient colors={['#00000000', '#00000000', '#000000ff']} style={styles.Weather.headerImage}>
            <BackButton style={styles.backBtn} navigation={this.props.navigation}/>
            <View style={styles.Weather.topContentContainer}>
              <WeatherBox style={styles.Weather.weather} min={weather.from} max={weather.to} source={{uri: weather.medias [0].url}}/>
              <Text style={styles.Weather.minorHeaderText}>{name}</Text>
              <Text style={styles.Weather.mainHeaderText}>{shortName}</Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        <View style={[styles.Weather.mainContainer, styles.borderTopRadius]}>
          <Text style={styles.Weather.contentHeader}>{title}</Text>
          <Text style={styles.Weather.contentSubTitle}>{subTitle}</Text>
          {texts.map((text, index) => 
            <Text style={styles.Weather.contentText} key={index}>{text}</Text>
          )}
          <View style={[styles.line, {marginBottom: width * 0.04}]}></View>
          <Text style={styles.Weather.contentText}>The day is meant to be fun, and a little challenging, but not stressful! Give the clues your best shot but if you get stuck or lost we can give you some help. All the clues are designed to be solvable using Google if needed - so if you type a few key words from the clue into the search engine it will help you on your way!</Text>
          <Text style={styles.Weather.contentDescription}>Don't forget to take plenty of pictures, and feel free to explore other areas of interest along the way.</Text>
        </View>

        <ImageBackground source={agreement} style={styles.Weather.agreementBackImg}>
          <CheckBox
            title='I have read the terms & conditions and agree to return my picnic basket upon completion of the Mystery Experience'
            checked={this.state.isTerms}
            containerStyle={styles.Weather.agreeCheckContainer}
            textStyle={styles.Weather.agreeCheckText}
            onPress={this.onCheckTerms.bind(this)}
          />
          <TouchableOpacity style={[styles.Button.container, styles.Button.blue]}
            onPress={this.onBtnSee.bind(this)}
            disabled={!this.state.isTerms}>
            <Text style={styles.Button.text}>See Clue One</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data,
  curStop: state.reducer.curStop
});

export default connect(mapStateToProps)(Weather);