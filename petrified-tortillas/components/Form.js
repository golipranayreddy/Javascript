import * as React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';


export default function Form(props) {
    const [input, setInput] = React.useState('');
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='Please enter your task' 
            onChangeText={(text) => setInput(text)} 
            defaultValue={input}/>
            <Button style={styles.Button} title="Add task" onPress={() => props.newTask(input)}/>
        </View>
    );
}

export function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>To-Do Appliation (React Native)</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Button: {
        borderBottomColor: '#ddd'
    },
    input: {
        marginBottom: 10,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },

    header: {
      height: 80,
      paddingTop: 20,
      backgroundColor: '#4e4f57'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})