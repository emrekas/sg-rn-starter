import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" score="2" imageSource={require('../../assets/forest.jpg')} />
            <ImageDetail title="Mountain" score="23" imageSource={require('../../assets/mountain.jpg')} />
            <ImageDetail title="Beach" score="51231" imageSource={require('../../assets/beach.jpg')} />
        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({})
