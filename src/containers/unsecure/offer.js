import * as React from 'react';
import { ScrollView, View, Image, ImageBackground, Text, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";

import BackButton from '../../components/backbutton';
import Toolbar from '../../components/toolbar';
import StopView from '../../components/stopview';

import styles from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class Offer extends React.Component {

  constructor() {
    super();
    this.state = {
      isShowedHint: false
    }
  }

  render() {
    const {medias, clues, provider, action, where, pois} = this.props.data.stops [0];
    const clue = clues [0];

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
          
          <StopView stop={1} title="Next Clue" lock={false} isUpShow={true}/>
        </ScrollView>
        <Toolbar/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data
});

export default connect(mapStateToProps)(Offer);