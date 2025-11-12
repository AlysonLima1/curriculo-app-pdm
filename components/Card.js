import { View, Text } from "react-native";

export default function Card({ titulo, descricao }) {
  return (
    <View className="bg-zinc-900 p-4 rounded-2xl mt-4">
      <Text className="text-red-500 text-lg font-bold">{titulo}</Text>
      <Text className="text-white mt-2">{descricao}</Text>
    </View>
  );
}
