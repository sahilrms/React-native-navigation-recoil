import React from 'react';
import { Button, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRecoilState } from "recoil";
import { placeAtom } from '../assets/Atom/placeAtom';

const Card = ({ navigation, title, description, img }) => {
    const [_, setPlaceAtom] = useRecoilState(placeAtom);

    const onPressLearnMore = () => {
        setPlaceAtom(title);
        navigation.navigate('Place');
    };

    return (
        <TouchableOpacity style={styles.card} onPress={onPressLearnMore}>
            <Image source={img} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <Button
                onPress={onPressLearnMore}
                title={`Check ${title}`}
                color="#00bcd4"
            />
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        width: "45%",
        padding: 10,
        marginHorizontal: 5,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: "100%",
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    content: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: 'gray',
    },
});
