import * as React from 'react';
import { View, Image, ImageBackground, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';

//import whiteback from '../../images/whiteback.png';

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
    const { url } = this.props.data.stops [stop].medias [0];

    return (
      <ImageBackground style={[styles.StopView.container, styles.borderRadius, isUpShow ? styles.StopView.fullWidth : {}]} source={{uri: url}}>
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