import React, {useEffect, useState}from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

import UserImg from '../assets/avatar.png';
import colors from '../styles/colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header () {

    const [userName, setUsername] = useState<string>();

    useEffect(() => {

        async function loadStorageUsername() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            setUsername(user || '');
        }
        loadStorageUsername();
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greetings} >Olá, </Text>
                <Text style={styles.userName} >{userName}</Text>
            </View>
            <Image source={UserImg} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greetings: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})