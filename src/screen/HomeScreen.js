import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from 'react-native-paper'
import COLORS from './Const/Color'
import plants from './Const/Plants'
import organic from './Const/Organic'
import indoors from './Const/Indoors'
import synthetic from './Const/Synthetic'
import Foundation from 'react-native-vector-icons/Foundation'

const width = Dimensions.get("screen").width;


const HomeScreen = ({ navigation }) => {

    // const categories = ['social-lastfm', 'social-drive', 'social-bing', 'social-behance'];
    const categories = ['Popular', 'Organic', 'Indoors', 'Synthetic'];

    const [categoryIndex, setcategoryIndex] = React.useState(0)

    const Categorylist = () => {
        return (
            <View style={styles.categorylistcantainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity kye={index}
                        activeOpacity={0.8}
                        onPress={() => setcategoryIndex(index)}>
                        <Text kye={index} style={[styles.categoryText, categoryIndex == index && styles.categoryTextselected]}>{item}</Text>
                        {/* <Foundation style={[styles.categoryText, categoryIndex == index && styles.categoryTextselected]} name={item} size={22} color="green"/> */}
                    </TouchableOpacity>

                ))}
            </View>
        );
    };
    const Card = ({ plant }) => {

        return (
            <View style={styles.card}>
                <View style={{ alignItems: "flex-end" }}>
                    <View style={{
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: plant.like ? 'rgba{245,42,42,0.2}' : 'rgba{0,0,0,0.2}',
                    }}>
                        <Icon name='favorite' size={18} color={plant.like ? COLORS.red : COLORS.dark} />
                    </View>
                </View>
                <View style={{ height: 100, alignItems: 'center' }}>
                    <Image style={{ flex: 1, resizeMode: 'contain' }}
                        source={plant.Imageurl} />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("DetailsScreen", plant)}>

                    <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 10 }}>{plant.name}</Text>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 19 }}>{plant.price}</Text>
                        <View style={{ height: 25, width: 25, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: COLORS.white }}>+</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

        )
    };
    return (
        <ScrollView style={{ flex: 1, paddingHorizontal: 20, backgroundColor: '#fff' }}>
            <View style={styles.header}>
                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Welcome to</Text>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'green' }}>plant Shop</Text>
                </View>
                <Icon name="shopping-cart" size={28} />
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={styles.searchcontainer}>
                    <Icon name="search" size={25} style={{ marginLeft: 20 }} />
                    <TextInput activeUnderlineColor='transparent' placeholder='search' style={styles.Input} />
                </View>

                <View style={styles.srtbtn}>
                    <Icon name="sort" size={30} style={{ justifyContent: 'center', alignItems: 'center', color: COLORS.white }} />
                </View>
            </View>
            < Categorylist />
            <FlatList
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={categoryIndex === 0 ? plants : categoryIndex === 1 ? organic : categoryIndex === 2 ? indoors : categoryIndex === 3 ? synthetic : null}
                renderItem={({ item }) => <Card plant={item} />}
            />

        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    header: {
        marginTop: 20, justifyContent: 'space-between',
        flexDirection: 'row'
    },
    searchcontainer: {
        height: 40, backgroundColor: COLORS.light,
        borderRadius: 10, flexDirection: 'row',
        flex: 1, alignItems: 'center'
    },
    Input: {
        fontSize: 18, fontWeight: 'bold', color: 'dark',
        backgroundColor: 'light', height: 40, flex: 1
    },
    srtbtn: {
        marginLeft: 10, height: 40, width: 50,
        backgroundColor: 'green',
        paddingHorizontal: 10,
        borderRadius: 10
    },
    categorylistcantainer: {
        marginTop: 30, flexDirection: 'row',
        justifyContent: 'space-between',
    },
    categoryText: {
        fontSize: 16, fontWeight: 'bold', color: 'gray'
    },
    categoryTextselected: {
        borderBottomWidth: 2, color: COLORS.green,
        borderColor: COLORS.green
    },
    card: {
        backgroundColor: COLORS.light,
        width: 175,
        marginVertical: 5,
        marginHorizontal: 2,
        borderRadius: 10, padding: 15,
    }
})