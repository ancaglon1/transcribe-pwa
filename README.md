# Transcribe PWA

Progressive Web App for audio transcription using Whisper GPU.

## Access

| Source | URL | HTTPS |
|--------|-----|-------|
| **GitHub Pages** | https://ancaglon1.github.io/transcribe-pwa/ | ✅ |
| **Tailnet (Tailscale)** | https://comfy.osiris-eel.ts.net/ | ✅ |
| **Local network** | http://comfy:8080 or http://192.168.5.187:8080 | ❌ |

## Features

- Share target — share audio from any app directly to the PWA
- Progressive transcription — see text appear segment by segment
- Real progress bar — shows actual segment-decoded progress, not elapsed time
- History — browse past transcripts (last 20)
- Copy / Share / Save buttons

## API URL

The PWA auto-detects the Whisper API endpoint based on how it's accessed:

| Accessed via | API endpoint |
|---|---|
| GitHub Pages (`ancaglon1.github.io`) | `https://comfy.osiris-eel.ts.net:9443` |
| Tailscale HTTPS (`comfy.osiris-eel.ts.net`) | `https://comfy.osiris-eel.ts.net:9443` |
| Local HTTP (`192.168.5.187:8080`) | `http://192.168.5.187:9000` |
| Local dev (`localhost:8080`) | `http://comfy:9000` |

Override with `?api=https://your-server:port` query parameter.

## Prerequisites

- Whisper API server running on comfy:9000
- Tailscale on comfy for HTTPS (optional but recommended)
