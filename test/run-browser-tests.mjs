import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sirv from "sirv";

const serve = sirv(path.dirname(fileURLToPath(import.meta.url)), {
	dev: true,
	single: false,
});

const PORT = Number(process.env.PORT) || 4173;

const server = http.createServer((req, res) => {
	res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
	res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
	res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
	return serve(req, res)
});
server.listen(PORT);
