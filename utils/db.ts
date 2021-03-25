import mongoose from 'mongoose'
mongoose.connect('mongodb+srv://test:jNeyeGHSRcOlsKhM@cluster0.jllly.mongodb.net/bugTest?retryWrites=true&w=majority', {
  useNewUrlParser: true
})

export const Page = mongoose.models.Page || mongoose.model('Page', new mongoose.Schema({
  title: String,
  notFound: Boolean
}))