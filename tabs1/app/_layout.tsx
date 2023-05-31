import { Tabs } from "expo-router";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: "/",
        }}
      />
            <Tabs.Screen
        // Name of the route to hide.
        name="telaB"
        options={{
          // This tab will no longer show up in the tab bar.
          href: "telaB",
        }}
      />
            <Tabs.Screen
        // Name of the route to hide.
        name="telaC"
        options={{
          // This tab will no longer show up in the tab bar.
          href: "telaC",
        }}
      />
    </Tabs>
  );
}