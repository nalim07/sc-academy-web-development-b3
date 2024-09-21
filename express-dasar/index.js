import express from "express";
import route from "./route.js";

const app = express();
const port = 5000;

app.use(route);
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});


