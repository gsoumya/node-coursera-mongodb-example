const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);
    console.log('Connected correctly to server');
    const db = client.db(dbname);
    const collection = db.collection("dishes");
    dboper.insertDocument(db, { name: "Vadonut", description: "Test" },
        "dishes").then((result) => {
            console.log(result, 're');

            return dboper.findDocuments(db, "dishes")
        }).then((data) => {
            console.log(data, 'DDIIIS')

            return dboper.updateDocument(db, { name: "Vadonut" },
                { description: "Updated Test" }, "dishes")

        })
        .then((updataeddata) => {
            console.log(updataeddata, 'updataeddata')

            return dboper.findDocuments(db, "dishes")

        }).then((data) => {

            console.log(data, 'Dishes after update')
            // db.dropCollection("dishes", (result) => {
            //     console.log("Dropped Collection: ", result);

            //     client.close();
            // });





        }).catch((error) => {
            console.log(error, " error dishes errrorrrr");
        })


});