import React, { useEffect } from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../requests/categories';

export default function CategoriesPage() {

    const categoriesState = useSelector(store => store.categories);

    const dispatch = useDispatch();

    useEffect(() => dispatch(getCategories), []);

  return (
    <div>
        <CategoriesContainer categories={categoriesState} />
    </div>
  )
}
