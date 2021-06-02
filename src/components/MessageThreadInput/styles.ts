import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colours from "../../themes/colours";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        margin: 8
    },
    inputContainer: {
        flexDirection: 'row',
        flex: 1,
        padding: 16,
        margin: 16,
        borderRadius: 50,
        backgroundColor: "#ffffff"
    },
    input: {
        flex: 1
    },
    cameraButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: colours.primaryColour
    },
    sendButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: colours.primaryColour
    },
    sendButtonDisabled: {
        opacity: 0.2
    },
    previewImage: {
        width: 150,
        height: 150,
        alignSelf: 'flex-end',
        opacity: 0.5
    },
    previewImageText: {
        alignSelf: 'flex-end',
        marginRight: 8
    }
})

export default styles;