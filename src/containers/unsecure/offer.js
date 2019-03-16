import * as React from 'react';
import { ScrollView, View, Image, ImageBackground, Text, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";

import BackButton from '../../components/backbutton';
import Toolbar from '../../components/toolbar';
import StopView from '../../components/stopview';

import styles from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import { setStop } from '../../redux/actions';
class Offer extends React.Component {

  constructor() {
    super();
    this.state = {
      isShowedHint: false
    }
  }

  onPressNext() {
    if (this.props.curStop == 0) {
      this.props.navigation.push("stops");
      this.props.setStop(this.props.curStop + 1);
    } else {
      alert("complete");
    }
  }

  render() {
    const {curStop} = this.props;
    const {medias, clues, provider, action, where, pois} = this.props.data.stops [curStop];
    const clue = clues [0];

    let nextClueTitle = "Next Clue";
    if (curStop == 1)
      nextClueTitle = "Final Instruction";

    return (
      <View style={styles.fullSize}>
        <ScrollView style={styles.Toolbar.mainContainer}>
          <ImageBackground source={{uri: medias [0].url}} style={styles.Crackcode.headerImage}>
            <LinearGradient colors={['#00000000', '#00000000', '#000000ff']} style={styles.Crackcode.headerImage}>
              <BackButton style={styles.backBtn} navigation={this.props.navigation}/>
            </LinearGradient>
          </ImageBackground>

          <View style={[styles.Weather.mainContainer, styles.borderTopRadius]}>
            <View style={styles.flex}>
              <Text style={[styles.Weather.contentHeader, {flex: 1}]}>You are off to</Text>
              <View style={styles.iconRing}>
                <Icon name="unlock-alt" color='#fff' style={styles.BackButton.icon} size={15}></Icon>
              </View>
            </View>
            <View style={styles.line}></View>

            <Text style={styles.Offer.mainText}>{provider. name}</Text>
            <Text style={styles.Offer.minorText}>{action}</Text>
            <View style={styles.flex}>
              <Icon name="address-book-o" color='#333' style={styles.Offer.icon} size={15}></Icon>
              <Text style={styles.Offer.description}>{where.address}</Text>
            </View>
            <View style={styles.flex}>
              <Icon name="phone" color='#333' style={styles.Offer.icon} size={15}></Icon>
              <Text style={styles.Offer.description}>{provider.phone}</Text>
            </View>
            
            <View style={styles.line}></View>

            <Text style={styles.Weather.contentHeader}>More to Explore</Text>
            <Text style={styles.Offer.description}>If you want to stay and explore the area - here are some fantastic walks, viewpoints and activities you might want to explore!</Text>

            {pois.map((item, index) => 
            <View style={styles.flex} key={index}>
              <Icon name="map-marker" color='#333' style={styles.Offer.icon} size={15}></Icon>
              <View style={styles.Offer.paddingBox}>
                <Text style={[styles.Offer.description, styles.bold, {marginBottom: 0}]}>{item.name}</Text>
                <Text style={styles.Offer.description}>{item.text}</Text>
              </View>
            </View>
            )}
          </View>
          
          <StopView stop={curStop + 1} title={nextClueTitle} lock={false} isUpShow={true} onPress={this.onPressNext.bind(this)}/>
        </ScrollView>
        <Toolbar/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data,
  curStop: state.reducer.curStop
});

const mapDispatchToProps = {
  setStop,
}

export default connect(mapStateToProps, mapDispatchToProps)(Offer);