import React from 'react';
import {SafeAreaView, StyleSheet, View} from "react-native";
import {Calendar} from "react-native-calendars";

function CalendarComponent() {
    return (
        // カレンダーコンポーネントのJSX
        <View style={styles.container}>
            <SafeAreaView>
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
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00F',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CalendarComponent;
