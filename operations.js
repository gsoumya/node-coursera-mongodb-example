const assert = require('assert');


// callback type
/**
 * exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
        assert.equal(err, null);
        console.log("!Inserted " + result.result.n +
            " documents into the collection " + collection);
        callback(result);
    });
};
exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        callback(docs);        
    });
};
**/

// promise type
exports.insertDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.insert(document)
};
exports.findDocuments = (db, collection) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray()
};

exports.removeDocument = (db, document, collection) => {
    const coll = db.collection(collection);
  return  coll.deleteOne(document)
};

exports.updateDocument = (db, document, update, collection) => {
    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update }, null)
};
