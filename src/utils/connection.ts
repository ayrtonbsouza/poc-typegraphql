import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://admin:admin@cluster0.zwrvs.mongodb.net/poc?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})