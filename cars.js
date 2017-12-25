const mongoose = require("mongoose");

const carDB = "mongodb://localhost/portfolio";

mongoose.connect(carDB, function () {
  const state = mongoose.connection.readyState
  if(state == 1){
    console.log("connected to mongoDB");
    console.log(`on ${carDB}`);
  }
  else{
    console.log(`problems connecting to mongoDB. Mongoose connection state is: ${state}`);
  }
})

const carSchema = new mongoose.Schema({
  title: String,
  company: String,
  doors: Number
})

const Car = mongoose.model("Car", carSchema)

// //create new document
// Car.create({title: "a5", company: "audi", doors: 4}, (err, data) => {
//   console.log(data)
// })
//
// //show all
// Car.find({}, (err, data) => {
//   console.log(data)
// })
//
// //find one or many that have
// Car.find({title: "civic"}, (err, data) => {
//   console.log(data)
// })

// //find one or many that have
// Car.update({title: "civic"}, {$set:{title: "prelude", doors: 2}}, (err, data) => {
//   console.log(data)
// })

Car.findById("5a4063a13f647821a834d32a", (err, car) => {
  car.set({ company: "BMW"});
  car.save((err,updatedCar) => {
    if (err) return handleError(err);
    console.log(updatedCar);
  });
});
