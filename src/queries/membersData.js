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
    _id
    dob{date {
      year
      month
      day
      formatted
    }
    }
    ministry{name}
    occupation{occupation}
    bacenta{name}
    gender{gender}
    maritalStatus{status}
  }

  }`