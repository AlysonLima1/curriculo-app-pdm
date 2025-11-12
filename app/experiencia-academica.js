import { View, Text } from "react-native";
import Header from "../components/Header";

export default function ExperienciaAcademica() {
  return (
    <View className="flex-1 bg-black p-5">
      <Header title="Experiência Acadêmica" />
      <Text className="text-white mt-4">
        - 4º período em Sistemas para Internet - UNICAP {"\n"}
        - Participação em projetos integradores {"\n"}
        - Residência tecnológica do 2º ao 4º período {"\n"}
        - Excelente desempenho acadêmico em todas as disciplinas
      </Text>
    </View>
  );
}
