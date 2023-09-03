import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { enableMapSet } from 'immer';
import { DEFAULT_PORT } from './lib/config';

enableMapSet();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get(`/api/sample`, async (req, res) => {
	res.sendStatus(StatusCodes.OK);
});

if (process.env.NODE_ENV !== 'development') {
	const { handler } = await import('../build/handler');
	// let SvelteKit handle everything else, including serving prerendered pages and static assets
	app.use(handler);
}

const PORT = process.env.PORT || DEFAULT_PORT;
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
