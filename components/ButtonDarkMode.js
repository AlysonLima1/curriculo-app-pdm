import { useColorScheme } from "react-native";
import { TouchableOpacity, Text } from "react-native";

export default function ButtonDarkMode() {
  const theme = useColorScheme();

  return (
    <TouchableOpacity className="bg-red-700 p-3 rounded-xl mt-4">
      <Text className="text-white text-lg">
        Tema atual: {theme === "dark" ? "Escuro 🌙" : "Claro ☀️"}
      </Text>
    </TouchableOpacity>
  );
}
