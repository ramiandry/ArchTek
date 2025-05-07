import { Stack } from "expo-router";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  
  // Vous pouvez personnaliser le thème selon vos besoins
  const theme = {
    ...MD3LightTheme,
    // Personnalisez les couleurs, les polices, etc.
    colors: {
      ...MD3LightTheme.colors,
      primary: '#2196F3',
      secondary: '#03DAC6',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}