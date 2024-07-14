import {Button, View} from "react-native";
import React, {useState} from 'react';
import {Dialog} from "react-native-simple-dialogs";

function DialogComponent() {
    const [visible, setVisible] = useState(false);
    return (

        <View>
            {/* ダイアログを表示するボタン */}
            <Button title="ダイアログ確認ボタン" onPress={() => setVisible(true)} />

            {/* ダイアログ */}
            <Dialog
                visible={visible}
                title="ダイアログです！"
                onTouchOutside={() => setVisible(false)}
            >
                {/* ダイアログ内の内容 */}
                <View>
                    {/* ダイアログの中身 */}
                </View>
            </Dialog>
        </View>
    );
}

export default DialogComponent;