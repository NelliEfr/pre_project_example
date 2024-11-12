import React from 'react'
import s from './index.module.css'
import { Link } from 'react-router-dom';

export default function CategoryCard({ category }) {

  const categoryUp = category[0].toUpperCase() + category.slice(1);

  return (
    <Link to={`/categories/${category}`} className={s.card}>
      {categoryUp}
    </Link>
  )
}
