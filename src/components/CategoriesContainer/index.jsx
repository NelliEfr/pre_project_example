import React from 'react'
import CategoryCard from '../CategoryCard'

export default function CategoriesContainer({ categories }) {
  return (
    <div>
        {
            categories.map(el => <CategoryCard key={el} category={el} />)
        }
    </div>
  )
}
