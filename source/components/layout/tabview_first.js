
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    StatusBar,
} from 'react-native';
import { binance, usd, synthetix } from '../../assets/icons/index';

import CustomRow from '../form_components/List_CustomRow';

const itemList = [{
    imageURL:"binance",
    title:"Binance Coin",
    content : "$ 1829.2789",
    content_sub : "+1.8%",
    cost : "4,66 BNB"
},{
    imageURL:"usd",
    title:"USD Coin",
    content : "$ 289.56",
    content_sub : "+1.8%",
    cost : "289.56 USDC"
},{
    imageURL:"synthetix",
    title:"Synthetix",
    content : "$ 28.7710",
    content_sub : "-0.9%",
    cost : "35567 SNX"
},{
    imageURL:"synthetix",
    title:"Biance Coin",
    content : "$ 1829.2789",
    content_sub : "+1.8%",
    cost : "4,66 BNB"
},]

function tabview_first() {
    return (
        <View style={styles.container}>
            <FlatList 
                data={itemList}
                renderItem={({ item }) => <CustomRow
                    imageURL = {item.imageURL}
                    title = {item.title}
                    content = {item.content}
                    content_sub = {item.content_sub}
                    cost = {item.cost}
                />}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor :'#0d0d0d',
        marginTop:'12%',
        justifyContent: 'center',
        borderTopColor: '#181e25',
        borderTopWidth: 2
    },
});

const mapStateToProps = state => {
    return {
        events: state.eventCardsReducer
    };
};

const mapDispatchToProps = dispatch => ({
    isSelectedAll: () => dispatch(isSelectedAll()),

});
export default connect(mapStateToProps, mapDispatchToProps)(tabview_first);
// export default Wallet;