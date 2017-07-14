const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err) {
    console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected t MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5968deef316cc2669d1872ab')
  },{
    $set:{
      completed:true
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });


  db.close();
});
