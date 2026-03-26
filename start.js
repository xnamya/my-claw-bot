const { exec } = require('child_process');
const http = require('http');

// 1. Start the OpenClaw Gateway
console.log("🚀 Initializing OpenClaw Gateway...");
const gateway = exec('npx openclaw gateway run');

gateway.stdout.on('data', (data) => console.log(`[OpenClaw]: ${data}`));
gateway.stderr.on('data', (data) => console.error(`[Error]: ${data}`));

// 2. Create the "Ping" Server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OpenClaw is Awake and Running!\n');
});

const PORT = process.env.PORT || 10000;
server.listen(PORT, () => {
    console.log(`✅ Heartbeat server active on port ${PORT}`);
});
