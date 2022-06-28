/* import * as React from 'react';
import { Appbar } from 'react-native-paper';



const Header = () => {

  const _handleSearch = () => console.log('Searching');
  
  const _handleMore = () => console.log('Shown more');
  

  return (
    <Appbar.Header style={{backgroundColor:'red'}}>

      <Appbar.Content title="Products" />
      <Appbar.Action title="dbebjbb"  />
      <Appbar.Action icon="user" onPress={_handleMore} />
    </Appbar.Header>
    
    
  );
};

export default Header; */

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})