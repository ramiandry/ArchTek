import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Index" />
    <Stack.Screen name="Model" />
    <Stack.Screen name="Devis" />
    <Stack.Screen name="Favoris" />
  </Stack>
  )
}
