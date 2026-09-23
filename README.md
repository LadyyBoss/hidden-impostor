# Hidden Impostor

Real-time 4–10 player social deduction game. The Node/Fastify/Socket.IO server is authoritative: secret words and roles are kept server-side and only the current player's private state is emitted to that socket.

## Local development

Requirements: Node 20+ and pnpm 10+.

```bash
pnpm install
pnpm test
pnpm build
pnpm dev
```

Open `http://localhost:5173`. The web client defaults to `http://localhost:3001`; set `VITE_SERVER_URL` for a deployed server.

## Game flow

Lobby → role reveal → sequential clues → discussion → voting → result → play again.

Reconnect tokens are stored locally in the browser. Disconnected players have a five-minute reconnect window; host control transfers automatically when the host disconnects.
