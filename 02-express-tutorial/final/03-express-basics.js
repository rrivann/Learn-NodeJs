const app = require('express')();

app.get('/', (req, res) => {
  res.status(200).send('Home');
});
app.get('/about', (req, res) => {
  res.status(200).send('about');
});
app.all('*', (req, res) => res.status(404).send('not Found'));

app.listen(4000);
