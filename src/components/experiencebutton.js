import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';


class ExperienceButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onBtnPress() {
    if (this.props.onPress)
      this.props.onPress();
  }

  render() {
    const {product} = this.props.data;
    const {url} = product.presentation.medias [0];
    return (
      <TouchableOpacity style={styles.Experience.startBtnContainer} onPress={this.onBtnPress.bind(this)}>
        <ImageBackground source={{uri: url}} style={styles.Experience.startBtnImage}>
          <LinearGradient colors={['#00000000', '#000000ff']} style={[styles.Experience.startBtnImage, styles.Experience.linearBack]}>
            <View style={styles.Experience.space}></View>
            <Text style={styles.Experience.mainText}>{product.name}</Text>
            <Text style={styles.Experience.mainText}>{product.shortName}</Text>
            {this.props.curStop != 2 ?
            <Text style={styles.Experience.btnOrange}>Start Experience</Text> :
            <Text style={[styles.Experience.btnOrange, {backgroundColor: '#4a4a4a'}]}>COMPLETE</Text> }
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data,
  curStop: state.reducer.curStop
});

export default connect(mapStateToProps)(ExperienceButton);