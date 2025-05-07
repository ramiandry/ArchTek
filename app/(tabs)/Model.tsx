// app/(tabs)/model.js
import { View, Text, StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/MaterialIcons';
import { Avatar } from 'react-native-paper';

export default function ModelScreen() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>Good Morning</Text>
          <Text style={styles.title}>Aina Fanatenana</Text>
        </View>
        <View>
        <Avatar.Icon size={24} icon="folder" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});