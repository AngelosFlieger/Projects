import React from "react";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function AppLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Ensure the main index screen is the default route */}
        <Stack.Screen name="TabNavigator" />
      </Stack>
    </GestureHandlerRootView>
  );
}
