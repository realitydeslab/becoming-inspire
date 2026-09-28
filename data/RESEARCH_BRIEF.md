# Research brief (for every research agent)

Project: **Becoming Inspire** — a bilingual (English / Simplified Chinese) gallery of works that use XR and
sensory technology to let people **become** another being or thing: an animal, a plant, a fungus, a river,
a robot. Made by Reality Design Lab as research material for the book *Experiencing More-than-Humans:
Augmented Noticing through Extended Reality* (Hu, Huang & Shin), whose chapters are Becoming Mole, Bat,
Fish, Octopus, Fungi, Tree, River and Robot. Working dir: `/Users/amber/Projects/HoloKit/HoloKit2/becoming-inspire`.

Read first: `data/SCHEMA.md` (JSON format, how to classify, language rule) and `data/taxonomy.json`
(field / sub / senses / mediums / kinds / collections ids).

## What to collect
- Every work you can find **in your scope** where a participant becomes, embodies, or perceives as a
  more-than-human being: VR/AR/MR artworks, immersive films, games, installations, sensory-substitution
  and augmentation wearables, research prototypes and papers. Breadth first, then depth: for each key
  creator, collect **all** their relevant works.
- Every work: bilingual text, correct classification, and as many of these as exist:
  **video** (YouTube / Vimeo trailer or documentation), **images** (1–3 direct URLs), **paper** (DOI / arXiv, with venue),
  `source_url` (project page), `shown_at` (festivals, exhibitions, awards).
- Aim for a visual on every work. Good image sources: the project page's `og:image`
  (`python3 tools/check_media.py --og <page>`), studio pages, festival catalogue pages (Venice, Sundance,
  Tribeca, IDFA DocLab, Ars Electronica), arXiv HTML figures. Avoid Instagram / Pinterest / Facebook CDN links (they expire).
- Verify everything with `python3 tools/check_media.py` before writing it. Keep only `"ok": true`.
  Check that a DOI's returned title really is the work — never guess a DOI.
- Year = year of first public showing / publication.

## Writing
- `description`: 1–2 sentences, concrete: what it is and what the participant experiences.
- `idea_en`: the one-line idea a designer should take away — what "becoming" means in this work.
- `method`: how it works (hardware, capture, haptics, scent, data), one sentence.
- Chinese versions natural, not word-for-word. Plain, precise language. No hype ("groundbreaking", "revolutionary", "stunning").

## Output
- One file `data/raw/<your-batch>.json` (`"batch": "<your-batch>"`), creators + works + leads. Split into
  `<your-batch>-2.json` if large.
- Before creating a creator, `grep -ril "<surname or studio>" data/raw/` — other agents run in parallel. If the
  creator exists, reuse that id (you may still add works in your scope). Before adding a famous work, grep its
  title too; if it exists, skip it (or add the work id to a collection file) rather than duplicating it.
- Creator ids: kebab-case of the name. Work id: `<first-creator-id>--<short-slug>`.
- New collections (festivals, exhibitions, surveys): `data/collections/defs/<your-batch>.json`.
- Run `python3 tools/validate.py data/raw/<file>.json` until it prints ✓.
- `leads`: people / studios / works you found but did not research.
- Do NOT use the Chrome browser tools (shared). Use WebSearch / WebFetch and `curl`. Web search is a shared,
  limited budget: prefer fetching known pages (studio sites, festival catalogues, DBLP, Crossref, YouTube search
  pages via curl) over many broad searches.
- Keep helper scripts in your own folder `temp/<your-batch>/`. Do NOT touch files outside `data/raw/`,
  `data/collections/`, `data/media/` and `temp/<your-batch>/`.

## Report back (short)
File(s) written, number of creators and works, how many have video / images / paper, notable gaps, top leads.
