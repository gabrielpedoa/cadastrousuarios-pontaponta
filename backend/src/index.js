import express from 'express'
import cors from 'cors';
import router from './router.js';


const app = express();
const port = 3000;
app.use(cors({ credentials: true, origin: "http://localhost:5173" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router())

app.listen(port, () => {
	console.log(`server is running on ${port}`);
})

