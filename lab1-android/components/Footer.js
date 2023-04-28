import { StyleSheet, Text, View } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
           <Text>Койда Владислав Миколайович; ІПЗк-20-1</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 25,
        backgroundColor: '#D0D0D0',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export default Footer;
