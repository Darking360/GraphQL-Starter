const express = require('express')
const expressGraphQl = require('express-graphql')
const schema = require('./schema/schema')

const app = express();

app.use('/graphql', expressGraphQl({
  graphiql: true,
  schema
}))

app.listen(4000, () => {
  console.log("Magin happening on port 3000");
});



