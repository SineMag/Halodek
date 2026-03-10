import { View, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { Colors } from '@/constants/theme';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusRow}>
        <Text style={styles.timeText}>9:41</Text>
        <View style={styles.statusIcons}>
          <View style={styles.cellularBars}>
            <View style={[styles.cellularBar, styles.cellularBar1]} />
            <View style={[styles.cellularBar, styles.cellularBar2]} />
            <View style={[styles.cellularBar, styles.cellularBar3]} />
            <View style={[styles.cellularBar, styles.cellularBar4]} />
          </View>
          <Ionicons name="wifi" size={18} color={styles.iconColor.color} style={styles.statusIcon} />
          <Ionicons name="battery-full" size={20} color={styles.iconColor.color} style={styles.statusIcon} />
        </View>
      </View>
      <View style={styles.headerRow}>
        <Image source={require('../../assets/images/Halodek-Logo.png')} style={styles.logoImage} />
        <View style={styles.icons}>
          <Ionicons name="search" size={24} color={Colors.light.icon} style={styles.icon} />
          <Ionicons name="ellipsis-vertical" size={24} color={Colors.light.icon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 6,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
  },
  iconColor: {
    color: '#111',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginLeft: 6,
  },
  cellularBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 6,
  },
  cellularBar: {
    width: 3,
    borderRadius: 1,
    marginRight: 2,
    backgroundColor: '#111',
  },
  cellularBar1: {
    height: 5,
  },
  cellularBar2: {
    height: 8,
  },
  cellularBar3: {
    height: 11,
  },
  cellularBar4: {
    height: 14,
    backgroundColor: '#b5b5b5',
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
