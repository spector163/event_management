import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.route.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Register global middlewares

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.get("/", (req, res) => {
	res.send("ok");
});

app.use("/api", routes);
app.use(errorHandler);

export { app };
