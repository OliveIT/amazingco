import * as React from 'react';
import { View, Image, Text, TouchableOpacity, Alert } from 'react-native';
import Modal from "react-native-modal";
import { connect } from "react-redux";

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles';
import StopView from './stopview';

import logo from '../../images/amazingco-logo-white.png';

class ToolbarItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={styles.Toolbar.item} onPress={this.props.onPress}>
        <Icon name={this.props.iconName} color='#c4c4c4' style={styles.Toolbar.icon} size={20}></Icon>
        <Text style={styles.Toolbar.text}>{this.props.toolName}</Text>
      </TouchableOpacity>
    );
  }
}

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalPickup: false,
      modalClue: false,
    }
  }

  onBtnPickup() {
    this.setState({
      modalPickup: !this.state.modalPickup
    });
  }

  onBtnClue() {
    this.setState({
      modalClue: !this.state.modalClue
    });
  }

  onBtnHelp() {
    const {contact} = this.props.data;
    Alert.alert(
      `Call ${contact.name}`,
      `Would you like to call ${contact.name} ${contact.phone}`,
      [
        {
          text: 'Call',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  }

  render() {
    const {customer, product, stops} = this.props.data;

    return (
      <View style={styles.Toolbar.Container}>
        <ToolbarItem iconName="database" toolName="Pickups" onPress={this.onBtnPickup.bind(this)}/>
        <ToolbarItem iconName="bars" toolName="Clues" onPress={this.onBtnClue.bind(this)}/>
        <ToolbarItem iconName="phone" toolName="Help" onPress={this.onBtnHelp.bind(this)}/>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalPickup}
          swipeDirection='up'>
          <View style={[styles.PickupModal.container]}>
            <Text style={styles.PickupModal.title}>Customer Card</Text>
            <View style={styles.PickupModal.content}>
              <View style={styles.PickupModal.imageHeaderContainer}>
                <Image source={logo} style={styles.PickupModal.logo}/>
              </View>
              <View style={styles.PickupModal.textContainer}>
                <Text style={styles.PickupModal.mainText}>{customer.name}</Text>
                <Text style={styles.PickupModal.minorText}>{product.name}</Text>
                <Text style={styles.PickupModal.minorText}>{product.shortName}</Text>
                <Text style={styles.PickupModal.description}>Show this the each provider to pickup your goods</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.PickupModal.closeButton}
              onPress={this.onBtnPickup.bind(this)}>
              <Icon name="remove" color='#fff' size={20}/>
            </TouchableOpacity>
          </View>
        </Modal>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalClue}
          swipeDirection='up'>
          <View style={[styles.PickupModal.container]}>
            <Text style={styles.PickupModal.title}>{product.shortName} Clue List</Text>
            <View style={[styles.PickupModal.content, styles.ClueModal.content]}>
              {stops.map((item, index) => 
                <StopView stop={index} title={item.title} lock={false} isUpShow={false} key={index}/>
              )}
            </View>
            <TouchableOpacity
              style={styles.PickupModal.closeButton}
              onPress={this.onBtnClue.bind(this)}>
              <Icon name="remove" color='#fff' size={20}/>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.reducer.data
});

export default connect(mapStateToProps)(Toolbar);