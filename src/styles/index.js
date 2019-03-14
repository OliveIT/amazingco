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
  borderTopRadius: {
    borderTopRightRadius: width * 0.05,
    borderTopLeftRadius: width * 0.05,
    overflow: 'hidden'
  },
  borderBottomRadius: {
    borderBottomRightRadius: width * 0.05,
    borderBottomLeftRadius: width * 0.05,
    overflow: 'hidden'
  },

  backBtn: {
    marginLeft: width * 0.03,
    marginTop: width * 0.08
  },

  line: {
    height: 1,
    width: width * 0.8,
    backgroundColor: '#aaa',
    alignSelf: 'center',
    marginBottom: width * 0.04
  },

  ///Components
  BackButton: {
    btnContainer: {
      width: width * 0.2,
    },
    btnImgContainer: {
      width: width * 0.2,
      display: 'flex',
      flexDirection: 'row',
      borderRadius: width * 0.03,
      overflow: 'hidden',
      paddingLeft: 5,
      paddingRight: 5,
      justifyContent: 'center', 
      alignItems: 'center' 
    },
    icon: {
      marginTop: 2
    },
    btnText: {
      color: '#fff',
      marginLeft: 10
    }
  },

  WeatherBox: {
    container: {
      width: width * 0.2,
      justifyContent: 'center', 
      alignItems: 'center'
    },
    image: {
      width: width * 0.1,
      height: width * 0.1,
    },
    text: {
      color: '#fff',
      width: width * 0.2,
      textAlign: 'center',
    }
  },

  Button: {
    container: {
      width: width * 0.5,
      height: width * 0.1,
      alignSelf: 'center',
      borderRadius: width * 0.05,
      justifyContent: 'center', 
      alignItems: 'center'
    },
    blue: {
      backgroundColor: '#52a8ef'
    },
    text: {
      color: '#fff'
    }
  },

  /// Pages
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
  },

  Weather: {
    headerImage: {
      width: width,
      height: width * 0.8
    },
    topContentContainer: {
      marginTop: width * 0.2,
      paddingLeft: width * 0.05
    },
    weather: {
    },
    minorHeaderText: {
      color: '#fff',
      fontSize: width * 0.07
    },
    mainHeaderText: {
      color: '#fff',
      fontSize: width * 0.1,
      fontWeight: 'bold'
    },

    mainContainer: {
      marginTop: - width * 0.05,
      paddingTop: width * 0.1,
      paddingBottom: width * 0.1,
      paddingLeft: width * 0.05,
      paddingRight: width * 0.05,
      backgroundColor: '#fff'
    },
    contentHeader: {
      color: '#111',
      fontSize: width * 0.07,
      fontWeight: 'bold',
      marginBottom: width * 0.05
    },
    contentSubTitle: {
      color: '#333',
      fontSize: width * 0.055,
      fontWeight: '100',
      marginBottom: width * 0.05
    },
    contentText: {
      color: '#666',
      fontSize: width * 0.037,
      marginBottom: width * 0.05
    },
    contentDescription: {
      color: '#ff765f',
      fontSize: width * 0.037,
      marginBottom: width * 0.05,
      fontWeight: 'bold',
    },
    agreeCheckContainer: {
      backgroundColor: '#00000000',
      borderWidth: 0
    },
    agreeCheckText: {
      color: '#333',
      fontSize: width * 0.044,
      fontWeight: '100',
    },
    agreementBackImg: {
      width: width,
      height: width * 1.2,
      marginTop: - width * 0.2,
      paddingTop: width * 0.7
    }
  }
};

export default styles;