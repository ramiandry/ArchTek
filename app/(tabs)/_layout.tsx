import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="model" 
        options={{
          tabBarLabel: "Modèles",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="devis" 
        options={{
          tabBarLabel: "Devis",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="favoris" 
        options={{
          tabBarLabel: "Favoris",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-circle-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}