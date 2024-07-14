import CalendarComponent from "./components/CalendarComponent";
import DialogComponent from "./components/DialogComponent";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Button} from 'react-native';
import TodoList from "./components/TodoList";


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Calendar" component={CalendarComponent}/>
                <Stack.Screen name="Dialog" component={DialogComponent}/>
                <Stack.Screen name="TodoList" component={TodoList}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export const HomeScreen = ({navigation}) => {
    return (
        <View>
            {/* ボタンを押して画面遷移 */}
            <Button title="カレンダー" onPress={() => navigation.navigate('Calendar')} />
            <Button title="ダイアログ" onPress={() => navigation.navigate('Dialog')} />
            <Button title="TodoList" onPress={() => navigation.navigate('TodoList')} />
        </View>
    );
}
