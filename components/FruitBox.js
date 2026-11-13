import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: 'grey',
        borderWidth: 2,
        borderColor: 'black',
        marginHorizontal: 20,
        marginVertical: 10,
    },
    imageStyle: {
        width: '100%',
        height: 250,
        marginBottom: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        marginBottom: 10,
        paddingVertical: 10
    },
    textStyle: {
        fontSize: 18,
        color: 'black',
        fontStyle: 'italic',
    },
    pickerStyle: {
        backgroundColor: 'lightgrey',
        marginTop: 5,
    },
});

const FruitBox = ({icon_name, picture, selectedValue, onValueChange, opt1, opt2, opt3}) => {
    return (
        <View style={styles.boxContainer}>
            <View style={styles.rowContainer}>
                <MaterialCommunityIcons name={icon_name} size={30} color="black"/>
                <Text style={styles.textStyle}> What fruit is this?</Text>
            </View>

            <Image source={picture} style={styles.imageStyle}/>

            <Picker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={styles.pickerStyle}
            >
                <Picker.Item label={opt1} value={opt1}/>
                <Picker.Item label={opt2} value={opt2}/>
                <Picker.Item label={opt3} value={opt3}/>
            </Picker>
        </View>
    );
}
export default FruitBox;