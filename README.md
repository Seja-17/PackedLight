# PackedLight — Module 1 Foundation

PackedLight is an AI-powered travel planning and community platform.

## Tech stack

| Layer | Technology |
|--------|------------|
| Frontend | React, Vite, Tailwind CSS, React Router, Axios |
| Backend | FastAPI, SQLAlchemy, Alembic, Pydantic |
| Database | PostgreSQL (Supabase in production) |
| AI | Google Gemini (later modules) |
| Maps | Leaflet + OpenStreetMap (later modules) |
| Deploy | Vercel (frontend), Render (backend) |

## Project structure

```
PackedLight/
├── frontend/                 # React SPA
│   └── src/
│       ├── app/              # Router and root App shell
│       ├── components/
│       │   ├── layout/       # Navbar, Footer, CurrencyConverter
│       │   ├── dashboard/    # Dashboard widget shells
│       │   └── ui/           # Shared UI primitives
│       ├── features/         # Feature modules (Module 2+)
│       ├── hooks/            # Custom React hooks
│       ├── lib/              # Theme, API client, AI scope constants
│       ├── pages/            # Route-level page components
│       ├── styles/           # Tailwind @theme tokens
│       └── types/            # Shared TypeScript types
├── backend/
│   └── app/
│       ├── api/v1/           # Versioned REST routes
│       ├── core/             # Config, logging, JWT utilities
│       ├── db/               # SQLAlchemy base and sessions
│       ├── models/           # ORM models (Module 2+)
│       ├── schemas/          # Pydantic request/response models
│       ├── services/         # Business logic (Module 2+)
│       ├── repositories/     # Data access (Module 2+)
│       └── utils/            # Shared helpers
└── backend/alembic/          # Database migrations
```

### Why each folder exists

| Folder | Purpose |
|--------|---------|
| `frontend/src/app` | Application shell: routing and top-level providers |
| `frontend/src/components/layout` | Persistent chrome (nav, footer, global currency converter) |
| `frontend/src/components/dashboard` | Reusable dashboard widget layout |
| `frontend/src/features` | Self-contained feature code added module-by-module |
| `frontend/src/lib` | Cross-cutting utilities (API, theme, AI scope) |
| `frontend/src/pages` | One component per route |
| `backend/app/api/v1` | Versioned API surface for future mobile clients |
| `backend/app/core` | Settings, logging, security helpers |
| `backend/app/db` | Database engine and session dependency |
| `backend/app/models` | SQLAlchemy ORM definitions |
| `backend/app/schemas` | API validation separate from DB models |
| `backend/app/services` | Business rules isolated from HTTP layer |
| `backend/app/repositories` | Query logic isolated from services |

## Installation

### Prerequisites

- Node.js 20+
- Python 3.11+
- PostgreSQL (local or Supabase)

### Backend

```bash
cd backend
cp .env.example .env
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Verify it works

### Backend health check

```bash
curl http://localhost:8000/api/v1/health
```

Expected JSON:

```json
{"status":"ok","environment":"development","version":"0.1.0"}
```

Or run tests:

```bash
cd backend && source .venv/bin/activate && pytest
```

### Frontend

1. Open [http://localhost:5173](http://localhost:5173)
2. Navigate via navbar: Explore, Blogs, Community, Dashboard
3. Confirm currency converter appears in the header (desktop)
4. Open `/packing-checklist` from the dashboard widget
5. Home page shows travel-only AI capability lists

### API docs (development)

[http://localhost:8000/docs](http://localhost:8000/docs)

## Module 1 scope (complete)

- React + Vite + Tailwind + React Router
- Layout, Navbar, Footer, global styles, theme tokens
- Axios API client
- Placeholder pages: Home, Explore, Blogs, Community, Dashboard, Login, Signup, 404
- Packing checklist page (layout shell)
- Dashboard widgets including **Recently viewed countries**
- Community sections: **Questions**, **Discussions**, **Travel tips**
- Header **currency converter** (globally accessible, no per-page duplication)
- Travel-only **AI capabilities** defined in `frontend/src/lib/ai-capabilities.ts`
- FastAPI with CORS, logging, `/api/v1/health`
- SQLAlchemy base + Alembic configured (no models yet)
- JWT utilities prepared (no auth routes)

## Common beginner mistakes

1. **Forgetting `.env` files** — copy `.env.example` in both `frontend/` and `backend/`.
2. **Wrong API URL** — `VITE_API_BASE_URL` must have no trailing slash.
3. **CORS errors** — add your frontend origin to `CORS_ORIGINS` in backend `.env`.
4. **Running uvicorn from repo root** — run from `backend/` so `app` imports resolve.
5. **Skipping venv** — install Python deps inside `.venv` to avoid version conflicts.
6. **Expecting Module 1 to have auth/data** — login, countries, and AI are later modules.

## Next module

Module 2 will add authentication (JWT), user models, and protected routes.
