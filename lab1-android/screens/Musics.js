import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Music from '../components/Music';
import { useState, useEffect } from 'react';

const Musics = () => {
    const dataURL = 'https://raw.githubusercontent.com/virtyoszt/lab1-android-json/main/music.json'
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(dataURL)
            .then((response) => response.json())
            .then((responseJson) => setData(responseJson))
            .catch((error) => {
                console.error(error)
            });
    }, [dataURL]);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {data.map(item => <Music key={item.id} item={item}/>)}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
});

export default Musics;
