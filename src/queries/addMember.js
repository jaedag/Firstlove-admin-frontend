import { gql } from "@apollo/client";

export const NEW_MEMBER = gql`
  mutation RegisterMember(
    $firstName: String!
    $lastName: String!
    $email: String!
    $phoneNumber: String!
    $whatsAppNumber: String
    $dob: String!
    $ministry: String
    $occupation: String
    $bacenta: String!
    $maritalStatus: String!
    $gender: String!
  ) {
    RegisterMember(
      firstName: $firstName
      lastName: $lastName
      email: $email
      phoneNumber: $phoneNumber
      whatsAppNumber: $whatsAppNumber
      dob: $dob
      ministry: $ministry
      occupation: $occupation
      bacenta: $bacenta
      maritalStatus: $maritalStatus
      gender: $gender
    ) {
      firstName
    }
  }
`;
