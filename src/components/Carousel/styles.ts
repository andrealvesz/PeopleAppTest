import styled from 'styled-components/native';
import { Pagination } from 'react-native-snap-carousel';

export const PaginationComponent = styled(Pagination).attrs(
  ({ dotsLength, theme }) => ({
    dotStyle: {
      width: dotsLength >= 10 ? 2 * dotsLength : 32,
      height: 2,
      backgroundColor: theme.colors.light['lime-300'],
      marginHorizontal: -5,
    },
    inactiveDotStyle: {
      backgroundColor: theme.colors.light['lime-300'],
    },
  }),
)``;
