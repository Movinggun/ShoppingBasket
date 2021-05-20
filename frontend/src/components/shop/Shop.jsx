import React from 'react'
import { connect } from 'react-redux';


import Navbar from '../layout/Navbar'
import ShopCard from './shopCard/ShopCard'
import Products from './products/Products'

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const Shop = ({ cart }) => {
    return (
        <>
            <Navbar />
            <Box  ml={5} mr={5} mt={2}>
                <Grid container spacing={0}>
                    <Grid style={{height: '100%'}} item xs={9}>
                            <Products />
                    </Grid>
                    <Grid style={{height: '100%'}} item xs={3}>
                            <ShopCard />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart,
});

export default connect(mapStateToProps, {}) (Shop)
