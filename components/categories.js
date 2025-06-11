import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CategoryCard from './categoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/* CategoryCard */}
      <CategoryCard
        title={'Testing 1'}
        imageUrl={'https://links.papareact.com/gn7'}
      />
      <CategoryCard
        title={'Testing 2'}
        imageUrl={'https://links.papareact.com/gn7'}
      />
      <CategoryCard
        title={'Testing 3'}
        imageUrl={'https://links.papareact.com/gn7'}
      />
      <CategoryCard
        title={'Testing 1'}
        imageUrl={'https://links.papareact.com/gn7'}
      />
      <CategoryCard
        title={'Testing 2'}
        imageUrl={'https://links.papareact.com/gn7'}
      />
      <CategoryCard
        title={'Testing 3'}
        imageUrl={'https://links.papareact.com/gn7'}
      />
    </ScrollView>
  );
};

export default Categories;
