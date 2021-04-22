import React from 'react';

import {View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import {Feather} from '@expo/vector-icons';

export function Welcome () {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
            <Text style={styles.title}>
                Gerencie {'\n'} 
                suas plantas de {'\n'} 
                 forma fácil
            </Text>
            <Image 
                source={wateringImg} 
                style={styles.image}
                resizeMode="contain"
            />
            <Text style={styles.subtitle}>
                Não esqueca de regar suas plantas. Nós cuidamos de lembrar sempre que precisar.
            </Text>
            <TouchableOpacity 
                style={styles.button} 
                activeOpacity={0.7}>
                    <Feather name="chevron-right" style={styles.buttonIcon}/>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const barHeight = getStatusBarHeight();
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: barHeight
    },
    wrapper: {
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38,
        fontFamily: fonts.heading,
        lineHeight: 34,
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginTop: 20,
        marginBottom: 10,
        height: 56,
        width: 56,
    },
    image: {
        height: Dimensions.get('window').width * 0.7,
    },
    buttonIcon: {
        color: colors.white,
        fontSize: 24
    }
})