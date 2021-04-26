// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectId, Db, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


const id = new ObjectId();
// console.log(id.id.length);
// console.log(id.getTimestamp());
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database');
    }

    // console.log('Connected correctly!')

    const db = client.db(databaseName);

    // db.collection('users').updateOne({
    //     _id: new ObjectID('6084f5ce8c100b1b708ed106')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').insertOne({
    //     name: 'Virat',
    //     age: 66
    // }, (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Dhoni',
    //         age: 38
    //     },
    //     {
    //         name: 'Kholi',
    //         age: 30
    //     },
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert users');
    //     }
    //     console.log(result.ops);
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Learn Mongodb',
    //         completed: false
    //     },
    //     {
    //         description: 'Create chat app',
    //         completed: false
    //     },
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks');
    //     }
    //     console.log(result.ops);
    // })


    // db.collection('users').findOne({name: 'Dhoni'}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    // })

    // db.collection('tasks').findOne({ _id: ObjectID("6084f936b6a61c55c041a82a") }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })


    db.collection('users').deleteMany({age: 23}).then((result) =>{
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})