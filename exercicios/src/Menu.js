import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { Inverter, MegaSena } from "./components/Multi";
import Contador from "./components/Contador";
import ParImpar from "./components/ParImpar";
import Plataformas from "./components/Plataformas";
import Simples from "./components/Simples";
import ValidarProps from "./components/ValidarProps";

export default createDrawerNavigator(
  {
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
