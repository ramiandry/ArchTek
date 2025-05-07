import { Redirect } from "expo-router";
import { createContext, useContext, useState } from "react";
import { BottomNavigation, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ModelScreen from "./Model";
import DevisScreen from "./Devis";
import FavorisScreen from "./Favoris";

// Create a context to manage the current route
const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export default function TabsLayout() {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { 
      key: 'model', 
      title: 'Modèles', 
      focusedIcon: props => <MaterialCommunityIcons name="cube" {...props} />,
      unfocusedIcon: props => <MaterialCommunityIcons name="cube-outline" {...props} />
    },
    { 
      key: 'devis', 
      title: 'Devis', 
      focusedIcon: props => <MaterialCommunityIcons name="file-document" {...props} />,
      unfocusedIcon: props => <MaterialCommunityIcons name="file-document-outline" {...props} />
    },
    { 
      key: 'favoris', 
      title: 'Favoris', 
      focusedIcon: props => <MaterialCommunityIcons name="heart" {...props} />,
      unfocusedIcon: props => <MaterialCommunityIcons name="heart-outline" {...props} />
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    model: ModelScreen,
    devis: DevisScreen,
    favoris: FavorisScreen,
  });

  return (
    <NavigationContext.Provider value={{ currentRoute: routes[index].key }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        barStyle={{ height: 60, paddingBottom: 10, marginBottom: 10 }}
        activeColor={theme.colors.primary}
      />
    </NavigationContext.Provider>
  );
}

// Add this redirect at the root to ensure the app opens with tabs
export function RootLayout() {
  return <Redirect href="/model" />;
}