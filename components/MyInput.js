import {
    View,
    Button,
    TextInput,
    Modal,
    StyleSheet,
    Image,
} from "react-native";
import React from "react";
import { useState } from "react";
import { COLORS } from "../helper";

export default function MyInput({ onAdd, modal, onCancel, text, setText, header }) {
    

    return (
        <>
            <TextInput
                style={styles.input}
                // keyboardType='numeric'
                value={text}
                onChangeText={(newText) => {
                    setText(newText);
                }}
                placeholder={header}
                // maxLength={4}
            />

        </>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        color: COLORS.BLUE,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.YELLOW,
        // borderBottomStyle:'solid'
        margin: 5,
        fontSize:20
    },
    button: {
        margin: 5,
        width: '30%'
    },
    image: {
        width: 100,
        height: 100,
    },
    buttonsContainer:
    {
        flexDirection: 'row'
    }
});