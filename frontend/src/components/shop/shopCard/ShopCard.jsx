import React from 'react'
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import {Typography} from "@material-ui/core";

import CartItem from './CartItem';

const ShopCard = ({ cart }) => {

    let totalBasket = 0;   
    cart.items.map(item => (
        totalBasket = totalBasket + (item.price * item.quantity)
    ))



    return (
        <Card style={{backgroundColor: '#13151D', height: '50%', marginLeft: '50px', color: 'white'}}>
            <CardContent>
                <Typography style={{ fontSize: '20px'}}>
                    Shopping Cart
                </Typography>  
                <hr style={{ border: '0', height:'1px', background: '#2D3445', marginTop: '10px'}}/>
                {cart.items.length <= 0 ? <Typography style={{fontSize: '12px'}}>You currently have nothing in your cart!</Typography> :  cart.items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
                <hr style={{ border: '0', height:'1px', background: '#2D3445'}}/>
                <Typography style={{ fontSize: '20px'}}>
                    Total: ${ parseFloat(totalBasket).toFixed(2) }
                </Typography>
            </CardContent> 
        </Card>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});


export default connect(mapStateToProps) (ShopCard)
