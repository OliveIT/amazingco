import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

import finalImage from '../../images/final.png';

class StopView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stop: 0,
      title: '',
      lock: false,
      isUpShow: false,
      ...props
    }
  }

  onPress() {
    if (this.props.onPress)
      this.props.onPress();
  }

  render() {
    const {stop, title, lock, isUpShow} = this.state;
    let source = null;
    if (stop == 2)
      source = finalImage;
    else
      source = {uri: this.props.data.stops [1].medias [0].url};

    return (
      <ImageBackground style={[styles.StopView.container, styles.borderRadius, isUpShow ? styles.StopView.fullWidth : {}]} source={source}>
        <TouchableOpacity style={[styles.StopView.titleContainer, isUpShow ? styles.StopView.fullWidthTitle : {}]} onPress={this.onPress.bind(this)}>
          <Text style={styles.StopView.title}>{title}</Text>
          {lock ?
          <Icon name="lock" color='#fff' style={styles.StopView.lock} size={20}></Icon> :
          <Icon name="unlock-alt" color='#fff' style={styles.StopView.lock} size={20}></Icon>}
        </TouchableOpacity>
        {isUpShow ?
        <Icon name="arrow-up" color='#fff' style={styles.StopView.upIcon} size={25}></Icon> : null}
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data
});

export default connect(mapStateToProps)(StopView);