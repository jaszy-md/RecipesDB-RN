import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'Theme';

const { size } = Fonts;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: 20,
  },

  posterContainer: {
    width: 300,
    overflow: 'hidden',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.black,
  },

  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },

  deleteIcon: {
    fontSize: 24,
    color: Colors.red400,
    marginRight: 16,
  },

  penIconContainer: {
    marginLeft: 8,
  },

  penIcon: {
    fontSize: 24,
    color: Colors.black,
  },

  posterImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 298,
    height: 260,
    resizeMode: 'cover',
  },

  posterImageEditing: {
    height: 180, // Kleinere hoogte bij bewerken
  },

  detailsContainer: {
    width: 300,
    backgroundColor: Colors.green600,
    borderRadius: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    padding: 15,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: Colors.blue200,
  },

  plantTitle: {
    fontSize: size.h2,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 5,
  },
  
  plantInformation: {
    fontSize: size.normal,
    color: Colors.white,
    fontWeight: 'bold',
    lineHeight: 24,
    marginBottom: 10,
  },

  urlText: {
    fontSize: size.small, // Kleinere tekstgrootte voor de URL
    color: Colors.white,
    marginBottom: 10,
  },

  editableInput: {
    fontSize: size.normal,
    padding: 8,
    backgroundColor: Colors.green200,
    borderColor: Colors.green800,
    borderWidth: 1,
    borderRadius: 5,
    color: Colors.black,
    marginBottom: 10,
  },

  categoryContainer: {
    marginTop: 10,
  },

  categoryTitle: {
    fontSize: size.normal,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 5,
  },

  categoryItem: {
    fontSize: size.small, // Kleinere tekstgrootte voor categorie-inhoud
    color: Colors.white,
  },

  saveButton: {
    backgroundColor: Colors.green600,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
  },

  saveButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: size.normal,
  },
});
