const express = require('express');

const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');


const schema = makeExecutableSchema({
    typeDefs: [schemaText]
});


const root = {
    products: [
        {
            id: 'redshoe',
            description: 'Red Shoe',
            price: 42.12,
        },
        {
            id: 'bluejean',
            description: 'Blue Jeans',
            price: 55.55,
        }
    ],
    orders: [
        {
            date: '2005-05-05',
            subTotal: 90.22,
            items: [
                {
                    product: {
                        id: 'redshoe',
                        description: 'Old Red Shoe',
                        price: 45.11,
                    },
                    quantity: 2,
                }
            ]
        }
    ]
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(3000, () => {
    console.log('Running GraphQL server');
});