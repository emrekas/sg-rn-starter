import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}></Text>
        </View>
    )
}

export default BoxScreen

const styles = StyleSheet.create({
    view: {
        borderWidth: 1,
        borderColor: 'black'
    },
    text: {
        borderWidth: 10,
        borderColor: 'red',
        margin: 20,
    }
})
