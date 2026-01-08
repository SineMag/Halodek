import React from 'react';
import { TouchableOpacity, StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';

interface FloatingActionButtonProps {
  style?: StyleProp<ViewStyle>;
}

const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Ionicons name="add" size={32} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.light.brand, // Pale orange shade
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8, // Thicker shadow
    shadowColor: Colors.light.brand,
    shadowOffset: { width: 0, height: 6 }, // Thicker shadow
    shadowOpacity: 0.5,
    shadowRadius: 8, // Thicker shadow
  },
});

export default FloatingActionButton;
