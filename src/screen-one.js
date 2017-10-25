import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';

export default class ScreenOne extends React.Component {

    render() {
        return (
            <KeyboardAvoidingView
                behavior={'padding'}
                keyboardVerticalOffset={80}
                style={{
                    padding: 0,
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'stretch'
                }}>

                <Button title="Screen with scrollView" onPress={() => this.goToScrollScreen()} />
                <Button title="Screen with text" onPress={() => this.goToTextScreen()} />

                <Text>
                    TESTING
                </Text>

                <TextInput />

                <Text>
                    TESTING
                </Text>

            </KeyboardAvoidingView>
        );
    }

    goToScrollScreen() {
        this.props.navigator.push({
            screen: 'example.scroll',
        });
    }

    goToTextScreen() {
        this.props.navigator.push({
            screen: 'example.text',
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});