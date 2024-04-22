const express = require('express');
const userRoutes = require('./users/routes');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1/users', userRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});