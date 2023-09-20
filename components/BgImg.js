import React from 'react';
import {
    Text, View, TextInput, ImageBackground,
    StyleSheet, Dimensions
} from 'react-native';
import { BgImgs } from './BgImages';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;


const BgImg = ({children, img}) => {
    return (
        <View>
            <ImageBackground
                source={BgImgs[img].uri}
                resizeMode="stretch"
                style={styles.img}>
                {children}
            </ImageBackground>
        </View>
    );
};

export default BgImg;

const styles = StyleSheet.create({
    img: {
        height: screenHeight,
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        padding: 10,
    },
});