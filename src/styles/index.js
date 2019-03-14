import { Dimensions } from 'react-native';
const {width, height} = Dimensions.get("screen");

const styles = {
  fullSize: {
    width: width,
    height: height
  },
  borderRadius: {
    borderRadius: width * 0.05,
    overflow: 'hidden'
  },
  borderBottomRadius: {
    borderBottomRightRadius: width * 0.05,
    borderBottomLeftRadius: width * 0.05,
    overflow: 'hidden'
  },

  Splash: {
    gradientBack: {
      flex: 1
    },
    logoImage: {
      width: width * 0.7,
      height: width * 0.2,
      marginLeft: width * 0.15,
      marginTop: height * 0.5
    },
    logoText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      width: width,
      textAlign: 'center'
    },

    codeContainer: {
      marginTop: width * 0.05
    },
    codeDescription: {
      width: width,
      textAlign: 'center',
      color: '#777'
    },

    codeInputContainer: {
      backgroundColor: '#f7f8f9',
      borderRadius: width * 0.05,
      overflow: 'hidden',
      width: width * 0.8,
      height: width * 0.1,
      marginLeft: width * 0.1,
      display: 'flex',
      flexDirection: 'row',
      paddingLeft: width * 0.05,
      paddingRight: width * 0.005,
      marginTop: width * 0.05
    },
    codeInput: {
      flex: 1,
    },
    codeBtnContainer: {
      width: width * 0.09,
      height: width * 0.09,
      borderRadius: width * 0.045,
      overflow: 'hidden',
      backgroundColor: '#eaebec',
      marginTop: width * 0.005,
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    codeBtnText: {
      width: width * 0.09,
      textAlign: 'center',
      color: '#fff',
      fontWeight: 'bold'
    }
  },

  Experience: {
    pageContainer: {
      paddingTop: width * 0.2,
      paddingLeft: width * 0.05,
      paddingRight: width * 0.05,
    },
    headerTxt: {
      fontSize: width * 0.07,
      fontWeight: 'bold',
      color: '#111',
      marginBottom: width * 0.05
    },
    startBtnContainer: {
      width: width * 0.9,
      height: width * 0.564,
      borderRadius: width * 0.05,
      overflow: 'hidden'
    },
    startBtnImage: {
      width: width * 0.9,
      height: width * 0.564
    }
  }
};

export default styles;