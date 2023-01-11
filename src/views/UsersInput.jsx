import React, { Component, useEffect, useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        color: 'black'
    },
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 30
    }
});

const UsersInput = (props) => {
    const [text, setText] = useState("");
    const [isDisabledPrevious, setIsDisabledPrevious] = useState(false)
    const [isDisabledNext, setIsDisabledNext] = useState(false)

    useEffect(() => {
        if (text == "1" || text == "" || isNaN(text)) {
            setIsDisabledPrevious(true)
        } else {
            setIsDisabledPrevious(false)
        }
        if (text == "10" || text == "" || isNaN(text)) {
            setIsDisabledNext(true)
        } else {
            setIsDisabledNext(false)
        }
    }, [text])
    
    return (
        <>
            <Text style={styles.text}>Recherche d'un utlisateur</Text>
            <View style={styles.input}>
                <Button style= {{ flex: 1 }}
                    disabled={isDisabledPrevious}
                    title='<'
                    onPress={() => {
                        setText((prev) => parseInt(prev, 10) - 1)
                        props.handlerId(parseInt(text, 10) - 1)
                    }}></Button>
                <TextInput style= {{ flex: 1, textAlign: 'center', backgroundColor: "lightgrey" }}
                    onChangeText={(v) => {
                        setText(v)
                        props.handlerId(v)
                    }}
                    value={text.toString()}
                ></TextInput>
                <Button style= {{ flex: 1 }}
                    disabled={isDisabledNext}
                    title='>'
                    onPress={() => {
                        setText((prev) => parseInt(prev, 10) + 1)
                        props.handlerId(parseInt(text, 10) + 1)
                    }}></Button>
            </View>
        </>
    );
}

export default UsersInput;