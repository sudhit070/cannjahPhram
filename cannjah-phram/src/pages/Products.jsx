import React from 'react'
import { ProdHero } from '../features/Products/ProdHero'
import { FlowersList } from '../features/Products/FlowersList'
import { PrerollList } from '../features/Products/PrerollList'
import { ContactSection } from "../components/ContactSection";
import { ProductSectionOne } from "../features/Products/ProductHero";

export const Products = () => {
    return (
        <>
            <ProdHero />
            <FlowersList />
            <PrerollList />
            <ContactSection />
        </>
    )
}
