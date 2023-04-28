import { StyleSheet, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const Routes = () => {
    const navigation = useNavigation();
    const [bool1, setBool1] = useState(true);
    const [bool2, setBool2] = useState(false);
    const [bool3, setBool3] = useState(false);

    const handlePress1 = () => {
        setBool1(true)
        setBool2(false)
        setBool3(false)
        navigation.navigate("Musics")
    }
    const handlePress2 = () => {
        setBool1(false)
        setBool2(true)
        setBool3(false)
        navigation.navigate("Pictures")
    }
    const handlePress3 = () => {
        setBool1(false)
        setBool2(false)
        setBool3(true)
        navigation.navigate("Register")
    }
    return (
        <View style={styles.container}>
            <View style={styles.customButton}>
                <Image style={{ marginBottom: 3 }} source={require('../assets/Music.png')}></Image>
                <Button title="Музика" onPress={handlePress1} disabled={bool1}></Button>
            </View>
            <View style={styles.customButton}>
                <Image style={{ marginBottom: 3 }} source={require('../assets/Pictures.png')}></Image>
                <Button title="Картинки" onPress={handlePress2} disabled={bool2}></Button>
            </View>
            <View style={styles.customButton}>
                <Image style={{ marginBottom: 3 }} source={require('../assets/Register.png')}></Image>
                <Button title="Реєстрація" onPress={handlePress3} disabled={bool3}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: 'lightgray',
        justifyContent: 'space-between',
    },
    customButton: {
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15
    }
});

export default Routes;
