import React from 'react'
import { MoreProducts } from '../components/MoreProducts'
import { AcceptingPatients } from '../features/Home/AcceptingPatients'
import { ContactSection } from '../components/ContactSection'
import { DetailsOverview } from '../features/Products/DetailsOverview'
import { DetailsHero } from '../features/Products/DetailsHero'

export const ProductDetails = () => {
    return (
        <>
            <DetailsHero />
            <DetailsOverview />
            <MoreProducts />
            <ContactSection />
        </>
    )
}
