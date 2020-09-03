import {gql} from '@apollo/client';

export const jobs = gql`{
    Occupation{
      occupation
    }
  }`

export const All_Members = gql `{
    
  Member {
    firstName
    lastName
    email
    phoneNumber
    whatsAppNumber
    ministry{name}
    occupation{occupation}
    bacenta{name}
    gender{gender}
    maritalStatus{status}
  }

  }`;


export const SEARCH = gql `
  query memberSearch ($searchKey: String!){
  fuzzyMemberByName(searchKey: $searchKey){
    firstName
    lastName
    email
    phoneNumber
  }
}
`