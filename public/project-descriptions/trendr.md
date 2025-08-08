### [Problem]

Modern trend scouting is fragmented, noisy, and reactive.  
Creators, investors, and brands lack a centralized and predictive system to monitor high-signal trend surges across platforms and categories with actionable outcomes.

### [Solution & Core Architecture]

Trendr ingests real-time data from Reddit, TikTok, Twitter/X, Product Hunt, and other sources.  
It then applies a custom-built scoring model to evaluate:

- **Pulse** – velocity of mentions across time  
- **Mood** – semantic sentiment analysis with toxicity filters  
- **Span** – predicted lifecycle window using weighted decay functions  

Each “trend” is a `TrendEntity` with dynamic `TrendVitals`, grouped into macro Waves like Crypto, Watches, or Tech Drops.

### [Feature Snapshot]

- Custom ingestion pipelines (Python, async scraping + APIs)  
- Modular scoring engine (rule-based + statistical logic)  
- Interactive web client (trend filtering, smart alerts)  
- Planned: vector store for semantic similarity analysis  

### [Tech Stack]

**Frontend**:  
React, TailwindCSS, Framer Motion, SWR  

**Backend**:  
FastAPI, PostgreSQL (UUIDs), Redis, Celery  

**Infra**:  
Supabase, Railway (CI/CD), Docker, Modular ETL  

### [My Role]

I built the full-stack architecture end-to-end:  
- Scoring engine  
- Data normalization  
- UI/UX  
- API layer  
- DB schema & migrations  

### [Current Status]

- MVP pipeline: ingestion + scoring  
- UI: TrendBase + Wave Explorer in progress  
- Gathering early feedback (Notion + newsletter)

### [Roadmap]

- V1: Freemium dashboard  
- V2: Semantic clustering + resale estimation  
- V3: Community voting layer

### [Long-term Vision]

A vertical **Bloomberg Terminal** for internet-native cultural assets —  
predictive insights, collaborative trend discovery, deep analytics.
