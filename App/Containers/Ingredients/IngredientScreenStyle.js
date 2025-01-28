import { StyleSheet } from 'react-native';
import Colors from 'Theme/Colors';

const IngredientScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
  },
  listContainer: {
    paddingBottom: 60,
  },
  IngredientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
  },
  IngredientText: {
    fontSize: 16,
    color: Colors.black,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: 24,
    color: Colors.gray,
    marginHorizontal: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 4,
    marginRight: 10,
    color: Colors.black,
  },
  saveButton: {
    backgroundColor: Colors.blue400,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  saveButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IngredientScreenStyle;
