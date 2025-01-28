import React from 'react'
import { View, Text } from 'react-native'
import DropdownPicker from 'react-native-dropdown-picker'
import CustomDropdownPickerStyle from './CustomDropdownPickerStyle'

DropdownPicker.setMode('BADGE')

const CustomDropdownPicker = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  placeholder,
  multiple,
  min,
  max,
}) => {
  const getDisplayValue = () => {
    if (!value || value.length === 0) {
      return placeholder;
    }
  
    const selectedItems = items.filter((item) => value.includes(item.value));
  
    if (selectedItems.length === 1) {
      return selectedItems[0].label || ''; // Zorg voor een fallback voor label
    }
  
    // Zorg ervoor dat substring alleen wordt aangeroepen als label bestaat
    return selectedItems.map((item) => (item.label ? item.label.substring(0, 3) : '')).join(', ');
  };
  

  return (
      <View style={CustomDropdownPickerStyle.pickerWrapper}>
        <DropdownPicker
          open={open}
          value={value}
          items={items}
          placeholder={placeholder}
          style={CustomDropdownPickerStyle.picker}
          placeholderStyle={CustomDropdownPickerStyle.placeholder}
          dropDownContainerStyle={CustomDropdownPickerStyle.dropDownContainer}
          setOpen={setOpen}
          setValue={setValue}
          setItems={() => {}}
          multiple={multiple}
          min={min}
          max={max}
          textStyle={CustomDropdownPickerStyle.selectedText}
          selectedItemLabelStyle={CustomDropdownPickerStyle.selectedDropdownText}
          selectedItemContainerStyle={CustomDropdownPickerStyle.selectedBackground}
          badgeStyle={CustomDropdownPickerStyle.badgeStyle}
          badgeTextStyle={CustomDropdownPickerStyle.badgeTextStyle}
          badgeSeparatorStyle={CustomDropdownPickerStyle.badgeSeparatorStyle}
          showBadgeDot={false}
          arrowIconStyle={CustomDropdownPickerStyle.iconContainerStyle}
          renderBadgeItem={() => (
            <View style={CustomDropdownPickerStyle.badgeStyle}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={CustomDropdownPickerStyle.badgeTextStyle}
              >
                {getDisplayValue()}
              </Text>
            </View>
          )}
        />
      </View>
  )
}

export default CustomDropdownPicker
