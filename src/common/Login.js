/* import { StyleSheet, Text, View,Button,Image, TouchableOpacity, ScrollView,} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { Appbar } from 'react-native-paper';

        
//import EntypoIcon from 'react-native-vector-icons/EntypoIcon'

const Login = ({navigation}) => {

 
  return ( 
    
        
    <View  style={{flex:1,backgroundColor:'#fff'}}> 
       <View style={{justifyContent:'center',alignItems:'center',marginTop:'15%'}}>
        <Image style={{height:100,width:100}}
        source={{uri:'https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png'}}
     />
     <Text style={{fontSize:25,fontWeight:'bold',color:'#000',marginTop:'5%'}}>SignUp</Text>
     </View> 
   <View style={{borderWidth:1,width:'70%',height:40,alignSelf:'center',marginTop:20,borderRadius:10,borderColor:'gray'}}>
    <TextInput 
    style={{fontSize:16,color:'red',fontWeight:'bold'}}
    mode='underlined'
    label="Enter Your Mobile/Email"
    placeholder="Enter Your Mobile/Email" 
    placeholderTextColor={'#000'}
    activeOutlineColor='#fff'
    OutlineColor='#fff'
    /> 
    <View  style={{borderWidth:1,marginTop:30,height:40,borderRadius:10,}}>
   <TextInput style={{color:'red',fontSize:16,fontWeight:'bold'}}
    mode='outlined'
    label="Enter Password"
    placeholder="Enter Password" 
    placeholderTextColor={'#000'}
    activeOutlineColor='#fff'
    OutlineColor='#fff'
    /> 
    </View>
    <TouchableOpacity>
    <Text style={{marginTop:5,fontWeight:'bold',color:'#000',fontSize:16}}>Forget Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity  onPress={()=>{navigation.navigate("Camponent")}}style={{fontSize:25,backgroundColor:'#000',height:40,alignItems:'center',marginTop:30,borderRadius:30}}>
    <Text  style={{fontSize:20,fontWeight:'500',color:'#fff',paddingVertical:5}}>Sign In</Text>
    </TouchableOpacity>
    <View style={{flexDirection:'row',alignSelf:'center'}}>
    <Text>I have not register?</Text>
    <Text>Login</Text>
    </View>
  </View>

  </View>

 
 
  
  );
  
};


export default Login

const styles = StyleSheet.create({}) */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})