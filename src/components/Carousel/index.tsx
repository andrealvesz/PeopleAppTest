import React, { useState } from 'react';
import { Dimensions, ListRenderItem, View } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import * as S from './styles';
import { ListItem } from './ListItem';

type ListItemProps = {
  data: any[];
  // renderItem: ListRenderItem<any>;
};

const { width } = Dimensions.get('window');

export const CarouselView = ({
  data,
  // renderItem,
}: ListItemProps) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  // const renderPagination = () => (
  //   <S.PaginationComponent
  //     dotsLength={data.length}
  //     activeDotIndex={paginationIndex}
  //     inactiveDotScale={1}
  //   />
  // );

  return (
    <>
      <Carousel
        data={data}
        renderItem={({ item, index }) => <ListItem data={item} />}
        sliderWidth={width}
        itemWidth={width}
        enableMomentum={true}
        onSnapToItem={index => setPaginationIndex(index)}
      />
    </>
    // {/* {renderPagination()} */}
  );
};
