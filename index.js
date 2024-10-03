import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./_db.js";
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    games(){
      return db.games
    },
    authors(){
      return db.games
    },
    reviews(){
      return db.games
    },

    game(_, args){
      return db.games.find((game) => game.id === args.id)
    },
    author(_, args){
      return db.authors.find((author) => author.id === args.id)
    },
    review(_, args){
      return db.reviews.find((review) => review.id === args.id)
    }
  },
  Game: {
    reviews(parent){
      return db.reviews.filter((review) => review.game_id === parent.id)
    }
  },
  Author: {
    reviews(parent){
      return db.reviews.filter((review) => review.author_id === parent.id)
    }
  },
  Review: {
    game(parent){
      return db.games.filter((game) => game.id === parent.game_id)
    },
    author(parent){
      return db.authors.find((author) => author.id === parent.author_id) 
    }
  },
  Mutation: {
    addGame(_, args){
      db.games.push(args.game)
      return args.games
    },
    deleteGame(_, args){
      db.games = db.games.filter((game) => game.id !== args.id)
      return db.games
    },
    deleteReview(_, args){
      db.reviews = db.reviews.filter((review) => review.id !== args.id)
      return db.reviews
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log(url);