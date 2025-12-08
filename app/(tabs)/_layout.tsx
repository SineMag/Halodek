import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "HALODEK", headerTitleStyle: styles.heading }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "#E25D1F",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
});
