import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { router } from "./routes/loginRoutes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["keys"] }));
app.use(router);

app.listen(8080, () => {
  console.log("listening on port 8080");
});
