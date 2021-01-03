import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const FlatListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: '11' },
        { name: 'Friend #2', age: '22' },
        { name: 'Friend #3', age: '33' },
        { name: 'Friend #4', age: '44' },
        { name: 'Friend #5', age: '55' },
        { name: 'Friend #6', age: '66' },
        { name: 'Friend #7', age: '77' },
        { name: 'Friend #8', age: '88' },
        { name: 'Friend #9', age: '99' },
    ]

    return (
        <FlatList
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => <Text style={styles.text}>{item.name} - Age {item.age}</Text>}
        />
    )
}

export default FlatListScreen

const styles = StyleSheet.create({
    text: {
        marginVertical: 15,
        textAlign: 'center',
        borderWidth: 1,
    }
})
