import React, {useState} from 'react';
import {View, Text, ScrollView, Button, Alert, StyleSheet} from 'react-native';
import FruitBox from "./components/FruitBox";

const FruitQuiz = () => {
    const [q1, setQ1] = useState('Lemon');
    const [q2, setQ2] = useState('Grapes');
    const [q3, setQ3] = useState('Pineapple');

    const handleSubmit = () => {
        let score = 0;

        if (q1 === 'Lemon') {
            score = score + 1;
        }
        if (q2 === 'Grapes') {
            score = score + 1;
        }
        if (q3 === 'Pineapple') {
            score = score + 1;
        }

        Alert.alert("You have " + score + " correct answers!");
    };
    return (
        <ScrollView>
            <Text style={styles.titleText}>Fruit Quiz</Text>

            <FruitBox
                icon_name={"fruit-citrus"}
                picture={{uri: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=500'}}
                selectedValue={q1}
                onValueChange={(value) => setQ1(value)}

                opt1="Lemon"
                opt2="Apple"
                opt3="Orange"
            />
            <FruitBox
                icon_name={"fruit-grapes"}
                picture={{uri: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500'}}
                selectedValue={q2}
                onValueChange={(value) => setQ2(value)}

                opt1="Grapes"
                opt2="Banana"
                opt3="Strawberry"
            />
            <FruitBox
                icon_name={"fruit-pineapple"}
                picture={{uri: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500'}}
                selectedValue={q3}
                onValueChange={(value) => setQ3(value)}

                opt1="Pineapple"
                opt2="Watermelon"
                opt3="Mango"
            />

            <Text></Text>
            <Button title="SUBMIT ANSWERS" onPress={handleSubmit} color="pink"/>
            <Text></Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 32,
        textAlign: 'center',
        backgroundColor: 'pink',
        paddingVertical: 15,
        marginVertical: 10,
        fontWeight: 'bold',
    },
})

export default FruitQuiz;