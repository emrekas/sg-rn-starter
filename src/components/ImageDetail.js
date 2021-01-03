import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ImageDetail = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.imageSource} width={200} height={100} style={{ margin: 15, borderWidth: 1, borderColor: 'black' }} />
            <View>
                <Text>{props.title}</Text>
                <Text>Image Score - {props.score}</Text>
            </View>
        </View>
    )
}

export default ImageDetail

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
})
