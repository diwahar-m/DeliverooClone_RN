import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {urlFor} from '../sanity';

const CategoryCard = ({imgUrl, title}) => {
  console.log(imgUrl);
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        // source={{uri: urlFor(imgUrl).url()}}
        source={{
          uri: 'https://imgs.search.brave.com/G-Mb8FgkT60Iy4SGy21XcCCgkjdo43o_qRp1WANsrRc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9vbGQt/YnJvd24tcGFwZXIt/YmFja2dyb3VuZC1h/YnN0cmFjdC10ZXh0/dXJlLWRlc2lnbi0x/MTE4NDc2OTEuanBn',
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
