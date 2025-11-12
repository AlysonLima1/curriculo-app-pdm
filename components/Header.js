import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Header({ title }) {
  return (
    <View className="w-full flex-row justify-between items-center pb-4 border-b border-gray-700">
      <Text className="text-red-500 text-2xl font-bold">{title}</Text>
      <Link href="/" className="text-white">Home</Link>
    </View>
  );
}
