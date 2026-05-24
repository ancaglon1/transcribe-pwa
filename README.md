# Transcribe PWA

Progressive Web App for audio transcription using Whisper GPU.

## Access (public HTTPS — no Tailscale needed on device)

| URL | What | HTTPS |
|-----|------|-------|
| **https://comfy.osiris-eel.ts.net/** | PWA (Tailscale Funnel) | ✅ |
| **https://ancaglon1.github.io/transcribe-pwa/** | PWA (GitHub Pages) | ✅ |
| **https://comfy.osiris-eel.ts.net:9443/** | Whisper API (Funnel) | ✅ |

The API endpoint auto-detects based on where you access the PWA.

## Quick Start

1. Open **https://comfy.osiris-eel.ts.net/** on any device
2. Tap to choose an audio file or share audio from another app
3. Watch as the transcript streams in progressively, segment by segment
4. Copy, share, or save the result

## Features

- **Share target** — share audio from any app directly to the PWA
- **Progressive transcription** — see text appear as each segment is decoded
- **Real progress bar** — shows segment-decoded progress, not elapsed time
- **History** — browse past transcripts (last 20)
- **Copy / Share / Save buttons**

## API URL Detection

| Accessed via | API endpoint |
|---|---|
| `comfy.osiris-eel.ts.net` (HTTPS) | `https://comfy.osiris-eel.ts.net:9443` |
| `ancaglon1.github.io` (GitHub Pages) | `https://comfy.osiris-eel.ts.net:9443` |
| Local HTTP (`192.168.5.187:8080`) | `http://192.168.5.187:9000` |
| Local dev (`localhost:8080`) | `http://comfy:9000` |

Override with `?api=https://your-server:port` query parameter.

## Source

https://github.com/ancaglon1/transcribe-pwa
