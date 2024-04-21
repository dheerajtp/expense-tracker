import { Slot, Stack, Tabs } from "expo-router";
import App from ".";
import { MaterialIcons } from '@expo/vector-icons';

const RootLayout = () => {
   return(
    <Tabs>
        <Tabs.Screen name="index" options={{
            title:"Allocations",
            tabBarIcon:({color,size})=>(
                <MaterialIcons name="account-tree" size={size} color={color} />
            )
        }}/>
        <Tabs.Screen name="accounts" options={{title:"Accounts",tabBarIcon:({size,color})=>(
            <MaterialIcons name="account-balance-wallet" size={size} color={color} />
        )}}/>
    </Tabs>

   ); 
}   

export default RootLayout