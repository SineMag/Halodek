import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from '@/components/ui/Header';
import TabBar from '@/components/ui/TabBar';
import ChatListItem from '@/components/ui/ChatListItem';
import FloatingActionButton from '@/components/ui/FloatingActionButton';

const chatData = [
  { id: '1', name: 'Faza Dzikrulloh', message: 'Typing...', time: '14:30', image: require('@/assets/images/Faza.png') },
  { id: '2', name: 'Hatypo Studio', message: 'Faza Can you help me to do with new project...', time: '14:30', unreadCount: 2, image: require('@/assets/images/Hatypo Studio.png') },
  { id: '3', name: 'Zhofran A', message: 'I think we should upgrade the social media...', time: '14:00', unreadCount: 2, image: require('@/assets/images/Zhofran.png') },
  { id: '4', name: 'Vito Arvy', message: 'Okay adhit, I\'ll tel faza about it 👍🏼 ', time: '13:40', image: require('@/assets/images/Vito.png') },
  { id: '5', name: 'Raul', message: 'Thanks Raul! 🙏🏼✨', time: 'Yesterday', sent: true, image: require('@/assets/images/Raul.png') },
  { id: '6', name: 'Farhan Bagas', message: 'Great work farhan! 👍🏼 I\'ll tell faza about logo...', time: '29/08/22', sent: true, image: require('@/assets/images/Farhan.png') },
  { id: '7', name: 'Abdull', message: 'Perfecto!🔥 I will check it later', time: '29/08/22', sent: true, image: require('@/assets/images/Abdull.png') },
  { id: '8', name: 'Ibe hatypo', message: 'nicely done bro! 🤙🏼', time: '29/08/22', sent: true, image: require('@/assets/images/Ibe.png')  },
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
            sent={item.sent}
            image={item.image}
          />
        )}
        contentContainerStyle={styles.flatListContent}
        ListFooterComponent={() => (
          <>
            <FloatingActionButton style={styles.floatingButton} />
            <View style={styles.homeIndicator} />
          </>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatListContent: {
    paddingBottom: 80, // Adjust as needed to make space for the button and indicator
  },
  floatingButton: {
    position: 'absolute',
    bottom: 24, // Adjust this value to position the button correctly
    right: 24,
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