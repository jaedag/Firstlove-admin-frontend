import { gql } from "@apollo/client";

export const NEW_CENTRE = gql`
  mutation StartCentre(
    $centreName: String
    $lWhatsappNumber: String
    $communityName: String
    $meetingDay: String
  ) {
    name
    meetingDay {
      day
    }
  }
`;
