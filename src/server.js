import path from 'path'
import express from 'express'

export const app = express()

// view engine setup
app.use('/public', express.static(path.join(__dirname, '/../public')))
app.listen((process.env.PORT || 5000), (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('server started')
})
