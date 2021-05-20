import React from 'react'
import { connect } from 'react-redux';

import CustomBtn from '../../layout/CustomBtn';

import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Typography} from "@material-ui/core";

import { addToCart, updateCart } from '../../../actions/cartActions';

const ProductItem = ( { id, title, description, price, addToCart, updateCart, cart} ) => {

    const onClick = () => {
        const doesIDAlreadyExist = obj  => obj .id === id;

        let isProductAlreadyInBasket = cart.items.some(doesIDAlreadyExist);
        isProductAlreadyInBasket ?  
            updateCart({id, amount: 1}): 
            addToCart({id, title, description, price, quantity: 1})
    }

    return (
        <Card style={{backgroundColor: '#13151D', height: '100%', color: 'white'}}>
            <CardMedia component="img" alt="Example Images" height="169" image="/images/placeholder.png" title="Placeholder image"/>
            <CardContent style={{paddingBottom: '10px'}}>
                <Typography style={{fontSize: '18px', lineHeight: '0.5'}}>
                    <strong>{title}</strong>
                </Typography>
                <Typography style={{fontSize: '14px', lineHeight: '3'}}>
                   {description}
                </Typography>
                <Typography style={{fontSize: '14px', lineHeight: '2', float: 'right'}}>
                   ${price}
                </Typography>
                <CustomBtn label="Add To Cart" onClick={onClick} />
            </CardContent>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});


export default connect(mapStateToProps, {addToCart, updateCart}) (ProductItem)
