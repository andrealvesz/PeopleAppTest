import React from 'react';
import * as S from './styles';
import { View } from 'react-native';

export const ListItem = data => {
  console.log('🚀 ~ ListItem ~ data:', data);
  return (
    <View></View>
    // <S.ListItemContainer type={'brand'}>
    //   {data.map(subItem => {
    //     return (
    //       <S.ListItem key={src}>
    //         <S.ListButton onPress={() => null}>
    //           <S.ListImage
    //             type={'brand'}
    //             source={{ uri: src }}
    //             accessibilityLabel={title}
    //             accessibilityHint={title}
    //           />
    //         </S.ListButton>
    //       </S.ListItem>
    //     );
    //   })}
    // </S.ListItemContainer>
  );
};
