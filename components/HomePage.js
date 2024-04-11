import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const HomePage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.pageText}>Travel Guide to Jammu and Kashmir</Text>
                <View style={styles.cards}>
                    <Card navigation={navigation} title={'Jammu'} description={'About Jammu'} img={require('../assets/images/jmu.jpg')} />
                    <Card navigation={navigation} title={'Kashmir'} description={'About Kashmir'} img={require('../assets/images/kmr.jpg')} />
                    <Card navigation={navigation} title={'Chenab Valley'} description={'About Chenab Valley'} img={require('../assets/images/chenabValley.jpg')} />
                    <Card navigation={navigation} title={'Pir Panchal Valley'} description={'About Pir Panchal Valley'} img={require('../assets/images/mugalroad.jpeg')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HomePage;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#e0e0e0",
    },
    scrollView: {
        flexGrow: 1,
    },
    pageText: {
        color: "#333333",
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        marginTop: 20,
        textAlign: 'center',
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
        padding: 5,
    },
});
