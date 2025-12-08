import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import ButtonCard from "@/components/ui/ButtonCard";


export default function Home() {
  return (
    <View style={styles.container}>
      <ButtonCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#fdfdfd",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },
});
