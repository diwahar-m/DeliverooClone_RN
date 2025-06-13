import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  async function getCategoryList() {
    await client
      .fetch(
        `*[_type == "featured"] {
      ...,
      restaurant[]
      -> {
        ...,
        dishes[] ->{...}
          }
        }`,
      )
      .then(data => {
        console.log('data: ', data);
        setFeaturedCategories(data);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getCategoryList();
  }, []);

  console.log(featuredCategories);

  return (
    // for ios
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          style={{height: 40, width: 40}}
          source={{
            uri: 'data:image/png;base64,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',
          }}
          className="h-6 w-6 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={'#00CCBB'} />
          </Text>
        </View>
        <UserIcon size={35} color={'#00CCBB'} />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-1 flex-row items-center rounded-full space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color={'gray'} size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color={'#00CCBB'} />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{paddingBottom: 100}}>
        {/* Categoies */}
        <Categories />

        {/* Feature Rows */}
        {featuredCategories?.map(category => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
