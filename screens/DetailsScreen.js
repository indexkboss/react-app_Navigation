import React from 'react';
import { View, Text, Button } from 'react-native';

function DetailsScreen({ route }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#a7e0ff76' }}>
<Text>📄 Écran de détails</Text>
{route.params && <Text>ID reçu : {route.params.id}</Text>}
</View>
);
}
export default DetailsScreen;