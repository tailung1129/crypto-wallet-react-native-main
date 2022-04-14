import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { avatar, clock } from '../../assets/icons/index';

const styles = StyleSheet.create({
    setFontColor: { color: 'white' }
});

const CustomRow = ({ imageURL, title, content, content_sub, cost }) => {
    var imagePath;
    switch(imageURL) {
        case 'usd':
            imagePath = require('../../assets/icons/usd.png');
            break;
        case 'binance':
            imagePath = require('../../assets/icons/binance.png');
            break;
        default:
            imagePath = require('../../assets/icons/synthetix.png');
            break;
    }
    return (
    <View style={{ width: "100%", flexDirection: "row", marginLeft: '1%',borderBottomColor: '#181e25', borderBottomWidth: 1, height: 125}}>
        <View style={{ width: "19%", height: '94%', justifyContent: 'center', }}>
           <Image source={imagePath} style = {{width:"85%",borderRadius: 400/ 2, height: '60%'}}></Image>
        </View>
        <View style={{ width: "50%", marginTop: 33,marginLeft: '1%' }}>
            <View><Text style = {{ color: 'white',fontSize:20,paddingBottom:'3%' }}>{title}</Text></View>
            {
                title == "Synthetix" ? <Text style = {{ color: 'white',fontSize:15 }}>{content}<Text style={{color:'red'}}>   {content_sub}</Text></Text> : <Text style = {{ color: 'white',fontSize:15 }}>{content}<Text style={{color:'green'}}>   {content_sub}</Text></Text>
            }
        </View>
        <View style={{ width: "29%", marginTop: 33, flexDirection:'row-reverse'}}>
            <Text style={{fontSize:18,color:'white'}}>{cost}</Text>
        </View>
    </View>
)};
export default CustomRow;