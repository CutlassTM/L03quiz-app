import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Question from './components/Question'; // Updated import statement
import Icon from "react-native-vector-icons/FontAwesome6";

export default function App() {
    const [answers, setAnswers] = useState({ question1: null, question2: null, question3: null });

    const handleAnswerChange = (question, value) => {
        setAnswers({ ...answers, [question]: value });
    };

    const checkAnswers = () => {
        const correctAnswers = {
            question1: 'Lamborghini',
            question2: 'Honda',
            question3: 'Civic',
        };

        let score = 0;
        Object.keys(correctAnswers).forEach((question) => {
            if (answers[question] === correctAnswers[question]) {
                score += 1;
            }
        });

        Alert.alert(`You got ${score} out of 3 correct!`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titleText}>
                <Icon name="car" size={30} color="#B23B23"/>Supercar
            </Text>

            {/* Use the Question component for each question */}
            <Question
                imageSource={require('./img/lambo.jpg')}
                questionText="What car is this?"
                options={[
                    { label: 'Lamborghini', value: 'Lamborghini' },
                    { label: 'Ferrari', value: 'Ferrari' },
                    { label: 'Porsche', value: 'Porsche' },
                ]}
                onValueChange={(value) => handleAnswerChange('question1', value)}
            />
            <Question
                imageSource={require('./img/honda.jpg')}
                questionText="What car is this?"
                options={[
                    { label: 'Honda', value: 'Honda' },
                    { label: 'Toyota', value: 'Toyota' },
                    { label: 'Nissan', value: 'Nissan' },
                ]}
                onValueChange={(value) => handleAnswerChange('question2', value)}
            />
            <Question
                imageSource={require('./img/civic.jpg')}
                questionText="What car is this?"
                options={[
                    { label: 'Civic', value: 'Civic' },
                    { label: 'Accord', value: 'Accord' },
                    { label: 'Corolla', value: 'Corolla' },
                ]}
                onValueChange={(value) => handleAnswerChange('question3', value)}
            />

            <TouchableOpacity onPress={checkAnswers} style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit Answers</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleText: {
        paddingLeft: 30,
        fontSize: 30,
        fontWeight: 'bold',
    },
});
