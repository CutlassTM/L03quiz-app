import React, { useState } from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView } from 'react-native';
import Question from './components/Question';
import Icon from "react-native-vector-icons/FontAwesome6";

export default function App() {
    const [answers, setAnswers] = useState({ question1: null, question2: null, question3: null, question4: null });

    const handleAnswerChange = (question, value) => {
        setAnswers({ ...answers, [question]: value });
    };

    const checkAnswers = () => {
        const correctAnswers = {
            question1: 'Lamborghini',
            question2: 'Audi',
            question3: 'Honda',
            question4: 'Tesla',
        };

        let score = 0;
        Object.keys(correctAnswers).forEach((question) => {
            if (answers[question] === correctAnswers[question]) {
                score += 1;
            }
        });

        Alert.alert(`You got ${score} out of 4 correct!`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titleText}>
                <Icon name="car" size={30} color="#B22222"/> Supercar Quiz
            </Text>

            {/* Render each question with the Question component */}
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
                imageSource={require('./img/audi.jpg')}
                questionText="What car is this?"
                options={[
                    { label: 'Toyota', value: 'Toyota' },
                    { label: 'Nissan', value: 'Nissan' },
                    { label: 'Audi', value: 'Audi' },
                ]}
                onValueChange={(value) => handleAnswerChange('question2', value)}
            />
            <Question
                imageSource={require('./img/honda.jpg')}
                questionText="What car is this?"
                options={[
                    { label: 'Toyota', value: 'Toyota' },
                    { label: 'Honda', value: 'Honda' },
                    { label: 'Nissan', value: 'Nissan' },
                ]}
                onValueChange={(value) => handleAnswerChange('question3', value)}
            />
            <Question
                imageSource={require('./img/tesla.jpg')}
                questionText="What car is this?"
                options={[
                    { label: 'Tesla', value: 'Tesla' },
                    { label: 'BMW', value: 'BMW' },
                    { label: 'Ford', value: 'Ford' },
                ]}
                onValueChange={(value) => handleAnswerChange('question4', value)}
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
        backgroundColor: '#1C1C1C',
        padding: 20,
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#B22222',
        textAlign: 'center',
        marginBottom: 20,
    },
    submitButton: {
        backgroundColor: '#B22222',
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
