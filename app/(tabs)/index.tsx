import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from '@/components/ui/Header';
import TabBar from '@/components/ui/TabBar';
import ChatListItem from '@/components/ui/ChatListItem';
import FloatingActionButton from '@/components/ui/FloatingActionButton';

const chatData = [
  { id: '1', name: 'John Doe', message: 'Hey, how are you?', time: '3:45 PM', unreadCount: 2 },
  { id: '2', name: 'Jane Smith', message: 'Can you send me the file?', time: '3:30 PM', unreadCount: 0 },
  { id: '3', name: 'Bob Johnson', message: 'See you tomorrow!', time: '2:00 PM', unreadCount: 0 },
  { id: '4', name: 'Alice Williams', message: 'Thanks!', time: '1:15 PM', unreadCount: 1 },
  { id: '5', name: 'Mike Brown', message: 'Let\'s catch up later.', time: '12:00 PM', unreadCount: 0 },
  { id: '6', name: 'Emily Davis', message: 'Sure, sounds good.', time: '11:45 AM', unreadCount: 0 },
  { id: '7', name: 'Chris Wilson', message: 'On my way.', time: '11:30 AM', unreadCount: 0 },
  { id: '8', name: 'Sarah Miller', message: 'Got it, thanks!', time: '11:00 AM', unreadCount: 3 },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <TabBar />
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatListItem
            name={item.name}
            message={item.message}
            time={item.time}
            unreadCount={item.unreadCount}
          />
        )}
      />
      <FloatingActionButton />
      <View style={styles.homeIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
    width: 134,
    height: 5,
    borderRadius: 100,
    backgroundColor: '#333',
  },
});