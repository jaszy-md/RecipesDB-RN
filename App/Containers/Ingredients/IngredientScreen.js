import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from 'Services/ApiService';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IngredientScreenStyle from 'Containers/Ingredients/IngredientScreenStyle';

const IngredientScreen = () => {
  const queryClient = useQueryClient();
  const [newIngredient, setNewIngredient] = useState('');
  const [editingIngredient, setEditingIngredient] = useState(null);

  const fetchIngredients = async () => {
    const response = await apiClient.get('/ingredients');
    console.log('Full API Response:', response); // Log de volledige response
    console.log('Ingredients fetched:', response.data.data); // Log de data property
    return response.data.data;
  };
  

  const { data: ingredients, isLoading, isError } = useQuery({
    queryKey: ['ingredients'],
    queryFn: fetchIngredients,
  });

  const handleSaveIngredient = async () => {
    if (newIngredient.trim()) {
      try {
        if (editingIngredient) {
          // Update ingredient
          await apiClient.put(`/ingredients/${editingIngredient.id}`, { ingredient: newIngredient });
          Alert.alert('Success', 'Ingredient updated successfully!', [{ text: 'OK' }]);
          setEditingIngredient(null);
        } else {
          // Add new ingredient
          await apiClient.post('/ingredients', { ingredient: newIngredient });
          Alert.alert('Success', 'Ingredient added successfully!', [{ text: 'OK' }]);
        }
        setNewIngredient('');
        queryClient.invalidateQueries(['ingredients']);
      } catch (error) {
        console.error('Error saving ingredient:', error);
        Alert.alert('Error', 'Failed to save ingredient. Please try again.', [{ text: 'OK' }]);
      }
    } else {
      Alert.alert('Error', 'Please enter an ingredient name.', [{ text: 'OK' }]);
    }
  };

  const handleEditIngredient = (ingredient) => {
    setNewIngredient(ingredient.ingredient); // Zorg dat 'ingredient' wordt gebruikt in plaats van 'name'
    setEditingIngredient(ingredient);
  };

  const handleDeleteIngredient = (id) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this ingredient?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: async () => {
            try {
              await apiClient.delete(`/ingredients/${id}`);
              queryClient.invalidateQueries(['ingredients']);
              Alert.alert('Success', 'Ingredient deleted successfully!', [{ text: 'OK' }]);
            } catch (error) {
              console.error('Error deleting ingredient:', error);
              Alert.alert('Error', 'Failed to delete ingredient. Please try again.', [{ text: 'OK' }]);
            }
          },
        },
      ]
    );
  };

  const renderIngredient = ({ item }) => (
    <View style={IngredientScreenStyle.IngredientItem}>
      <Text style={IngredientScreenStyle.IngredientText}>{item.ingredient}</Text> {/* Gebruik 'ingredient' */}
      <View style={IngredientScreenStyle.iconContainer}>
        <TouchableOpacity onPress={() => handleEditIngredient(item)}>
          <Icon name="edit" style={IngredientScreenStyle.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteIngredient(item.id)}>
          <Icon name="delete" style={IngredientScreenStyle.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (isLoading) {
    return (
      <View style={IngredientScreenStyle.container}>
        <Text>Loading ingredients...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={IngredientScreenStyle.container}>
        <Text>Error loading ingredients. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={IngredientScreenStyle.container}>
      <FlatList
        data={ingredients || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderIngredient}
        contentContainerStyle={IngredientScreenStyle.listContainer}
      />
      <View style={IngredientScreenStyle.inputContainer}>
        <TextInput
          style={IngredientScreenStyle.input}
          placeholder="Add new ingredient"
          value={newIngredient}
          onChangeText={setNewIngredient}
        />
        <TouchableOpacity onPress={handleSaveIngredient} style={IngredientScreenStyle.saveButton}>
          <Text style={IngredientScreenStyle.saveButtonText}>
            {editingIngredient ? 'Update' : 'Save'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IngredientScreen;
