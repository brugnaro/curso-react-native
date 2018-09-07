import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { Inverter, MegaSena } from "./components/Multi";
import Contador from "./components/Contador";
import ParImpar from "./components/ParImpar";
import Plataformas from "./components/Plataformas";
import Simples from "./components/Simples";
import ValidarProps from "./components/ValidarProps";
import Evento from "./components/Evento";
import Avo from "./components/ComunicacaoDireta";
import TextoSincronizado from "./components/ComunicacaoIndireta";
import ListaFlex from "./components/ListaFlex";
import Flex from "./components/Flex";

export default createDrawerNavigator(
  {
    Flex: {
      screen: Flex
    },
    ListaFlex: {
      screen: ListaFlex,
      navigationOptions: { title: "Lista (Flex Box)" }
    },
    TextoSincronizado: {
      screen: TextoSincronizado,
      navigationOptions: { title: "TextoSincronizado" }
    },
    Avo: {
      screen: () => <Avo nome="Joao" sobrenome="Silva" />
    },
    Evento: {
      screen: Evento
    },
    ValidarProps: {
      screen: () => <ValidarProps ano={10} />
    },
    Plataformas: {
      screen: Plataformas
    },
    Contador: {
      screen: () => <Contador numeroInicial={100000} />
    },
    MegaSena: {
      screen: () => <MegaSena numeros={8} />,
      navigationOptions: { title: "Mega Sena" }
    },
    Inverter: {
      screen: () => <Inverter texto="React Nativo!" />
    },
    ParImpar: {
      screen: () => <ParImpar numero={30} />,
      navigationOptions: { title: "Par e Impar" }
    },
    Simples: {
      screen: () => <Simples text="Flexível" />
    }
  },
  { drawerWidth: 300 }
);
