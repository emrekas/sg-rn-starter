import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [password, setPassword] = useState('');

    return (
        <View>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            <Text>{password}</Text>
            {password.length < 5 ? <Text>Password must be longer than 5 chraracters</Text> : null}
        </View>
    )
}

export default TextScreen

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: '#00000f',
        borderWidth: 1,
        height: 40
    }
})
