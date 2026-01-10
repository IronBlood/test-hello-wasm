import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sirv from "sirv";

const serve = sirv(path.dirname(fileURLToPath(import.meta.url)), {
	dev: true,
	single: false,
});

const server = http.createServer((req, res) => {
	res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
	res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
	res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
	return serve(req, res)
});
await new Promise((r) => server.listen(0, r));
const { port } = server.address();
console.log(`http://127.0.0.1:${port}/test.html`);
