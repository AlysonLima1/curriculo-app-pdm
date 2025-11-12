import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Header from "../components/Header";
import ButtonDarkMode from "../components/ButtonDarkMode";

export default function Home() {
  return (
    <View className="flex-1 bg-black items-center justify-center px-6">
      <Header title="Portfólio - Alyson Lima" />
      <Image source={require("../assets/profile.png")} className="w-32 h-32 rounded-full my-4" />
      <Text className="text-white text-xl mb-4 text-center">
        Estudante de Sistemas para Internet (UNICAP)
      </Text>
      <ButtonDarkMode />

      <Link href="/sobre" asChild>
        <TouchableOpacity className="bg-red-600 p-3 rounded-xl mt-6">
          <Text className="text-white text-lg">Entrar no Portfólio</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
