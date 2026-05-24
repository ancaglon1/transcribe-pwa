# Transcribe PWA

Progressive Web App for audio transcription using Whisper GPU.

## Access (public HTTPS via Tailscale Funnel)

| URL | What |
|-----|------|
| **https://comfy.osiris-eel.ts.net/** | PWA + API (same origin, no CORS issues) |

The API is available at `https://comfy.osiris-eel.ts.net/api/` (proxied to Whisper on port 9000).

## Quick Start

1. Open **https://comfy.osiris-eel.ts.net/** on any device
2. Tap to choose audio or share from another app
3. Watch the transcript stream in progressively

## Features

- **Share target** — share audio from any app directly to the PWA
- **Progressive transcription** — text appears segment by segment
- **Real progress bar** — shows actual segment-decoded progress
- **Copy / Share / Save buttons**
- **History** — last 20 transcripts (browser-local timezone)

## API URL

Overrides with `?api=` query parameter if needed.

## Source

https://github.com/ancaglon1/transcribe-pwa
