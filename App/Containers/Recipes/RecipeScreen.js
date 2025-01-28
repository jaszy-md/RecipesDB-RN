import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, Image } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from 'Services/ApiService';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Colors from 'Theme/Colors';
import Images from 'Theme/Images';
import RecipeScreenStyle from './RecipeScreenStyle';

const fetchRecipes = async (searchQuery) => {
  const params = searchQuery ? { name: searchQuery } : {};
  const response = await apiClient.get('/recipes', { params });
  console.log('Fetched recipes:', response.data);
  return response.data.data;
};

const RecipesScreen = () => {
  const navigation = useNavigation();
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState('');
  const [imageError, setImageError] = useState({});
  const isFocused = useIsFocused();

  const { data: recipes, isLoading, isError } = useQuery({
    queryKey: ['recipes', searchQuery],
    queryFn: () => fetchRecipes(searchQuery),
  });

  const listEmptyComponent = () => {
    if (isLoading) {
      return (
        <View>
          <Text style={RecipeScreenStyle.loadingText}>Loading recipes...</Text>
        </View>
      );
    }

    if (isError) {
      return (
        <View>
          <Text style={RecipeScreenStyle.loadingText}>Failed to load recipes. Please try again.</Text>
        </View>
      );
    }

    if (!recipes || recipes.length === 0) {
      return (
        <View>
          <Text style={RecipeScreenStyle.loadingText}>No recipes found</Text>
        </View>
      );
    }

    return null;
  };

  const renderRecipe = ({ item }) => (
    <TouchableOpacity
      style={RecipeScreenStyle.recipeContainer}
      onPress={() => navigation.navigate('RecipeInfo', {
        recipe: {
          ...item,
          ingredients: item.ingredient ? item.ingredient.map(ing => ing.name).join(', ') : 'Unknown Ingredient'
        }
      })}
    >
      <Image
        source={imageError[item.id] ? Images.ImageNotFound : { uri: item.image_url }}
        style={[
          RecipeScreenStyle.recipeImage,
          imageError[item.id] && RecipeScreenStyle.imageNotFound
        ]}
        onError={() => {
          console.log('Failed to load image:', item.image_url);
          setImageError((prev) => ({ ...prev, [item.id]: true }));
        }}
        resizeMode="cover"
      />
      <Text style={RecipeScreenStyle.recipeTitle}>{item.name}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    if (isFocused) {
      queryClient.invalidateQueries(['recipes', searchQuery]);
    }
  }, [isFocused, queryClient, searchQuery]);

  return (
    <View style={RecipeScreenStyle.container}>
      <View style={RecipeScreenStyle.contentContainer}>
        <View style={RecipeScreenStyle.inputContainer}>
          <TextInput
            style={RecipeScreenStyle.searchInput}
            placeholder="Search for recipe"
            placeholderTextColor={Colors.blue400}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Icon name="search" style={RecipeScreenStyle.icon} />
        </View>

        <View style={RecipeScreenStyle.recipesWrapperContainer}>
          <FlatList
            data={recipes || []}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderRecipe}
            numColumns={2}
            columnWrapperStyle={recipes && recipes.length === 1 ? null : RecipeScreenStyle.columnWrapper}
            ListEmptyComponent={listEmptyComponent}
            contentContainerStyle={RecipeScreenStyle.recipesWrapper}
          />
        </View>
      </View>

      <TouchableOpacity
        style={RecipeScreenStyle.addButton}
        onPress={() => navigation.navigate('AddRecipe')}
      >
        <Text style={RecipeScreenStyle.addButtonText}>
          Add
          <Text style={RecipeScreenStyle.highlight}>R</Text>
          ecipe +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecipesScreen;
