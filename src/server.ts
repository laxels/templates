import bodyParser from 'body-parser';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { enableMapSet } from 'immer';
import { DEFAULT_PORT } from './lib/config';

enableMapSet();

const app = express();
app.use(bodyParser.json());

// Sample API route
app.get(`/api`, async (req, res) => {
	res.sendStatus(StatusCodes.OK);
});

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'integration') {
	const { handler } = await import('../build/handler');
	// let SvelteKit handle everything else, including serving prerendered pages and static assets
	app.use(handler);
}

const PORT = process.env.PORT || DEFAULT_PORT;
app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});
