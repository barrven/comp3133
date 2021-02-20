var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const mongoose = require('mongoose')
const dbHelper = require('./dbHelper')

const DB_URL = 'mongodb+srv://barri:test@cluster0.rpou1.mongodb.net/Hotel_System?retryWrites=true&w=majority'

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log("Successfully connected to the database mongoDB Atlas Server")
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err)
        process.exit()
    })

//gql schema
var schema = buildSchema(`
    type Query {
        list_hotels: [Hotel]
        search_hotel(hotel_name: String, city: String): [Hotel]
        list_bookings: [Booking]
    },
    type Mutation {
        create_hotel(hotel_id: Int!, hotel_name: String!, city: String): Hotel
        create_booking(hotel_id: Int!, user_id: Int!): Booking
        create_profile(user_id: Int!, username: String!): User
    },
    type Hotel {
        hotel_id: Int
        hotel_name: String
        street: String
        city: String
        postal_code: String
        price: Float
        email: String
        user_id: Int
    },
    type Booking {
        hotel_id: Int
        booking_date: String
        booking_start: String
        booking_end: String
        user_id: Int
    },
    type User {
        user_id: Int
        username: String
        password: String
        email: String
    }
`);

//Declare Resolver
var root = {
    create_hotel: dbHelper.createHotel, //mutation
    list_hotels: dbHelper.listAllHotels, //query
    create_booking: dbHelper.bookHotel, //mutation
    search_hotel: dbHelper.searchHotel, //query
    list_bookings: dbHelper.listAllBookings, //query
    create_profile: dbHelper.createUserProfile //mutation
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,     //Set schema
    rootValue: root,    //Set resolver
    graphiql: true      //Client access
}));

app.listen(4002, () => {
    console.log('Express GraphQL Server Now Running On http://localhost:4002/graphql')
});