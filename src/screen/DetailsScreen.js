import { StyleSheet,Text, View,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context'
import COLORS from './Const/Color';

const DetailsScreen = ({ navigation, route }) => {
    const plant = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()} />
                <Icon name="shopping-cart" size={28} />
            </View>
            <View style={styles.imgContainer}>
                <Image  source={plant.Imageurl} style={{flex:1,resizeMode:'contain'}}/>
            </View>
            <View style={styles.detailsContainer}>

            <View style={{marginLeft:20,flexDirection:'row', alignItems:'flex-end'}}>

                 <View style={styles.line}/>

                 <Text style={{fontSize:17,fontWeight:'bold'}}>Best Choice</Text>
                 </View>
                 <View style={{marginLeft:20,marginTop:20,justifyContent:'space-between',flexDirection:"row",alignItems:"center"}}>
                    <Text style={{fontSize:22,fontWeight:'bold'}}>{plant.name}</Text>
                    <View style={styles.priceTag}>
                        <Text style={{textAlign:'center',fontSize:15,fontWeight:'bold'}}>{plant.price}</Text>
                    </View>
                 </View>
                 <View style={{paddingHorizontal:20,marginTop:10,}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>About</Text>
                    <Text style={{color:'gray',fontSize:16}}>{plant.about}</Text>
                    <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',alignItems:"center"}}>
                            <View style={styles.borderBtn}>
                              <Text style={styles.borderBtnText}>-</Text>
                            </View>
                            <Text style={{fontSize:20,marginHorizontal:10,fontWeight:'bold'}}>1</Text>
                            <View style={styles.borderBtn}>
                              <Text style={styles.borderBtnText}>+</Text>
                            </View>
                        </View>
                        <View style={styles.buybtn}>
                            <Text style={{fontSize:18,fontWeight:"bold",color:COLORS.white}}>Buy</Text>
                        </View>
                    </View>
                 </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 20,
        flexDirection: 'row',marginTop: 20, 
       justifyContent: "space-between"
    },
    imgContainer: {
        flex: 0.5, marginTop: 20,
         justifyContent: 'center', 
         alignItems: 'center'
    },
    detailsContainer:{
    flex:0.8,marginHorizontal:7,
    marginBottom:7,borderRadius:20,
    marginTop:30,paddingTop:30,backgroundColor:COLORS.light
    },
    line:{
        width:25,height:1,borderColor:COLORS.dark,borderWidth:2,
        marginBottom:5,marginRight:3
    },
    priceTag:{
        width:80,height:40,backgroundColor:COLORS.green,
        borderTopLeftRadius:25,borderBottomLeftRadius:25,justifyContent:"center"
    },
    borderBtn:{
        height:40,width:60,borderWidth:1.5,borderColor:COLORS.gray,
        borderRadius:5,justifyContent:'center',alignItems:'center'
    },
    borderBtnText:{
         fontSize:28,fontWeight:'bold'
    },
    buybtn:{
        backgroundColor:COLORS.green,width:150,height:50,justifyContent:'center',alignItems:'center',borderRadius:30
    }
})