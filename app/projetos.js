import { View, Text } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";

export default function Projetos() {
  return (
    <View className="flex-1 bg-black p-5">
      <Header title="Projetos" />
      <Card
        titulo="SwiftChat"
        descricao="CRUD em Back4App com login, chat em tempo real e páginas de contato e sobre nós."
      />
      <Card
        titulo="FoodXpress"
        descricao="App de delivery online desenvolvido com Node.js e React."
      />
    </View>
  );
}
