import React from "react";
import { createDrawerNavigator } from "react-navigation";
import { Inverter, MegaSena } from "./components/Multi";
import Contador from "./components/Contador";
import ParImpar from "./components/ParImpar";
import Simples from "./components/Simples";

export default createDrawerNavigator(
  {
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
