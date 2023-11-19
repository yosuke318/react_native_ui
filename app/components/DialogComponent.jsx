import {SafeAreaView, View} from "react-native";
import React from 'react';
import {Dialog} from "react-native-simple-dialogs";

function DialogComponent() {
    return (

        <View>
                <Dialog.Container>
                    <Dialog.Title>Account delete</Dialog.Title>
                    <Dialog.Description>
                        Do you want to delete this account? You cannot undo this action.
                    </Dialog.Description>
                    <Dialog.Button label="cancel"/>
                    <Dialog.Button label="Delete"/>
                </Dialog.Container>

        </View>
    );
}

export default DialogComponent;