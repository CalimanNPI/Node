const User = require("../models/user.js");
const Car = require("../models/car.js");
module.exports = {
  test: function () {
    User.find({}, function (err, users) {
      console.long("callback");
      /*
      aqui van mucghas funciones 
      las callback son llamadas asyncronas o http,
       usando codigo dificil de mantener 
      */
    });

    User.find({})
      .then(() => {})
      .catch(() => {});
    /*
      las promesas  son mucho más faciles de mantener 
      */
  },

  index: async (req, res, next) => {
    const users = await User.find({});
    //throw new Error('dummy error')
    res.status(200).json(users);
    /** esta  froma es mas simple usando async await  */
  },

  newUser: async (req, res, next) => {
    const newUser = new User(req.body);
    const user = await newUser.save();
    res.status(200).json(user);
  },

  getUser: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId);
    res.status(200).json(user);
  },

  replaceUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json({ success: true });
  },

  updateUser: async (req, res, next) => {
    const { userId } = req.params;
    const newUser = req.body;
    const oldUser = await User.findByIdAndUpdate(userId, newUser);
    res.status(200).json(oldUser); //({ success: true });
  },

  deleteUser: async (req, res, next) => {
    const { userId } = req.params;
    const old = await User.findByIdAndRemove(userId);
    res.status(200).json({ success: true });
  },

  getUserCars: async (req, res, next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('cars');
    res.status(200).json(user);
  },

  newUserCar: async (req, res, next) => {
    const { userId } = req.params;
    const newCar = new Car(req.body);
    const user = await User.findById(userId);
    newCar.seller = user;
    await newCar.save();
    user.cars.push(newCar);
    await user.save();
    res.status(201).json(newCar);
  },
};
