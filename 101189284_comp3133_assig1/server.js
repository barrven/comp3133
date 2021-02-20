var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

const functions = require('./functions')

functions.createCollection()

//gql schema
var schema = buildSchema(`
    type Query {
        list_hotels: [Hotel]
        search_hotel_name(name: String): [Hotel]
        search_hotel_city(city: String): [Hotel]
        list_bookings: [Booking]
    },
    type Mutation {
        create_hotel(hotel_id: Int!, hotel_name: String!): Hotel
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
    create_hotel: functions.createHotel, //mutation
    list_hotels: functions.listAllHotels, //query
    create_booking: functions.bookHotel, //mutation
    search_hotel_city: functions.searchHotelByCity, //query
    search_hotel_name: functions.searchHotelByName, //query
    list_bookings: functions.listAllBookings, //query
    create_profile: functions.createUserProfile //mutation
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