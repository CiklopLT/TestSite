import express from 'express';
import bodyParser from 'body-parser';
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Pages {
        title: String
        subPages: [String]
    }

    type Inquiry {
        firstName: String
        lastName: String
        message: String
    }
    
    type Query {
        pages: [Pages]
    }

    type Mutation {
        submitForm(firstName: String!, lastName: String!, message: String!): Inquiry,
    }
`;

const mockPages = [
  {
    title: 'Projects',
    subPages: ['Link1', 'Link2', 'Link3', 'Link4', 'Link5'],
    content: {
      title: 'Lorem ipsum dolor sit met, consecte',
      body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
    }
  },
  {
    title: 'About us',
    subPages: [],
  },
  {
    title: 'Testimonials',
    subPages: [],
  },
  {
    title: 'Contacts',
    subPages: [],
  }
]

const resolvers = {
  Query: {
    pages: () => mockPages,
  },
  Mutation: {
    submitForm: async (_, { firstName, lastName, message }) => {
      console.log(firstName, lastName, message)
    }
  },
};

const PORT = 4000;
const server = new ApolloServer({ typeDefs, resolvers });
const app = express();

server.applyMiddleware({ app });

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
