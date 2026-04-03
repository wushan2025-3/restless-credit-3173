const html = `<!DOCTYPE html>
<body>
  <h1>Hello World!RWA重构功能走SPA</h1>
</body>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

export default {
  async fetch(request) {
    return handleRequest(request);
  }
};
