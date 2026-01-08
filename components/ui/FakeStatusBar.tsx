import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const FakeStatusBar = () => {
  if (Platform.OS === 'web') {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.rightIcons}>
          <MaterialCommunityIcons name="signal-cellular-3" size={16} color={Colors.light.text} />
          <Ionicons name="wifi" size={16} color={Colors.light.text} style={styles.icon} />
          <Ionicons name="battery-full" size={18} color={Colors.light.text} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'red',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 50, // Increased height
  },
  time: {
    color: Colors.light.text,
    fontSize: 14,
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 6,
  },
});

export default FakeStatusBar;
