// const mongoose = require('mongoose')
// // const mongoDbClient = require("mongodb").MongoClient
// const mongoURI = 'mongodb+srv://yashilbusa:Yy145214863@cluster0.ofcw2nr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// module.exports = function (callback) {
//     mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//         // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
//         if (err) console.log("---" + err)
//         else {
//             // var database =
//             console.log("connected to mongo")
//             const foodCollection = await mongoose.connection.db.collection("food_items");
//             foodCollection.find({}).toArray(async function (err, data) {
//                 const categoryCollection = await mongoose.connection.db.collection("Categories");
//                 categoryCollection.find({}).toArray(async function (err, Catdata) {
//                     callback(err, data, Catdata);

//                 })
//             });
//             // listCollections({name: 'food_items'}).toArray(function (err, database) {
//             // });
//             //     module.exports.Collection = database;
//             // });
//         }
//     })
// };

const mongoose = require('mongoose');

async function mongoDB() {
    try {
        await mongoose.connect('mongodb+srv://yashilbusa:Yy145214863@cluster0.ofcw2nr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',)
        console.log('Connected to MongoDB');
        
        const foodCollection = await mongoose.connection.db.collection("fooditems");
        foodCollection.find({}).toArray(async function (err, data) {
            if(err) console.log(err);
            else console.log(data);
        })

        const categoryCollection = await mongoose.connection.db.collection("foodcategory");
        categoryCollection.find({}).toArray(async function (err, data) {
            if(err) console.log(err);
            else console.log(data);
        })

    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = mongoDB;
