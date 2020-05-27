const app = require("./app");

const port = 27017;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
