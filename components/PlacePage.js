import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { placeAtom } from '../assets/Atom/placeAtom';
import { useRecoilValue } from "recoil";
import { jammu, kashmir, chenab, peer } from '../assets/data';

const PlacePage = () => {
    const place = useRecoilValue(placeAtom);
    const [dest, setDest] = useState({});
    const placeData = {
        'Jammu': jammu,
        'Kashmir': kashmir,
        'Chenab Valley': chenab,
        'Pir Panchal Valley': peer,
    };

    useEffect(() => {
        if (placeData.hasOwnProperty(place)) {
            setDest(placeData[place]);
        }
    }, [place]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{place}</Text>
            <Text style={styles.language}>Language: {dest?.language}</Text>
            <FlatList
                data={dest?.destinations}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                )}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 3,
    },
    itemText: {
        fontSize: 16,
    },
    language: {
        marginVertical: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PlacePage;
