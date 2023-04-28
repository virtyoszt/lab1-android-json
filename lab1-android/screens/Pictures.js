import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Picture from '../components/Picture'

const Pictures = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {[...Array(10)].map((x, i) =>
                    <Picture key={i} />
                )}
                <Picture />
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

export default Pictures;
