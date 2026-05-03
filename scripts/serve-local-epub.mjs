import { Server } from "r2-streamer-js";
import path from "path";

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error("Please provide a path to an EPUB file.");
    process.exit(1);
}

const epubPath = path.resolve(args[0]);
console.log(`Starting server for: ${epubPath}`);

const server = new Server();
server.addPublications([epubPath]);

server.start(3001, false).then(() => {
    const manifestUrl = `http://127.0.0.1:3001/pub/${encodeURIComponent(Buffer.from(epubPath).toString("base64"))}/manifest.json`;
    console.log(`Server started on port 3001`);
    console.log(`Manifest URL: ${manifestUrl}`);
    console.log(`\nTo read this in Thorium Web, navigate to:`);
    console.log(`http://localhost:3000/read/manifest/${encodeURIComponent(manifestUrl)}`);
}).catch(err => {
    console.error(err);
});
