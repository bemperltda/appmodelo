import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator} from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
// NVEGAÇÃO POR ABAS
const Tab = createBottomTabNavigator();
// cria a tela TelaInicial screem
function TelaInicialScreen() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
		headerShown: false ,
      tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'Serviços') {
        iconName = focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
      } else if (route.name === 'Produtos') {
        iconName = focused
        //? 'ios-list-box'
        //: 'ios-list';
		? 'alert-circle'
        : 'alert-circle-outline';
      }
return <Ionicons name={iconName} size={size} color={color}     />;
        },
      })}
	  tabBarOptions={{
	  activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
	  /*
	  screenOptions={{
		headerShown: false ,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
		tabBarShowLabel: true,	
	  */
 	    	
		}}
    >

        <Tab.Screen 
		   name="Serviços" 
		   component={ServiçosScreen} 
		/>
        <Tab.Screen name="Produtos" component={ProdutosScreen} />
		
    </Tab.Navigator>
  );
}
// cria a tela notificações
function NotificaçõesScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela de notificações !</Text>
      <Button 
      onPress={() => navigation.goBack()}
      title="Voltar para a tela TelaInicial"
      />
    </View>
  );
}
// NVEGAÇÃO POR BOTÕES
const Stack = createStackNavigator();
// Cria tela principal de serviços
function ServiçosScreen() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Serviços Principal" component={ServiçosDetailsScreen} />
      <Stack.Screen name="Serviços Detalhes" component={Details} />
    </Stack.Navigator>
  );
}
// Tela de Detalhes Serviços
function ServiçosDetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Bem vindo a página de Serviços!
      </Text>
      <Button 
      onPress={() => navigation.navigate('Serviços Detalhes')}
      title="Ir para Detalhes dos Serviços"
      />
    </View>
  );
}
// Tela de Detalhes dos serviços
function Details({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center',  alignItems: 'center' }}>
      <Text>
        Detalhes dos Serviços Aqui!
      </Text>
	  <Button 
      onPress={() => navigation.navigate('Serviços Principal')}
      title="Ir para Tela Inicial dos Serviços"
      />
    </View>
  );
}
// Tela de Produtos
function ProdutosScreen() {
  return (
    <View>
      <Text style={{textAlign: 'center', marginTop: 300}}>
        Bem vindo a página de Produtos!
      </Text>
    </View>
  );
}
//navegação drawer icone a esquerda da tela lado superior
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Tela Inicial">
        <Drawer.Screen name="Tela Inicial" component={TelaInicialScreen} />
        <Drawer.Screen name="Notificações" component={NotificaçõesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}