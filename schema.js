export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }

  # entry points
  type Query {
    games: [Game]
    reviews: [Review]
    authors: [Author]

    game(id: ID!): Game
    review(id: ID!): Review
    author(id: ID!): Author
  }

  # mutations ex. add, delete etc.
  type Mutation {
    addGame(game: AddGameInput!): [Game]
    deleteGame(id: ID!): [Game]
    deleteReview(id: ID!): [Review]
  }

  # custom inputs
  input AddGameInput {
    title: String!
    platform: [String!]!
  }
`