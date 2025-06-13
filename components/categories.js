import {ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoryCard from './categoryCard';
import client from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    await client
      .fetch(
        `*[_type == "category"]{
          _id,
          name,
          "imageUrl": image.asset->url
        }`,
      )
      .then(data => {
        console.log('data-categories: ', data);
        setCategories(data);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getCategories();
  }, []);
  console.log('cat', categories);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* CategoryCard */}
      {categories?.map(category => (
        <CategoryCard
          key={category?._id}
          title={category?.name}
          imgUrl={category?.imageUrl}
        />
      ))}
      <CategoryCard
        title={'Testing 3'}
        imageUrl={'https://links.papareact.com/gn7'}
      />
    </ScrollView>
  );
};

export default Categories;
