import { View, Text } from "react-native";
import Header from "../components/Header";

export default function ExperienciaProfissional() {
  return (
    <View className="flex-1 bg-black p-5">
      <Header title="Experiência Profissional" />
      <Text className="text-white mt-4">
        Estagiário de Suporte de TI - Auto Norte {"\n"}
        - Suporte técnico a usuários {"\n"}
        - Manutenção de computadores e redes {"\n"}
        - Apoio em infraestrutura e documentação
      </Text>
    </View>
  );
}
