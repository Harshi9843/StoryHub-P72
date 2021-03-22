import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Coming Soon </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },

    text:{
        paddingTop: 300,
        fontSize: 50
    }
})