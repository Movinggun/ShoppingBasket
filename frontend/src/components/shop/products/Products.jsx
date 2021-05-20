import React from 'react'

import Grid from '@material-ui/core/Grid';

import ProductItem from './ProductItem'

const Products = () => {

    // Would be replaced with a RESTFUL Database
    let products = [
        {
            id: '1',
            title: 'BreadSticks',
            description: 'A great bread treat!',
            price: 2.99,
            categoires: ['food']
        },
        {
            id: '2',
            title: 'Flat Screen TV',
            description: 'Huge TV at the fraction of the cost!',
            price: 499.99,
            categoires: ['electronics']
        },
        {
            id: '3',
            title: 'Bacon',
            description: 'Who hates bacon?',
            price: 1.99,
            categoires: ['food']
        },
        {
            id: '4',
            title: 'Mouse',
            description: 'Do you want to use your computer?',
            price: 49.99,
            categoires: ['electronics']
        },
        {
            id: '5',
            title: 'keyboard',
            description: 'I like typing',
            price: 159.99,
            categoires: ['electronics']
        }
    ]


    return (
        <div>
             <Grid container spacing={4}  direction="row" justify="flex-start" alignItems="flex-start">
                {products !== null && products.map(product => (
                    <Grid key={product.id} item xs={12} lg={3} xl={3}>
                        <ProductItem id={product.id} title={product.title} description={product.description} price={product.price} categoires={product.categoires} />
                    </Grid>
                ))}
             </Grid>
        </div>
    )
}

export default Products
