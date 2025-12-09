import { View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Colors } from '@/constants/theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/HALODEK-Logo.png')} style={styles.logoImage} />
      <View style={styles.icons}>
        <Ionicons name="search" size={24} color={Colors.light.icon} style={styles.icon} />
        <Ionicons name="ellipsis-vertical" size={24} color={Colors.light.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 8,
  },
  logoImage: {
    width: 120, // Adjust width as needed
    height: 30, // Adjust height as needed
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 16,
  },
});

export default Header;
