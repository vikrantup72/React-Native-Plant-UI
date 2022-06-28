/* import React from 'react'
import { StyleSheet ,FlatList,Text,View,Image} from 'react-native'


const Camponent = () => {

    
  const data =[
        {
             "id":1,
            "Imageurl" :'https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png',
            "name": "Nautika",
            "email": "Women Cotton set top",
            "position": '$250',
            
        },
        {
            "Imageurl" :'https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png',
            "id":2,
            "name": "June Cha",
            "email":  "Women Cotton set top",
            "position": '$250',
            
        },
        {
            "Imageurl" :'https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png',
            "id":3,
            "name": "Iida Niskanen",
            "email": "Women Cotton set top",
            "position":'$250',
           
        },
        {
            "Imageurl" :'https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png',
            "id":4,
            "name": "Renee Sims",
            "email": "Women Cotton set top",
            "position":'$250',

        },
        {
            "Imageurl" :'https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png',
            "id":5,
            "name": "Jonathan Nu\u00f1ez",
            "email":  "Women Cotton set top",
            "position": '$250',

        },
        {
            "Imageurl" :'https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png',
            "id":6,
            "name": "Sasha Ho",
            "email":  "Women Cotton set top",
            "position": '$250',

        },
      
    ]
    return(
 
    <FlatList 
    numColumns={2}
     data={data}
     renderItem={({item}) =>{
        return(
            <View style={{justifyContent:"center",backgroundColor:'orange',alignItems:'center',alignContent:'space-around'}}>
            <View style={styles.textstyle}>
           <Image 
           source = {{uri:item.Imageurl}}
           style={{width:150,height:150,alignSelf:'center'}}
           />
            <Text style={{fontSize:20,fontWeight:'500',color:'#000'}}>{item.name}</Text>
            <Text style={{fontWeight:'700',fontSize:15}}>{item.email}</Text>   
            <Text  style={{fontWeight:'700',fontSize:15}}>{item.position}</Text>
            </View>
            </View>
            
        )
     }}
    />
    )
}
export default Camponent

const styles = StyleSheet.create({
    textstyle:{
        padding:5,
        margin:20,
        backgroundColor:'#fff'
    }
}) */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Camponent = () => {
  return (
    <View>
      <Text>Camponent</Text>
    </View>
  )
}

export default Camponent

const styles = StyleSheet.create({})