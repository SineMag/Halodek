import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
});
