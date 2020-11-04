const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://Fdo':330020.f@cluster0.wzrru.mongodb.net/MultistepCheckout?retryWrites=true&w=majority"
const connect = mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log("mongodb connected"))
.catch(err => console.log(err));

let userSchema = mongoose.schema({
  name: {
    type: String
  },
  email: {
    type: Email,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  street: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  creditCardNo: {
    type: String,
    required: true,
    unique: true
  },
  expiryDate: {
    type: String,
    required: true
  },
  cvv: {
    type: String,
    required: true,
    unique: true
  },
  billingZipCode: {
    type: String,
    required: true
  }
});

module.exports;
