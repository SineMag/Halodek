import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/theme';

type Tab = 'Chat' | 'Status' | 'Calls';

const TabBar = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Chat');

  const tabs: Tab[] = ['Chat', 'Status', 'Calls'];

  return (
    <View style={styles.card}>
      <View style={styles.container}>
        {tabs.map((tab, index) => (
          <React.Fragment key={tab}>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
            {index < tabs.length - 1 && <View style={styles.separator} />}
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    overflow: 'hidden', // to clip the children
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: Colors.light.brand,
  },
  tabText: {
    color: Colors.light.icon,
    fontSize: 16,
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
  },
  separator: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: '#ccc',
    height: '60%',
  },
});

export default TabBar;
