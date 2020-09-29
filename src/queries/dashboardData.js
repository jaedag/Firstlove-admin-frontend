import { gql } from "@apollo/client";

export const members = gql`
  {
    memberCount
  }
`;

export const communityCount = gql`
  {
    communityCount
  }
`;

export const sontaCount = gql`
  {
    sontaCount
  }
`;
