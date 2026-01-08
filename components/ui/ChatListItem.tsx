import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/theme';

type Props = {
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  sent?: boolean;
  image: any; // Can be a remote URI or a local file resource.
  isTyping?: boolean;
};

const ChatListItem = ({ name, message, time, unreadCount, sent, image, isTyping }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.avatar} />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.row}>
          {name === 'Hatypo Studio' && message.startsWith('Faza') && !isTyping ? (
            <Text style={styles.message} numberOfLines={1}>
              <Text style={{ color: Colors.light.activeButton }}>Faza</Text>
              {message.substring(4)}
            </Text>
          ) : (
            <Text style={[styles.message, isTyping && styles.typingText]} numberOfLines={1}>
              {message}
            </Text>
          )}
          {unreadCount && unreadCount > 0 ? (
            <View style={styles.unreadContainer}>
              <Text style={styles.unreadText}>{unreadCount}</Text>
            </View>
          ) : sent && (
            <Ionicons name="checkmark-done" size={20} color={Colors.light.brand} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: Colors.light.icon,
  },
  message: {
    fontSize: 14,
    color: Colors.light.icon,
    maxWidth: '90%',
  },
  typingText: {
    color: Colors.light.activeButton,
  },
  unreadContainer: {
    backgroundColor: Colors.light.brand,
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  unreadText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ChatListItem;


