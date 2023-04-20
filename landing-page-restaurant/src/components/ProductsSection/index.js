import React from 'react';
import { 
    ProductsContainer, ProductsHeading, ProductsWrapper,
    ProductCard, ProductImg, ProductInfo, ProductTitle, 
    ProductDesc, ProductPrice, ProductButton 
} from './ProductsSectionStyles';

const ProductsSection = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductsWrapper>
                {/* Products mapping */}
                {data.map((product, idx) => {
                    return (
                        <ProductCard key={idx}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.title}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default ProductsSection