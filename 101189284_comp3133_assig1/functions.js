const MongoClient = require('mongodb').MongoClient;

const DB_URL = 'mongodb+srv://barri:test@cluster0.rpou1.mongodb.net/Hotel_System?retryWrites=true&w=majority'

function createCollection(){
    MongoClient.connect(DB_URL, (err, db) => {
        if (err) console.log("Could not connect to the db: " + err);
        else {
            console.log("Connected to the mongo database");
            var dbo = db.db();

            dbo.listCollections({ name: "hotels" })
                .next((err, collinfo) => {

                    //if the collection does not exist, then create it
                    if (!collinfo) {
                        dbo.createCollection("hotels", (err, res) => {
                            if (err) console.log(err);
                            else {
                                console.log("Collection created!");
                                db.close();
                            }

                        });
                    }
                });


        }

    });
}


const createHotel = async (args) => {
    try {
        const result = await addNewHotelToDB(args)
        return result
    }
    catch (err) {
        console.log(err)
    }

}

function addHotelToDb(args, successCallback, errorCallback) {
    MongoClient.connect(DB_URL, (err, db) => {
        if (!err) {
            const dbo = db.db()
            dbo.collection("hotels").insertOne(args, (err, res) => {
                if (!err) {
                    console.log(res.ops[0])
                    db.close();
                    successCallback(res)
                }
                else {
                    db.close();
                    errorCallback(err)
                }

            })
        }
    })
}

//wrap call to db in a promise so we can await the results
function addNewHotelToDB(args) {
    return new Promise((resolve, reject) => {
        addHotelToDb(args, (successResponse) => { resolve(successResponse) },
            (errorResponse) => { reject(errorResponse) }
        );
    });
}

const listAllHotels = async () => {
    try {
        const result = await getDbPromise(getHotelList)
        return result
    }
    catch (err) {
        console.log(err)
    }
}

//call to db here
function getHotelList(successCallback, errorCallback) {
    MongoClient.connect(DB_URL, (err, db) => {
        if (!err) {
            const dbo = db.db();
            let hotelList = dbo.collection("hotels").find({})
            hotelList.toArray((err, res) => {
                if (!err) {
                    successCallback(res)
                    db.close()
                }
                else {
                    errorCallback(err)
                }
            });
        }
    });
}

//wrap call to db in a promise so we can await the results
function getDbPromise(dbCall) {
    return new Promise((resolve, reject) => {
        dbCall((successResponse) => { resolve(successResponse) },
            (errorResponse) => { reject(errorResponse) }
        );
    });
}

const bookHotel = (booking) => {
    
}

const searchHotelByCity = (city) => {

}

const searchHotelByName = (name) => {

}

const listAllBookings = () => {

}

const createUserProfile = (user) => {
    
}

module.exports = {
    createCollection,
    createHotel,
    listAllHotels,
    bookHotel,
    searchHotelByCity,
    searchHotelByName,
    listAllBookings,
    createUserProfile
}