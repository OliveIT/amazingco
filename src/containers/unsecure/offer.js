import * as React from 'react';
import { ScrollView, View, Image, ImageBackground, Text, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";
import Modal from "react-native-modal";

import BackButton from '../../components/backbutton';
import Toolbar from '../../components/toolbar';
import StopView from '../../components/stopview';

import styles from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

import { setStop } from '../../redux/actions';

import logo from '../../../images/amazingco-logo.png';
class Offer extends React.Component {

  constructor() {
    super();
    this.state = {
      isShowedHint: false,
      modalComplete: false,
      modalFeedback: false,
      activeFeedback: 10
    }
  }

  onPressNext() {
    if (this.props.curStop == 0) {
      this.props.navigation.push("stops");
      this.props.setStop(this.props.curStop + 1);
    } else {
      this.setState({modalComplete: true});
    }
  }

  onBtnCompleteNext() {
    this.setState({
      modalComplete: false,
      modalFeedback: true,
    });
  }

  onBtnFeedScore(score) {
    alert(score);
  }

  onBtnFeedback() {
    this.props.navigation.navigate("experience");
    this.props.setStop(this.props.curStop + 1);
  }

  render() {
    const {curStop} = this.props;
    const {dropOff, product} = this.props.data;
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
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalComplete}
          swipeDirection='up'>
          <View style={[styles.PickupModal.container]}>
            <Text style={styles.PickupModal.title}> </Text>
            <View style={styles.PickupModal.content}>
              <ImageBackground style={styles.PickupModal.imageHeaderContainer}>
                <Image source={logo} style={styles.PickupModal.logo}/>
                <Text style={styles.Splash.logoText}>Time better spent</Text>
              </ImageBackground>
              <View style={styles.PickupModal.textContainer}>
                <Text style={styles.PickupModal.mainText}>Thank you...</Text>
                <Text style={styles.PickupModal.description}>From us at AmazingCo, we hope you've had a ball, when you're planning your next date - you know who to call!</Text>

                <Text style={styles.PickupModal.minorText}>Don't Forget</Text>
                <Text style={styles.PickupModal.description}>Drop Off Your Picnic Basket To</Text>

                <Text style={[styles.PickupModal.description, styles.bold]}>
                {dropOff.where.name} {dropOff.text}</Text>

                <Text style={[styles.PickupModal.description, styles.bold]}>{dropOff.where.address}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.PickupModal.closeButton}
              onPress={this.onBtnCompleteNext.bind(this)}>
              <Icon name="arrow-right" color='#fff' size={20}/>
            </TouchableOpacity>
          </View>
        </Modal>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalFeedback}
          swipeDirection='up'>
          <View style={[styles.PickupModal.container]}>
            <Text style={styles.PickupModal.title}>Feedback</Text>
            <View style={styles.PickupModal.content}>
              <Image source={logo} style={styles.PickupModal.logo}/>

              <View style={styles.PickupModal.textContainer}>
                <Text style={styles.PickupModal.mainText}>How likely are you to recommend {product.name} {product.shortName}?</Text>
                <Text style={styles.PickupModal.description}>From us at AmazingCo, we hope you've had a ball, when you're planning your next date - you know who to call!</Text>

                <Text style={styles.PickupModal.description}>0 = Unlikely. 10 = Very Likely</Text>

                <View style={styles.FeedbackModal.btnContainer}>
                  {[0,1,2,3,4,5].map((value, index) => 
                    <TouchableOpacity 
                      style={[styles.FeedbackModal.btn, this.state.activeFeedback == value ? styles.FeedbackModal.btnActive : {}]} key={index}
                      onPress={this.onBtnFeedScore.bind(this, value)}>
                      <Text style={[styles.FeedbackModal.btnText, this.state.activeFeedback == value ? styles.FeedbackModal.btnActiveText : {}]}>{value}</Text>
                    </TouchableOpacity>)}
                </View>
                <View style={styles.FeedbackModal.btnContainer}>
                  {[6,7,8,9,10].map((value, index) => 
                    <TouchableOpacity 
                      style={[styles.FeedbackModal.btn, this.state.activeFeedback == value ? styles.FeedbackModal.btnActive : {}]} key={index}
                      onPress={this.onBtnFeedScore.bind(this, value)}>
                      <Text style={[styles.FeedbackModal.btnText, this.state.activeFeedback == value ? styles.FeedbackModal.btnActiveText : {}]}>{value}</Text>
                    </TouchableOpacity>)}
                </View>

                <TouchableOpacity
                  style={styles.PickupModal.closeButton}
                  onPress={this.onBtnFeedback.bind(this)}>
                  <Icon name="check" color='#fff' size={20}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
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