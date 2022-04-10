import { gql } from "@apollo/client";

export const GET_PAST_LAUNCHES = gql`
  query getPastLaunches {
  launchesPast(limit: 10) {
    id
    mission_name
    launch_date_local
    details
  }
}
`