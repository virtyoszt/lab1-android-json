import { StyleSheet, View, Image } from 'react-native';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

const Picture = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginRight: 5 }}>
                <Image style={{ height: 150, width: 150 }} source={{uri: `https://github.com/virtyoszt/lab1-android-json/blob/main/pictures/${getRandomIntInclusive(1, 8)}.jpg?raw=true`}} />
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginLeft: 5 }}>
                <Image style={{ height: 150, width: 150 }} source={{uri: `https://github.com/virtyoszt/lab1-android-json/blob/main/pictures/${getRandomIntInclusive(1, 8)}.jpg?raw=true`}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15
    },
});

export default Picture;
