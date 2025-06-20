import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/outline';

import RestaurantCard from './RestaurantCard';
import client from '../sanity';

export default function FeaturedRow({
  id,
  title,
  description,
  featuredCategory,
}) {
  const [restaurantList, setRestaurantList] = useState([]);

  async function getRestaurantList() {
    console.log(id);
    await client
      .fetch(
        `*[_type == "featured" && _id == $id] {
            ...,
            restaurant[]->{
              ...,
              dishes[]->{
                ...,
                type->{
                  name
                }
              }
            }
          }`,
        {id},
      )
      .then(data => {
        console.log('data: ', data);
        setRestaurantList(data?.[0]?.restaurant);
      })
      .catch(err => console.error(err));
  }
  console.log(restaurantList);

  useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
        {/* Restaurant cards */}
        {restaurantList?.map(restaurant => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            address={restaurant.address}
            title={restaurant.name}
            dishes={restaurant.dishes}
            rating={restaurant.rating}
            genre={restaurant.name}
            short_description={restaurant.short_description}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
