import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {Calendar} from "react-native-calendars";

export default function App() {
    return (
        <View style={styles.container}>


                <Calendar
                    style={{
                        height: '100%'
                    }}
                    theme={{
                        'stylesheet.calendar.main': {
                            monthView: {
                                flex: 1,
                                height: '100%',
                                justifyContent: 'space-around'
                            },
                            week: {
                                flex: 1,
                                marginVertical: 0,
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            },
                            dayContainer: {
                                borderColor: '#f5f5f5',
                                borderWidth: 1,
                                flex: 1,
                            },
                        }
                    }}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
