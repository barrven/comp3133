const mongoose = require('mongoose')

//blank models because schema is already taken care of with graphql
const Hotel = mongoose.model("Hotels", new mongoose.Schema({}, { strict: false }))
const Booking = mongoose.model("Bookings", new mongoose.Schema({}, { strict: false }))

//adding unique constraints and validation to user through mongoose model
const User = mongoose.model("Users", new mongoose.Schema({
    user_id: {
        type: Number,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    }
}))


//wrap some methods in a promise in order to get the correct response
function wrapFunction(func, args) {
    return new Promise((resolve, reject) => {
        func(args, (success) => resolve(success), (error) => reject(error))
    })
}


const createHotel = async (args) => {
    try{
        const result = await wrapFunction(addHotelToDb, args)
        return result
    }
    catch(err){
        console.log(err)
    }
}

//helper function to be wrapped in wrapFunction
function addHotelToDb(args, onSuccess, onError){
    const hotel = new Hotel(args)
    hotel.save((err, success) => {
        if (err){
            console.log(err)
            onError(err)
        }
        else {
            console.log(success)
            onSuccess(success)
        }
    })
}

const listAllHotels = async () => {
     //lean() causes mongoose to return json instead of instance of query class
    const hotelList = await Hotel.find({}).lean()
    return hotelList
}


const bookHotel = async (args) => {
    try {
        const result = await wrapFunction(addBookingToDb, args)
        return result
    }
    catch (err) {
        console.log(err)
    }
}

//helper function to be wrapped in wrapFunction
function addBookingToDb(args, onSuccess, onError){
    let d = new Date()
    args.booking_date = d.getDate() +'-'+ (d.getMonth()+1)+'-'+ d.getFullYear()
    
    const booking = new Booking(args)
    booking.save((err, success) => {
        if (err) {
            console.log(err)
            onError(err)
        }
        else {
            console.log(success)
            onSuccess(success)
        }
    })
}


const searchHotel = async (args) => {
    const hotelList = await Hotel.find(args).lean()
    return hotelList
}

const listAllBookings = async () => {
    const bookingsList = await Booking.find({}).lean()
    return bookingsList
}

const createUserProfile = async (args) => {
    try {
        const result = await wrapFunction(addUserToDb, args)
        return result
    }
    catch (err) {
        console.log(err)
    }
}

function addUserToDb(args, onSuccess, onError){
    const user = new User(args)
    user.save((err, success) => {
        if (err) {
            console.log(err)
            onError(err)
        }
        else {
            console.log("Created a user")
            onSuccess(success)
        }
    })
}

module.exports = {
    createHotel,
    listAllHotels,
    bookHotel,
    searchHotel,
    listAllBookings,
    createUserProfile
}