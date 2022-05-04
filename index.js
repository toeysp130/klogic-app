// const express = require('express')
// const cors = require('cors')
// const app = express()
// const port = 3500

// app.use(cors())
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`app listening at http://localhost:${port}`)
// })

// const { MongoClient } = require('mongodb')
// const cli = require('nodemon/lib/cli')
// const uri = 'mongodb://admin:9tfDLDrHJI@node31351-klogic-app.app.ruk-com.cloud:11338'
// const client = new MongoClient(uri)
// //client.connect()
// //client.once("open",() => {console.log("connected to mongoDB ")})

// app.post('/users/create',async (req,res) => {
//     const user = req.body
//     await client.connect()
//     await client.db('KlogicDB').collection('users').insertOne({
//         id_user : user.id_user,
//         fname : user.fname,
//         lname : user.lname,
//         email : user.email
//     })
//     await client.close()
//     res.status(200).send({
//         'status' : 'ok',
//         'message' : 'user with ID ' + user.id + 'is created',
//         'user' : user
//     })
// })

// app.get('/users', async(req, res) => {
//   const id = parseInt(req.params.id);
//   await client.connect();
//   const users = await client.db('KlogicDB').collection('users').find({}).toArray();
//   await client.close();
//   res.status(200).send(users);
// })

// app.get('/users/:id', async(req, res) => {
//     const id = req.params.id;
//     await client.connect();
//     const user = await client.db('KlogicDB').collection('users').findOne({"id_user": id});
//     await client.close();
//     res.status(200).send({
//       "status": "ok",
//       "user": user
//     });
//   })


// app.put('/users/update', async(req, res) => {
//     const user = req.body;
//     const id = user.id_user;
//     await client.connect();
//     await client.db('KlogicDB').collection('users').updateOne({'id_user': id}, {"$set": {
//         id_user: user.id_user,
//         fname: user.fname,
//         lname: user.lname,
//         email: user.email,
//     }});
//     await client.close();
//     res.status(200).send({
//       "status": "ok",
//       "message": "User with ID = "+id+" is updated",
//       "user": user
//     });
//   })

// app.delete('/users/delete', async(req, res) => {
//     const id = req.body.id_user;
//     await client.connect();
//     await client.db('KlogicDB').collection('users').deleteOne({'id_user': id});
//     await client.close();
//     res.status(200).send({
//       "status": "ok",
//       "message": "User with ID = "+id+" is deleted"
//     });
//   })

//   app.post('/users/login/:id_user/:password',async (req,res) => {
    
//     await client.connect()
//     await client.db('KlogicDB').collection('users').findOne({
//         id_user : req.params.id_user,
//         password: req.params.password
//     } , (error,result)=> {
//       // res.json(data)
//       console.log(result);

//     })
//     // if(login_user == user.id_user){
//     //   console.log("loin complete")
//     // }else{
//     //   res.send('not found user')
//     // }
//     await client.close()
//     // res.status(200).send({
//     //     'status' : 'ok',
//     //     'message' : 'user ' + user.id + 'is Login',
//     //     'user' : user
//     // })
// })

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const database = require('./database.config');


// Connect to mongo 
mongoose.Promise = global.Promise;

mongoose.connect(database.db , {
  useNewUrlParser:true,
  useUnifiedTopology:true
}).then(() => {
  console.log("Database connected Yeeeeeeeh");
}), error=>{
  console.error("Can't connect to database" , error);
}


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());


// declare user API
const userAPI = require('./routes/users.routes');
// use user API
app.use("/api/users" , userAPI);

//  declare subject API
const subjectAPI = require('./routes/subject.routes');
app.use('/api/subject'  , subjectAPI);


// declare port
const server = app.listen(9999 , () => {
  console.log("Connected to port 9999 !!!");
})


