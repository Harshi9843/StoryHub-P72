import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ToastAndroid} from 'react-native';
import {Header} from 'react-native-elements'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as firebase from 'firebase';
import db from '../config.js';


export default class WriteStoryScreen extends React.Component{

    constructor(){
        super();

        this.state={
            authorData: "",
            storyTitleData: "",
            storyData: ""
        }
    }

    submitStory  = async () =>{

        var message
        db.collection("story").add({
            'Story': this.state.storyData,
            'author': this.state.authorData,
            'storyTitle': this.state.storyTitleData
        })

        message = "Your story has been submitted"
        ToastAndroid.show(message, ToastAndroid.SHORT);

        this.setState({
            storyData: '',
            storyTitleData: '',
            authorData: ''  
        })
    }

    render(){
        return(
            <SafeAreaProvider>
                <KeyboardAvoidingView style = {styles.container} behaviour = "padding" enabled>
                    <Header 
                    backgroundColor = {'pink'}
                    centerComponent = {{text: 'Story Hub', style: styles.header}} />

                    <TextInput
                    style = {styles.inputBox}
                    placeholder = "Story Title"
                    onChangeText= {(text)=>{
                        this.setState({
                            storyTitleData: text
                        })
                    }}
                    />

                    <TextInput 
                    style = {styles.inputBox} 
                    placeholder = "Author"
                    onChangeText = {(text) => {
                        this.setState({
                            authorData: text
                        })
                    }}
                    />

                    <TextInput
                    style = {styles.storyBox}
                    placeholder = "Write your story"
                    onChangeText={(text)=>{
                        this.setState({
                            storyData: text
                        })
                    }}
                    />
                    

                    <TouchableOpacity style = {styles.button}
                    onPress={this.submitStory}>
                        <Text style = {styles.text}>Submit </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        
    },

    inputBox:{
        width: 400,
        height: 50,
        borderColor: 'black',
        borderWidth: 3,
        alignSelf: 'center',
        marginTop: 20
    },

    storyBox:{
        marginTop: 30,
        borderWidth: 3,
        marginLeft: 8,
        width: 400,
        height: 300
    },

    header:{
        height: 70,
        alignContent: 'center',
        paddingTop: 20,
        paddingRight: 25,
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft:10
    },

    button:{
        marginTop: 30,
        marginLeft: 160,
        backgroundColor: 'pink',
        width: 100,
        height: 35,
        alignItems: 'center'
    },
    
    text:{
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold'
    }
})