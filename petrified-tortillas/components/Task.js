import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

export default function Task(props) {
    return (
        <View>
            <Text style={styles.Task}>{props.task.title} {props.task.addedDate} </Text>
            <Button title="Remove Task" onPress={() => props.removeTask(props.task.key)}/>
        </View>
    );
}


const styles = StyleSheet.create({
    Task: {
        padding: 17,
        marginTop: 22,
        borderColor: 'black',
        borderWidth: 4,
        borderStyle: 'solid',
        borderRadius: 13,
        fontSize: 21
    }
 
});