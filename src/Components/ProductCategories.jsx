import React from 'react'
import ElectronicsIcon from '../assets/ElectronicsIcon.png'
import FashionIcon from '../assets/FashionIcon.png'
import WatchesIcon from '../assets/WatchesIcon.png'
import BeautyIcon from '../assets/BeautyIcon.webp'
import { Link } from 'react-router-dom'
import PageTransition from './PageTransition'

const proCategories = [
    {
        title: 'Electronics',
        slug:'electronics',
        color: 'bg-blue-100',
        image: ElectronicsIcon
    },
    {
        title: 'Fashion',
        slug:'fashion',
        color: 'bg-pink-200',
        image: FashionIcon
    },
    {
        title: 'Watches',
        slug: 'watches',
        color: 'bg-neutral-200',
        image: WatchesIcon
    },
    {
        title: 'Beauty',
        slug: 'beauty',
        color: 'bg-orange-100',
        image: BeautyIcon 
    }
]

const ProductCategories = () => {
    return (
        <PageTransition>
            <section className="w-full py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-8">
                        Shop by Category
                    </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
                    {proCategories.map((category) => (
                        <Link
                            key={category.slug}
                            to={`/category/${category.slug}`}
                            className="flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105"
                        >
                            <div
                                className={`flex items-center justify-center rounded-full shadow-md hover:shadow-lg transition-all duration-300
                                ${category.color}
                                w-18 h-18
                                sm:w-20 sm:h-20
                                lg:w-24 lg:h-24`}
                            >
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-16 h-16 sm:w-16 sm:h-16 lg:w-18 lg:h-18 object-contain"
                                />
                            </div>
                            <h2 className="text-sm sm:text-base font-medium hover:text-blue-500 transition-colors">
                                {category.title}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </PageTransition>
)}

export default ProductCategories