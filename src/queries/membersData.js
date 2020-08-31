import {gql} from '@apollo/client';

export const jobs = gql`{
    Occupation{
      occupation
    }
  }`