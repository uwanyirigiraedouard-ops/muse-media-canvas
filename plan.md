# Plan: Gebeya Dala Re-engagement Landing Page

Create a professional, high-conversion landing page for Gebeya Dala that highlights new features (Video Generation, Music Generation, Audio-to-Text Transcription) and invites returning users to share feedback.

## Scope Summary
- **Hero Section:** Engaging headline with a welcome back message and primary CTA.
- **Feature Showcase:** Interactive cards or sections for:
    - Video generation from ideas.
    - Music generation experiments.
    - Audio-to-Text (and vice-versa) transcription.
- **Projects Section:** A "Welcome Back" visual reminder that previous projects are preserved.
- **Feedback/Interaction:** A simple feedback form or "Contact Us" prompt asking "What would make it easier for you to get started again?".
- **Theme:** Clean, modern, using the existing "Gebeya" branding (logo `dist/gebeya.webp` or `public/gebeya.webp`).

## Out of Scope
- Actual AI generation backend (this is a frontend mockup/demo).
- User authentication persistence (mocked).
- Persistent database for feedback (scoped to client-side/console or basic form UI).

## Assumptions
- The logo `gebeya.webp` is the primary brand asset.
- The user request implies a marketing/re-engagement tone.

## Affected Areas
- `src/App.tsx`: Main layout and content.
- `src/components/`: New components for features and feedback.

## Phases

### Phase 1: Foundation & Brand Setup
- **Owner:** `frontend_engineer`
- **Deliverables:** Basic layout with header (logo), hero section, and responsive container.
- **Details:** Use the provided color palette from `index.css`.

### Phase 2: Feature & Projects Showcase
- **Owner:** `frontend_engineer`
- **Deliverables:** High-quality UI components for the three AI features and the "Your Projects" reminder.
- **Details:** Use icons (Lucide-react) and modern card designs.

### Phase 3: Feedback Form & Polishing
- **Owner:** `frontend_engineer`
- **Deliverables:** Re-engagement feedback section and footer.
- **Details:** Interactive form field for user suggestions.

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Build the entire landing page and interaction logic.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1, 2, 3
- **Scope:** Create a complete landing page in `src/App.tsx`. Use components from `src/components/ui/` (Card, Button, Input, Textarea, Badge) to build a professional UI.
- **Files:** `src/App.tsx`, `src/components/FeedbackForm.tsx` (optional new component).
- **Depends on:** none
- **Acceptance criteria:**
    - Page displays Gebeya branding.
    - Sections for Video, Music, and Transcription are clearly visible with descriptions from the user request.
    - "Your previous projects are still there" message is prominent.
    - A feedback form exists asking "what would make it easier for you to get started again?".
    - Responsive design (mobile/desktop).
