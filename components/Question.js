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
        backgroundColor: '#333333',
        padding: 15,
    },
    image: {
        width: 250,
        height: 150,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 10,
    },
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#B22222',
        color: '#FFFFFF',
        paddingRight: 30,
        width: 200,
        textAlign: 'center',
        backgroundColor: '#2D2D2D',
        marginBottom: 10,
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#B22222',
        color: '#FFFFFF',
        paddingRight: 30,
        width: 200,
        textAlign: 'center',
        backgroundColor: '#2D2D2D',
        marginBottom: 10,
    },
});

export default Question;
