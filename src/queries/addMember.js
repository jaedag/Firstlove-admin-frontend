import {gql} from '@apollo/client'

export const NEW_MEMBER = gql `
    
	mutation AddNewMember(
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
        AddMember(firstName: $firstName, lastName: $lastName, email: $email, phoneNumber: $phoneNumber, whatsAppNumber: $whatsAppNumber,
         dob: $dob, ministry:$ministry, occupation: $occupation, bacenta:$bacenta, maritalStatus: $maritalStatus,  gender: $gender ){
             firstName
         }
    }
`