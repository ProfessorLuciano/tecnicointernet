import React from 'react'
import { 
    SafeAreaView, 
    View, 
    Text, 
    StyleSheet,
    Image 
} from 'react-native'

export default function Inicio(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text  style={styles.textHeader}>Sinopses de Filmes e Séries</Text>
            </View>

            <View style={styles.bodyContainer}>
                <Text style={styles.creditos}>Os créditos de conteúdo</Text>
                <Text style={styles.creditos}>deste aplicativo é de</Text>
                <Text style={styles.creditos}> exclusividade do</Text>
                <Image style={styles.imageLogo}
                source={require('../../../assets/tmdb_logo_1.png')}
                />
                <Text style={styles.creditos}>e Desenvolvido por</Text>
                <Text style={styles.creditos}>Mundo Slackware Security</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        flexDirection: 'row',
        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1F73CE'
    },
    textHeader:{
        marginRight: 10,
        fontSize: 23,
        color: '#FFFFFF'
    },
    imageLogo: {
        margin: 7,
        height: 250,
        width: 250,
        resizeMode: 'stretch',
        marginTop: 30,
        marginBottom: 30

    }, 
    bodyContainer: {
        alignItems: 'center',
        marginTop: 40,
        justifyContent: 'center'
    },
    creditos: {
        fontSize: 30,
        fontWeight: 'bold'
    }

})