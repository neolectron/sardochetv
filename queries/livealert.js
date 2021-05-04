import { gql } from '@apollo/client';

export const getLive = (username) => gql`
  query GetLive {
    live(where: { username: "${username}" }) {
      id
      next
      onair
      skins {
        ... on Skin {
          id
          name
          background
          badge
          badgetxt
          badgecolor {
            hex
          }
          description
          title
          url
        }
      }
      updatedAt
      username
      features
    }
  }
`;
