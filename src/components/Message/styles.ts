import { StyleSheet } from "react-native";
import Colours from '../../themes/colours';

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  messageBox: {
    borderRadius: 5,
    padding: 10,
  },
  name: {
    color: '#fff',
    fontWeight: "bold",
    marginBottom: 5,
  },
  message: {
    fontSize: 18
  },
  time: {
    alignSelf: "flex-end",
    color: 'grey'
  },
  image: {
    width: '100%',
    height: 200,
    alignSelf: 'flex-end'
  }
});

export default styles;