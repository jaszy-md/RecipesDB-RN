import { StyleSheet } from 'react-native';
import Colors from 'Theme/Colors';

const RecipeScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  contentContainer: {
    padding: 16,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.gray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    width: '90%',
  },
  searchInput: {
    flex: 1,
    padding: 8,
    color: Colors.black,
  },
  icon: {
    fontSize: 24,
    color: Colors.blue400,
  },
  recipesWrapperContainer: {
    alignItems: 'center',
    width: '100%',
  },
  recipesWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    width: 320,
    alignItems: 'flex-start',
  },
  recipeContainer: {
    flexBasis: '45%',
    alignItems: 'center',
    margin: 8,
  },
  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  imageNotFound: {
    backgroundColor: Colors.lightGray,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  recipeTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  loadingText: {
    textAlign: 'center',
    color: Colors.gray,
    marginTop: 20,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: Colors.green600,
    borderRadius: 50,
    padding: 12,
  },
  addButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default RecipeScreenStyle;
