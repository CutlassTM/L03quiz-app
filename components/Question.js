import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Question = ({ imageSource, questionText, options, onValueChange }) => {
    return (
        <View style={styles.questionContainer}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.questionText}>{questionText}</Text>
            <RNPickerSelect
                onValueChange={onValueChange}
                items={options}
                style={pickerSelectStyles}
                placeholder={{ label: 'Select an answer...', value: null }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    questionContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        marginBottom: 10,
        width: 200,
        textAlign: 'center',
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30,
        marginBottom: 10,
        width: 200,
        textAlign: 'center',
    },
});

export default Question;
