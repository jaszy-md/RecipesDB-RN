import { StyleSheet } from 'react-native'
import { Colors, Fonts } from 'Theme'

const { size, types } = Fonts;

const CustomDropdownPickerStyle = StyleSheet.create({
  picker: {
    height: 32,
    minHeight: 32,
    maxHeight: 32,
    width: 111,
    backgroundColor: Colors.green600,
    borderRadius: 20,
    paddingVertical: 4,
  },

  dropDownContainer: {
    position: 'absolute',
    height: 100,
    width: 111,
    backgroundColor: Colors.green400,
    borderRadius: 20,
    elevation: 5,
  },

  placeholder: {
    color: Colors.blue400,
    fontSize: size.small,
    ...types.interR,
  },

  selectedBackground: {
    backgroundColor: Colors.green200,
    width: '100%',
    height: 32,
    minHeight: 32,
    maxHeight: 32,
    justifyContent: 'center',
  },

  selectedText: {
    color: Colors.green200,
    fontSize: size.small,
    paddingLeft: 5,
    ...types.interB,
  },

  selectedDropdownText: {
    color: Colors.black,
    fontSize: size.small,
    ...types.interR,
  },

  badgeStyle: {
    backgroundColor: Colors.transparent,
  },

  badgeTextStyle: {
    color: Colors.green200,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: 5,
    fontSize: size.small,
    ...types.interR,
  },

  badgeSeparatorStyle: {
    width: 5,
  },

  iconContainerStyle: {
    tintColor: Colors.white,
  },

  pickerWrapper: {
    position: 'relative',
    zIndex: 2,
  },

  rightAlignedDropdown: {
    position: 'absolute',
    right: 0,
    zIndex: 2,
  },
});

export default CustomDropdownPickerStyle
