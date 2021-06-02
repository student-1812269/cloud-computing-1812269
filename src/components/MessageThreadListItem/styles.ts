import { StyleSheet } from "react-native";
import colours from '../../themes/colours';

const styles = StyleSheet.create({
    username: {
        fontFamily: 'roboto-bold',
        fontSize: 14
    },
    lastMessage: {
        fontSize: 12,
        alignSelf: 'flex-end'
    },
    listContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        paddingTop: 16,
        paddingBottom: 16,
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: '#fff',
        borderColor: colours.textColour,
        borderBottomWidth: 0.2
    },
})

export default styles;