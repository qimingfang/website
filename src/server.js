import path from 'path'
import express from 'express'

export const app = express()

// view engine setup
app.use('/', express.static(path.join(__dirname, '/public')))

const address = process.env.OPENSHIFT_NODEJS_IP || 'localhost'
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000

app.listen(port, address, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('server started')
})
