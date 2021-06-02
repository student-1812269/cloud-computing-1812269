import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colours from '../../themes/colours';
import { signOut } from '../../signOut';
import colours from '../../themes/colours';

const Header = (props: any) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
            <Button
            onPress={signOut}
            title="Sign out"
            color={colours.primaryColour}
            accessibilityLabel="Sign out"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 70,
        backgroundColor: Colours.tertiaryColour,
        marginTop: 35,
        flexDirection: 'row'
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'roboto-bold',
        marginRight: 16
    }
})

export default Header;