import Colors from './Colors'

export default {
  background: {
    backgroundColor: Colors.white,
  },

  rootContainer: {
    backgroundColor: Colors.white,
    flex: 2,
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  flexGrow: {
    flexGrow: 1,
  },

  fullWidth: {
    width: '100%',
  },

  centeredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  //Screens general
  title: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
  },

  //Header
  navigation: {
    headerLeftContainerStyle: {
      paddingLeft: Platform.OS === 'android' ? 8 : 14,
    },

    headerRightContainerStyle: {
      paddingRight: 14,
    },

    headerStyle: {
      backgroundColor: Colors.transparent,
      height: 140,
      ...Platform.select({
        ios: {
          shadowColor: 'transparent',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0,
          shadowRadius: 0,
        },
        android: {
          elevation: 0,
        },
      }),
      borderBottomWidth: 0,
      borderBottomColor: 'transparent',
    },

    headerBackTitleStyle: {
      color: Colors.white,
    },

    //NavigationBar
    tabBar: {
      container: {
        justifyContent: 'center',
        flex: 0,
        alignItems: 'center',
        paddingTop: 10,
      },

      tabBarStyle: {
        height: 79,
        shadowColor: 'transparent',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        backgroundColor: Colors.black,
        borderTopWidth: 0,
        marginHorizontal: -10,
        paddingBottom: 5,
      },

      iconSize: {
        size: 43,
      },
    },
  },
}
