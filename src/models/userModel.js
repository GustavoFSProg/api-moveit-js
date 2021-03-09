import { model, Schema } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: String,
  image: {
    type: String,
  },
})

export default model('userModel', schema)
