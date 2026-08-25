import React from 'react';
import {SafeAreaView, StyleSheet, View} from "react-native";
import {Calendar} from "react-native-calendars";
import {Theme} from "react-native-calendars/src/types";

// react-native-calendars は実行時に 'stylesheet.calendar.main' のようなフラットキーを参照するが、
// Theme 型は入れ子の stylesheet しか宣言していないためキャストして渡す
const calendarTheme = {
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
} as Theme;

function CalendarComponent() {
    return (
        // カレンダーコンポーネントのJSX
        <View style={styles.container}>
            <SafeAreaView>
                <Calendar
                    style={{
                        height: '80%'
                    }}
                    theme={calendarTheme}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CalendarComponent;
