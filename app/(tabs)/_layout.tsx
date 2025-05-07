import { Tabs } from "expo-router";
import { useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabsLayout() {
  const theme = useTheme();
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          // Assurez-vous que le style ne cause pas de problèmes de rendu
          elevation: 0,
          height: 60,
          paddingBottom: 10,
        }
      }}
    >
      <Tabs.Screen
        name="model"
        options={{
          title: "Modèles",
          tabBarLabel: "Modèles",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cube-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="devis"
        options={{
          title: "Devis",
          tabBarLabel: "Devis",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-document-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favoris"
        options={{
          title: "Favoris",
          tabBarLabel: "Favoris",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}