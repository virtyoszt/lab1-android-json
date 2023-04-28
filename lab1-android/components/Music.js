import { StyleSheet, Text, View, Image } from 'react-native';

const Music = (props) => {
    const {item} = props
    const {author, song, image} = item

    return (
        <View style={styles.container}>
            <View style={{ flex: 2, justifyContent: 'center' }}>
                <Image style={{ height: 50, width: 50, marginLeft: 20 }} source={{uri: `${image}`}} />
            </View>
            <View style={{ flex: 6, justifyContent: 'center' }}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={{fontSize: 20}}>{song.length > 20 ? song.slice(0, 19) + '...' : song}</Text>
                    <Text>{author.length > 40 ? author.slice(0, 39) + '...' : author}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        marginTop: 10
    },
});

export default Music;
