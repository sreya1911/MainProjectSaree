// Code Generated by Sidekick is for learning and experimentation purposes only.

import React from 'react';
import { useParams } from 'react-router-dom';
import categories from '../data/categories.json';
import Carddisplay from './Carddisplay';
import './All.css';

const CategoryPage = () => {
  const { categoryName, subcategoryName } = useParams();
  const category = categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());

  if (!category) {
    return <div>Category not found</div>;
  }

  const subcategory = subcategoryName 
    ? category.subcategories.find(sub => sub.name.toLowerCase() === subcategoryName.toLowerCase())
    : null;

  if (subcategoryName && !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <div className='container'>
      <div className='cat'>
        
        <h1>{category.name}</h1>
        {/* <p>{category.description}</p> */}
      </div>
      <Carddisplay category={category} subcategory={subcategory} />
    </div>
  );
};


export default CategoryPage;
