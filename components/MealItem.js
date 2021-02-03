import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, } from 'react-native'

const MealItem = (props) => {
    return(
        <View style={styles.mealItem}>
            <TouchableOpacity activeOpacity={0.7} onPress={props.onSelectMeal}>
                <View  >
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.backgroundImage}>
                            <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text style={{fontFamily: 'open-sans-bold'}}>{props.duration}m</Text>
                        <Text style={{fontFamily: 'open-sans-bold'}}>{props.complexity}</Text>
                        <Text style={{fontFamily: 'open-sans-bold'}}>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 15,
        marginHorizontal: 5,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%',
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
    },
})

export default MealItem