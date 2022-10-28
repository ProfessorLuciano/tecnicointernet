import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import Inicio from '../Inicio'
import Destaques from '../Destaques'
import Cinemas from '../Cinemas'
import TopRated from '../Top'

const Drawer = createDrawerNavigator()


export default function Dashboard(){
    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator initialRouteName='Inicio'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000000'
                },
                headerTintColor: '#FFFFFF',
                //headerTitle: 'Menu  -  Sinopse de Filmes',
                //drawerActiveBackgroundColor: '#ffffff',
                drawerActiveTintColor: '#000000',
                drawerHideStatusBarOnOpen: false,
                
                drawerLabelStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    borderRadius: 80
                },
                drawerStyle: {
                    backgroundColor: '#000000',
                    width: 280,
                  },
            }}

            >
                <Drawer.Screen 
                name='Início'
                component={Inicio}                
                />

                <Drawer.Screen 
                name='Mais Populares'
                component={Destaques}
                />
                
                <Drawer.Screen 
                name='Cartaz em Cinemas'
                component={Cinemas}
                />

                <Drawer.Screen 
                name='Top Filmes'
                component={TopRated}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}