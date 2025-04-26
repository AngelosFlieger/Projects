import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
import EventListingScreen from "./viewEvents";
import TicketsScreen from "./viewTickets";
import UserInfoScreen from "./viewUserInfo";
import SearchResultsScreen from "./SearchResultsScreen";
import EventDetailScreen from "./EventDetailScreen";

// ✅ Import custom SVG icons
import { HomeIcon, TicketIcon, ProfileIcon } from "./components/Icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// ✅ Stack for the "Home" section (includes search results)
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={EventListingScreen} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} />
      <Stack.Screen name="EventDetailScreen" component={EventDetailScreen} />
    </Stack.Navigator>
  );
};

// ✅ Function to render icons dynamically
const TabIcon = ({
  Icon,
  color,
}: {
  Icon: React.FC<{ color: string }>;
  color: string;
}) => (
  <View style={styles.iconContainer}>
    <Icon color={color} />
  </View>
);

// ✅ Main bottom tab navigator
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarActiveTintColor: "#CAFD00",
        tabBarInactiveTintColor: "#CECECE",
        tabBarIcon: ({ color }) => {
          let IconComponent;
          if (route.name === "Home") IconComponent = HomeIcon;
          else if (route.name === "Tickets") IconComponent = TicketIcon;
          else if (route.name === "Profile") IconComponent = ProfileIcon;
          return <TabIcon Icon={IconComponent} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Tickets" component={TicketsScreen} />
      <Tab.Screen name="Profile" component={UserInfoScreen} />
    </Tab.Navigator>
  );
};

// ✅ Custom Styles
const styles = StyleSheet.create({
  tabBar: {
    height: 82,
    backgroundColor: "#171717",
    borderTopWidth: 0, // ✅ Remove top border
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginBottom: 10, // ✅ Spacing from icon
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10, // ✅ Position the icon correctly
    marginBottom: 8,
  },
});

export default TabNavigator;
