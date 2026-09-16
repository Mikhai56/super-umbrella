import http from 'node:http'

const port = Number(process.env.PORT || 10000)

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Super Umbrella</title>
  <style>
    *{box-sizing:border-box}body{margin:0;font-family:system-ui,-apple-system,sans-serif;background:#0f172a;color:#e2e8f0;min-height:100vh;display:grid;place-items:center}.card{width:min(92%,720px);padding:40px;border:1px solid #334155;border-radius:24px;background:#111827;box-shadow:0 20px 60px #0006}.badge{display:inline-block;padding:6px 10px;border-radius:999px;background:#1e293b;color:#93c5fd;font-size:13px}.ok{color:#86efac}h1{font-size:42px;margin:18px 0 10px}p{color:#94a3b8;font-size:18px;line-height:1.6}.status{margin-top:24px;padding:16px;border-radius:14px;background:#0b1220;border:1px solid #1e293b}</style>
</head>
<body><main class="card"><span class="badge">SUPER UMBRELLA</span><h1>It works.</h1><p>Your application is running successfully on the server.</p><div class="status"><span class="ok">● Online</span><br><small>Health check: /health</small></div></main></body>
</html>`

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, {'content-type':'application/json; charset=utf-8'})
    res.end(JSON.stringify({status:'ok', service:'super-umbrella'}))
    return
  }
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, {'content-type':'text/html; charset=utf-8'})
    res.end(html)
    return
  }
  res.writeHead(404, {'content-type':'application/json; charset=utf-8'})
  res.end(JSON.stringify({error:'Not found'}))
})

server.listen(port, '0.0.0.0', () => {
  console.log(`Super Umbrella listening on port ${port}`)
})
