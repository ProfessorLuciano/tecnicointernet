import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    ActivityIndicator,
    ScrollView
} from 'react-native'
import moment from 'moment'

import api from '../../services/api'


export default function Destaques() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilmes() {

            const response = await api.get('/movie/popular', {
                params: {
                    api_key: 'e3557a63a0916ff565660d0e9b496cba',
                    language: 'pt-BR',
                }
            })

            setFilmes(response.data.results)
            setInterval(() => {
                setLoading(false)
            }, 3000)
        }
        loadFilmes()

    }, [filmes])

    if (loading === true) {
        return (

            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.textCarregamento}>Aguarde Carregando</Text>
                    <ActivityIndicator size={150} color="#00ff00" marginTop={100}/>
                    
                </View>
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {filmes.map(filme => (
                    <View key={filme.id} style={styles.cardText}>
                        <Image style={styles.image}
                            source={{ uri: `https://image.tmdb.org/t/p/original/${filme.poster_path}` }} />
                        <Text style={styles.textTitle}>{filme.title}</Text>
                        <Text style={styles.textTitle}> Avaliação: {filme.vote_average}</Text>
                        <Text style={styles.textTitle}> Lançamento: {moment(new Date(`${filme.release_date}`)).format('DD-MM-YYYY')} </Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center'
    },
    image: {
        height: 150,
        width: 150,
        resizeMode: 'stretch',
        marginBottom: 10,
    },
    cardText: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 250,
        marginBottom: 20,
        backgroundColor: "rgba(10,10,20, 0.300)",
        borderRadius: 30,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    textCarregamento: {
        fontSize: 30,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 40
    }
})