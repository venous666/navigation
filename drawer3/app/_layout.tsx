import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
    <Drawer.Screen
      name="index" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "Home",
        title: "Principal",
      }}
    />
    <Drawer.Screen
      name="telaB" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "telaB",
        drawerItemStyle: { height: 0 },
        title: "Bem-vindo telaB",
      }}
    />
    <Drawer.Screen
      name="telaC" // This is the name of the page and must match the url from root
      options={{
        drawerLabel: "telaC",
        title: "Bem-vindo telaC",
      }}
    />
  </Drawer>
  );
}