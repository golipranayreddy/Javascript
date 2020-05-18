import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

export default function Task(props) {
    return (
        <View>
            <Text style={styles.Task}>{props.task.title}</Text>
            <Button title="Remove" onPress={() => props.removeTask(props.task.key)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    Task: {
        padding: 15,
        marginTop: 20,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        fontSize: 19
    }
});