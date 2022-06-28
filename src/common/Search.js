/* import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default MyComponent; */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})