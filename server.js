const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema = require("./schema");
const app = express();

// Allow Cross-Origin
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));