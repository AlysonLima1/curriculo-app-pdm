import { View, Text, ScrollView } from "react-native";
import Header from "../components/Header";

export default function Sobre() {
  return (
    <ScrollView className="flex-1 bg-black p-5">
      <Header title="Sobre Mim" />
      <Text className="text-white text-base mt-4">
        Olá! Sou <Text className="text-red-500 font-bold">Alyson Lima</Text>, estudante do 4º período do curso de
        Sistemas para Internet na UNICAP. Tenho excelente desempenho acadêmico e participei
        de projetos integradores e residências tecnológicas nos períodos 2º, 3º e 4º.
      </Text>

      <Text className="text-white text-base mt-4">
        Atualmente, atuo como estagiário de suporte de TI na empresa
        <Text className="text-red-500 font-bold"> Auto Norte</Text>, onde desenvolvo habilidades em manutenção,
        atendimento técnico e infraestrutura de redes.
      </Text>

      <Text className="text-white text-base mt-4">
        Tecnologias utilizadas neste App: React Native, Expo Router e Tailwind CSS.
        Funcionalidade extra: modo escuro dinâmico.
      </Text>
    </ScrollView>
  );
}
