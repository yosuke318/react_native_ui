import CalendarComponent from "./components/CalendarComponent";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Button} from 'react-native';


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Calendar" component={CalendarComponent}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export const HomeScreen = ({navigation}) => {
    return (
        <View>
            {/* ボタンを押して画面遷移 */}
            <Button title="カレンダー" onPress={() => navigation.navigate('Calendar')} />
        </View>
    );
}
