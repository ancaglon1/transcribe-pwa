const CACHE_NAME = 'transcribe-v1';
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('fetch', e => {
  if (e.request.method === 'POST' && e.request.url.endsWith('/share')) {
    e.respondWith(handleShare(e.request));
  }
});

async function handleShare(request) {
  const formData = await request.formData();
  const audio = formData.get('audio');
  if (!audio) return Response.redirect('/?error=no-file');

  // Use dynamic hostname from the request — not hardcoded
  const reqUrl = new URL(request.url);
  // HTTPS (Tailscale) → port 9443, HTTP → port 9000
  // GitHub Pages hostname → use Tailscale hostname instead
  const apiPort = reqUrl.protocol === 'https:' ? '9443' : '9000';
  const host = reqUrl.hostname.endsWith('.github.io') ? 'comfy.osiris-eel.ts.net' : reqUrl.hostname;
  const apiBase = host === 'localhost' || host === '127.0.0.1'
    ? 'http://comfy:' + apiPort
    : reqUrl.protocol + '//' + host + ':' + apiPort;

  const body = new FormData();
  body.append('file', audio, audio.name);

  try {
    const resp = await fetch(apiBase + '/transcribe', { method: 'POST', body });
    if (!resp.ok) return Response.redirect('/?error=upload-' + resp.status);
    const data = await resp.json();
    if (!data.job_id) return Response.redirect('/?error=no-job-id');
    return Response.redirect('/?job=' + data.job_id);
  } catch (e) {
    return Response.redirect('/?error=network');
  }
}
