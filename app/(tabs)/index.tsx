import ChatListItem from "@/components/ui/ChatListItem";
import FloatingActionButton from "@/components/ui/FloatingActionButton";
import Header from "@/components/ui/Header";
import TabBar from "@/components/ui/TabBar";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const chatData = [
  {
    id: "1",
    name: "Faza Dzikrulloh",
    message: "Typing...",
    time: "14:30",
    image: require("@/assets/images/Faza.png"),
    avatarBg: "#B5D0DE",
  },
  {
    id: "2",
    name: "Hatypo Studio",
    message: "Faza Can you help me to do with new project...",
    time: "14:30",
    unreadCount: 3,
    image: require("@/assets/images/Hatypo Studio.png"),
    avatarSize: 58,
  },
  {
    id: "3",
    name: "Zhofran A",
    message: "I think we should upgrade the social media...",
    time: "14:00",
    unreadCount: 2,
    image: require("@/assets/images/Zhofran.png"),
    avatarBg: "#C8C0DE",
  },
  {
    id: "4",
    name: "Vito Arvy",
    message: "Okay adhit, I'll tel faza about it 👍🏼 ",
    time: "13:40",
    image: require("@/assets/images/Vito.png"),
    avatarBg: "#F0C1CD",
  },
  {
    id: "5",
    name: "Raul",
    message: "Thanks Raul! 🙏🏼✨",
    time: "Yesterday",
    sent: true,
    image: require("@/assets/images/Raul.png"),
    avatarBg: "#F2D0A3",
  },
  {
    id: "6",
    name: "Farhan Bagas",
    message: "Great work farhan! 👍🏼 I'll tell faza about logo...",
    time: "29/08/22",
    sent: true,
    image: require("@/assets/images/Farhan.png"),
    avatarBg: "#B0D1E3",
  },
  {
    id: "7",
    name: "Abdull",
    message: "Perfecto!🔥 I will check it later",
    time: "29/08/22",
    sent: true,
    image: require("@/assets/images/Abdull.png"),
    avatarBg: "#B2D8BB",
  },
  {
    id: "8",
    name: "Ibe hatypo",
    message: "nicely done bro! 🤙🏼",
    time: "29/08/22",
    sent: true,
    image: require("@/assets/images/Ibe.png"),
    avatarBg: "#E6D39C",
  },
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
            avatarBg={item.avatarBg}
            avatarSize={item.avatarSize}
            isTyping={item.message === "Typing..."}
          />
        )}
        scrollEnabled={false}
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
    backgroundColor: "#fff",
  },
  flatListContent: {
    paddingBottom: 80,
  },
  floatingButton: {
    position: "absolute",
    bottom: 17, 
    right: 20,
  },
  homeIndicator: {
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
    width: 134,
    height: 5,
    borderRadius: 100,
    backgroundColor: "#333",
  },
});
