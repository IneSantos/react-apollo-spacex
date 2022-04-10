import { gql } from "@apollo/client";

export const GET_PAST_LAUNCH = gql`
  query getLaunch($launchID: ID!) {
  launch(id: $launchID) {
    details
    id
    links {
      article_link
      flickr_images
      video_link
    }
    mission_name
    ships {
      id
      image
    }
  }
}
`