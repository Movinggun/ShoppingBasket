import React from 'react'
import Box from '@material-ui/core/Box';
import {Typography} from "@material-ui/core";
import { connect } from 'react-redux';

import { updateCart, removeFromCart } from '../../../actions/cartActions';

const CartItem = ( {item, updateCart, removeFromCart, cart} ) => {

    const { id, title, description, price, quantity } = item;

    const removeOneFromCart = () => {
        if (quantity -1 <= 0) {
            removeFromCart(id)
        } else {
            updateCart({id, amount: -1})
        }
    }

    return (
        <div>
            <Box style={{paddingBottom:'50px'}}>
                <Box style={{ float: "right"}}>
                    <Typography style={{fontSize: '14px'}}> ${parseFloat(price * quantity).toFixed(2)} <br />
                    </Typography>
                    <span onClick={removeOneFromCart} style={{cursor: 'pointer', color: 'red', float: 'right'}}>[-]</span>
                    <span onClick={() => updateCart({id, amount: 1})} style={{cursor: 'pointer', color: 'green',float: 'right'}}>[+]</span>
                </Box>
                <Box style={{ float: "left"}}>
                    <img style={{ borderRadius:'50%', width:'40px', height:'40px', marginRight:'10px', textAlign: 'center'}} src="/images/placeholder.png" alt=""/>
                    <Typography style={{float: "right", fontSize: '18px', lineHeight: '1.0'}}><b>{title} ({quantity})</b>
                        <br /> <span style={{fontSize: '13px', lineHeight: '1.0'}}>{description}</span>
                    </Typography>
                    <br />
                </Box>
            </Box>
      
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});


export default connect(mapStateToProps, { updateCart, removeFromCart })(CartItem)
