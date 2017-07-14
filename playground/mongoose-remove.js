const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

//Todo.remove
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findByIdAndRemove('596936ec316cc2669d187db8').then((todo)=>{
  console.log(todo);
});
Todo.findOneAndRemove('596936ec316cc2669d187db8').then((todo)=>{
  console.log(todo);
});
