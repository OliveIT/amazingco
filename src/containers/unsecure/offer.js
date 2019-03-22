import * as React from 'react';
import { ScrollView, View, Image, ImageBackground, Text, Alert, TouchableOpacity, Dimensions } from 'react-native';
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
import background from '../../../images/background.png';

const {width} = Dimensions.get("window");

class Offer extends React.Component {

  constructor() {
    super();
    this.state = {
      isShowedHint: false,
      modalComplete: false,
      modalFeedback: false,
      activeFeedback: 10,
      offset: 0,
      max: 200,

      isMoving: false,
      isTop: true
    }
  }

  /*onBack() {
    if (this.state.offset == 0) {
      this.props.navigation.goBack();
      return;
    }
    this.onPressOffTo();
  }

  onPressOffTo() {
    let {offset} = this.state;
    let direction = 1;
    if (offset >= this.state.max)  direction = -1;
    const handle = setInterval(() => {
      offset += 25 * direction;
      this.setState({
        offset: offset
      });

      if (offset >= this.state.max * 1.5 || offset <= 0) {
        clearInterval(handle);
        return;
      }
    }, 50);
  }*/

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
    this.setState({activeFeedback: score});
  }

  onBtnFeedback() {
    this.setState({
      modalFeedback: false,
    });
    this.props.navigation.navigate("experience", {curStop: 2});
  }

  /*backBtnMarginTop() {
    let offset = Math.min(this.state.offset, this.state.max);
    offset = Math.min(offset, this.state.max * 0.7);
    return width * 0.02 + width * 0.06 * (this.state.max - offset) / (this.state.max * 0.7);
  }

  getLogoImgHeight() {
    let offset = Math.min(this.state.offset, this.state.max);
    offset = Math.min(offset, this.state.max * 0.7);
    return width * 0.1 + width * 0.3 * (this.state.max - offset) / (this.state.max * 0.7);
  }

  getContentMarginTop() {
    let offset = Math.min(this.state.offset, this.state.max);
    if (offset > this.state.max * 0.3)
      offset = this.state.max * 0.3 - offset * 1.7;
    
    return width * 0.4 * offset / this.state.max;
  }

  getStopViewMarginTop() {
    let offset = 0;
    if (this.state.offset > this.state.max)  offset = this.state.max * 1.5 - this.state.offset;
    else if (this.state.offset == 0) return 0;
    else return width * 0.8;

    return width * 0.8 * offset / (this.state.max * 0.5);
  }*/

  isCloseToBottom({layoutMeasurement, contentOffset, contentSize}) {
    const paddingToBottom = width * 0.3;
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
  }

  isCloseToTop({layoutMeasurement, contentOffset, contentSize}) {
    const paddingToTop = 50;
    console.log("contentOffset.y", contentOffset.y);
    return contentOffset.y <= paddingToTop;
  };

  onReachScrollEnd() {
    if (!this.state.isMoving && this.state.offset != this.state.max) {
      this.setState({
        isMoving: true
      });
      this.startAnimation();
    }
  }

  onReachScrollTop() {
    if (this.state.offset != 0) {
      this.setState({
        offset: 0,
        isMoving: false
      })
    }
  }

  startAnimation() {
    let {offset} = this.state;
    let direction = 1;
    if (offset >= this.state.max)  direction = -1;
    const handle = setInterval(() => {
      offset += 25 * direction;
      this.setState({
        offset: offset
      });

      if (offset >= this.state.max || offset <= 0) {
        clearInterval(handle);
        this.setState({
          isMoving: false
        });
        return;
      }
    }, 25);
  }

  getStopViewMarginTop() {
    let offset = this.state.max - this.state.offset;
    return width * 0.7 * offset / this.state.max;
  }

  getStopViewHeight() {
    return width * 0.7 - this.getStopViewMarginTop();
  }

  render() {
    let {curStop} = this.props;
    if (curStop == 2) curStop = 1;
    const {dropOff, product} = this.props.data;
    const {medias, clues, provider, action, where, pois} = this.props.data.stops [curStop];

    let nextClueTitle = "Next Clue";
    if (curStop == 1)
      nextClueTitle = "Final Instruction";

    return (
      <View style={styles.fullSize}>
        <ScrollView
          style={styles.Toolbar.mainContainer}
          ref="scrollView"
          bounces={false}
          onScroll={({nativeEvent}) => {
            if (this.isCloseToBottom(nativeEvent)) this.onReachScrollEnd();
            else if (this.isCloseToTop(nativeEvent)) this.onReachScrollTop();
          }}
          onScrollEndDrag={({nativeEvent}) => {
            if (this.isCloseToBottom(nativeEvent))
              this.refs.scrollView.scrollToEnd({animated: true});
            else
              this.refs.scrollView.scrollTo({y: 0, animated: true});
          }}>
          <ImageBackground source={{uri: medias [0].url}} style={[styles.Crackcode.headerImage]}>
            <LinearGradient colors={['#00000000', '#00000000', '#000000ff']} style={styles.Crackcode.headerImage}>
              <BackButton style={styles.backBtn} navigation={this.props.navigation}/>
            </LinearGradient>
          </ImageBackground>

          <View style={[styles.Weather.mainContainer, styles.borderTopRadius]}>
            <View style={styles.flex}>
              <Text style={[styles.Weather.contentHeader, {flex: 1}]}>You are off to</Text>
              <View style={[styles.iconRing, {backgroundColor: '#52a8ef'}]}>
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
            <StopView style={{marginTop: this.getStopViewMarginTop(), height: this.getStopViewHeight(), marginLeft: - width * 0.05}} stop={curStop + 1} title={nextClueTitle} lock={false} isUpShow={true} onPress={this.onPressNext.bind(this)}/>
          </View>
        </ScrollView>
        {/*<ScrollView style={styles.Toolbar.mainContainer} ref="scrollView" bounces={false}>
          <ImageBackground source={{uri: medias [0].url}} style={[styles.Crackcode.headerImage, {height: this.getLogoImgHeight()}]}>
            <LinearGradient colors={['#00000000', '#00000000', '#000000ff']} style={[styles.Crackcode.headerImage, {height: this.getLogoImgHeight()}]}>
              <BackButton style={[styles.backBtn, {marginTop: this.backBtnMarginTop()}]} navigation={this.props.navigation} onPress={this.onBack.bind(this)}/>
            </LinearGradient>
          </ImageBackground>

          <View style={[styles.Weather.mainContainer, styles.borderTopRadius]}>
            <View style={[styles.flex, {marginTop: this.getContentMarginTop()}]}>
              <Text style={[styles.Weather.contentHeader, {flex: 1}]} onPress={this.onPressOffTo.bind(this)}>You are off to</Text>
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
            <StopView style={{marginTop: this.getStopViewMarginTop(), marginLeft: - width * 0.05}} stop={curStop + 1} title={nextClueTitle} lock={false} isUpShow={true} onPress={this.onPressNext.bind(this)}/>
            </View>
        </ScrollView>*/}
        <Toolbar navigation={this.props.navigation}/>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalComplete}
          swipeDirection='up'>
          <View style={[styles.PickupModal.container]}>
            <Text style={styles.PickupModal.title}> </Text>
            <View style={styles.PickupModal.content}>
              <ImageBackground style={styles.CompleteModal.imageHeaderContainer} source={background}>
                <LinearGradient colors={['#00000000', '#000000ff']} style={styles.CompleteModal.imageHeaderContainer}>
                  <Image source={logo} style={styles.PickupModal.logo}/>
                  <Text style={styles.Splash.logoText}>Time better spent</Text>
                </LinearGradient>
              </ImageBackground>
              <View style={styles.PickupModal.textContainer}>
                <Text style={styles.PickupModal.minorText}>Thank you...</Text>
                <Text style={styles.PickupModal.description}>From us at AmazingCo, we hope you've had a ball, when you're planning your next date - you know who to call!</Text>

                <Text style={styles.PickupModal.mainText}>Don't Forget</Text>
                <Text style={styles.PickupModal.description}>Drop Off Your Picnic Basket To</Text>

                <Text style={[styles.PickupModal.description, styles.bold]}>
                {dropOff.where.name} {dropOff.text}</Text>

                <Text style={[styles.PickupModal.description, styles.bold]}>{dropOff.where.address}</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.PickupModal.closeButton}
              onPress={this.onBtnCompleteNext.bind(this)}>
              <Icon name="chevron-right" color='#fff' size={10}/>
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
              <Image source={logo} style={styles.FeedbackModal.logo}/>

              <View style={styles.FeedbackModal.textContainer}>
                <Text style={styles.PickupModal.minorText}>How likely are you to recommend {product.name} {product.shortName}?</Text>

                <Text style={styles.FeedbackModal.description}>0 = Unlikely. 10 = Very Likely</Text>

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
                  style={styles.FeedbackModal.closeButton}
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
