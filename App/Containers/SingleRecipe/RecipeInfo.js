import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import RecipeInfoStyle from './RecipeInfoStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import apiClient from 'Services/ApiService';
import { useNavigation } from '@react-navigation/native';
import CustomDropdownPicker from '../../Components/CustomDropDownPicker/CustomDropdownPicker';

const RecipeInfo = ({ route, mode = 'edit' }) => {
  const navigation = useNavigation();
  const recipe = route?.params?.recipe || {}; // Default to an empty object if no recipe data is passed
  const [isEditing, setIsEditing] = useState(mode === 'add'); // Start in edit mode if it's "add" mode
  const [updatedName, setUpdatedName] = useState(mode === 'edit' ? recipe.name : '');
  const [updatedInformation, setUpdatedInformation] = useState(mode === 'edit' ? recipe.information : '');
  const [updatedImageUrl, setUpdatedImageUrl] = useState(mode === 'edit' ? recipe.image_url : '');
  const [selectedIngredients, setSelectedIngredients] = useState(mode === 'edit' ? recipe.ingredient?.map(cat => cat.id) : []);
  const [allIngredients, setAllIngredients] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to shorten the image URL for display purposes
  const getShortenedUrl = (url) => {
    const maxLength = 30;
    return url.length > maxLength ? `${url.substring(0, maxLength)}...` : url;
  };

  // Fetch available ingredients from the API
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await apiClient.get('ingredients');
        const ingredientItems = Array.isArray(response.data.data)
          ? response.data.data.map(ingredient => ({
              label: ingredient.ingredient,
              value: ingredient.id
            }))
          : [];
        setAllIngredients(ingredientItems);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      }
    };
    fetchIngredients();
  }, []);

  // Function to handle deleting the recipe
  const handleDelete = () => {
    if (mode === 'add') return; // Disable delete in "add" mode
    Alert.alert(
      'Confirmation',
      `Are you sure you want to delete the recipe "${recipe.name}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await apiClient.delete(`recipes/${recipe.id}`);
              navigation.navigate('recipes'); // Navigate back to recipes screen
            } catch (error) {
              Alert.alert('Error', 'Failed to delete the recipe. Please try again.');
            }
          },
        },
      ]
    );
  };

  // Function to handle saving (either adding a new recipe or updating an existing one)
  const handleSave = async () => {
    if (!updatedName.trim() || !updatedInformation.trim() || !updatedImageUrl.trim()) {
      Alert.alert('Error', 'All fields must be filled.');
      return;
    }

    const payload = {
      name: updatedName,
      information: updatedInformation,
      image_url: updatedImageUrl,
      ingredient_ids: selectedIngredients.length > 0 ? selectedIngredients : [],
    };

    console.log("Payload for saving recipe:", payload);

    try {
      let response;
      if (mode === 'edit') {
        // Update an existing recipe
        response = await apiClient.put(`recipes/${recipe.id}`, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        // Add a new recipe
        response = await apiClient.post(`recipes`, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

      console.log("API Response:", response);

      if (response.status === 200 || response.status === 201) {
        Alert.alert('Success', mode === 'edit' ? 'The recipe details have been updated.' : 'The recipe has been added.');
        setIsEditing(false);
        navigation.navigate('PRecipe'); // Navigate back to recipes screen
      } else {
        throw new Error(`Unexpected API response: ${response.status}`);
      }
    } catch (error) {
      if (error.response) {
        console.error('API Error Data:', error.response.data);
        Alert.alert('Error', error.response.data.message || 'Failed to save the recipe. Please try again.');
      } else {
        console.error('Error:', error);
        Alert.alert('Error', 'Failed to save the recipe. Please try again.');
      }
    }
  };

  return (
    <View style={RecipeInfoStyle.container}>
      <View style={RecipeInfoStyle.posterContainer}>
        <View style={RecipeInfoStyle.iconContainer}>
          {mode === 'edit' && (
            <TouchableOpacity onPress={handleDelete}>
              <Icon name="delete" style={RecipeInfoStyle.deleteIcon} />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={() => setIsEditing(true)} style={RecipeInfoStyle.penIconContainer}>
            <Icon name="edit" style={RecipeInfoStyle.penIcon} />
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: updatedImageUrl || 'https://via.placeholder.com/150' }} // Placeholder image for "add" mode
          style={[
            RecipeInfoStyle.posterImage,
            isEditing && RecipeInfoStyle.posterImageEditing,
          ]}
        />
      </View>

      <View style={RecipeInfoStyle.detailsContainer}>
        {isEditing ? (
          <TextInput
            style={RecipeInfoStyle.editableInput}
            value={updatedName}
            onChangeText={setUpdatedName}
            placeholder="Recipe name"
          />
        ) : (
          <Text style={RecipeInfoStyle.RecipeTitle}>{updatedName}</Text>
        )}

        {isEditing ? (
          <TextInput
            style={RecipeInfoStyle.editableInput}
            value={updatedImageUrl}
            onChangeText={setUpdatedImageUrl}
            placeholder="Image URL"
          />
        ) : (
          <Text style={RecipeInfoStyle.urlText}>{getShortenedUrl(updatedImageUrl)}</Text>
        )}

        {isEditing ? (
          <TextInput
            style={RecipeInfoStyle.editableInput}
            value={updatedInformation}
            onChangeText={setUpdatedInformation}
            multiline
            placeholder="Information about the recipe"
          />
        ) : (
          <Text style={RecipeInfoStyle.recipeInformation}>{updatedInformation}</Text>
        )}

        <View style={RecipeInfoStyle.ingredientContainer}>
          <Text style={RecipeInfoStyle.ingredientTitle}>Ingredients:</Text>
          {isEditing ? (
            <CustomDropdownPicker
              open={isDropdownOpen}
              value={selectedIngredients}
              items={allIngredients}
              setOpen={setIsDropdownOpen}
              setValue={setSelectedIngredients}
              placeholder="Select ingredient"
              multiple={true}
              min={1}
              max={3}
            />
          ) : (
            recipe.ingredient?.map(cat => (
              <Text key={cat.id} style={RecipeInfoStyle.ingredientItem}>
                {cat.name}
              </Text>
            ))
          )}
        </View>
      </View>

      {isEditing && (
        <TouchableOpacity style={RecipeInfoStyle.saveButton} onPress={handleSave}>
          <Text style={RecipeInfoStyle.saveButtonText}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RecipeInfo;
