import React from 'react'
import Product from './Product'

const ProductList = () => {
    const products: Product[] = [
        {
            name: 'Laptop',
            description: 'High-performance laptop for work and play',
            price: '$999',
            imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Handphone',
            description: 'of technology created to facilitate communication with other people',
            price: '$500',
            imageUrl: 'https://cdn.ralali.id/assets/img/Libraries/Produk-Baru-HP-Smartphone-Asli-i13-Pro-Max-7,5-inci-Handphone-Biru,-128GB_DPDonuiFrTck50Yr_1660046770.png',
        },
        {
            name: 'Tablet',
            description: 'to watch movies more enjoyable',
            price: '$5000',
            imageUrl: 'https://images.tokopedia.net/img/cache/700/OJWluG/2023/6/23/839556f7-0d63-4390-9531-fe06ad04e317.jpg',
        },
        { 
            name: 'Guitar',
            description: 'A musical instrument that is fun to play when bored.',
            price: '$50000',
            imageUrl: 'https://down-id.img.susercontent.com/file/id-11134207-7r98s-lwcjb6uay8x81c',
        },
            {
            name: 'Speaker',
            description: 'A sound amplifier for listening to music.',
            price: '$320',
            imageUrl: 'https://doran.id/wp-content/uploads/2023/10/149_20231017_082016_0005.jpg'
        }
        ]
            return (
            <>
            <h1>Product List</h1>
            {
            products.map((product, index) => {
            return <Product key={index} name={product.name} description={product.description} price={product.price} imageUrl={product.imageUrl} />
            })
        }
        </>
    
    )
    
}

export default ProductList;