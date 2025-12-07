import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
return (
<View style={styles.appBar}>
<Text style={styles.title}> Mon Application</Text>
</View>
);
}
const styles = StyleSheet.create({
appBar: {
height: 60,
backgroundColor: 'red', // couleur de fond
justifyContent: 'center',
alignItems: 'center',
elevation: 4,
},
title: {
color: '#ffffffff',
fontSize: 18,
fontWeight: 'bold',
},
});

