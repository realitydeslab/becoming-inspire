# Data schema — Becoming Inspire

Each research batch writes one file: `data/raw/<batch>.json`

```json
{
  "batch": "mlf",
  "creators": [ Creator, ... ],
  "works":    [ Work, ... ],
  "leads":    [ Lead, ... ]
}
```

## Creator (a person, a lab, a studio or a company)
```json
{
  "id": "marshmallow-laser-feast",           // kebab-case, unique across all batches
  "name": "Marshmallow Laser Feast",
  "kind": "studio",                          // person | lab | studio | company
  "role": "Experiential art collective, London",
  "based": "London, UK",
  "bio": "1-2 sentences, English.",
  "why": "Why they matter for becoming-more-than-human XR (1 sentence).",
  "disciplines": ["art", "film"],            // optional, 1-2 of taxonomy.disciplines: art | film | games | hci | design | science | theory
  "links": { "site": "", "scholar": "", "x": "", "instagram": "", "vimeo": "", "youtube": "", "github": "" },
  "role_zh": "…", "bio_zh": "…", "why_zh": "…", "based_zh": "伦敦，英国",   // REQUIRED Chinese versions
  "connected_to": ["barnaby-steel"],         // other creator ids (members, collaborators, same lab, advisor)
  "discovered_via": "seed"                   // creator id that led to this one, or "seed"
}
```

## Work (one artwork, film, game, prototype, paper or product)
```json
{
  "id": "marshmallow-laser-feast--in-the-eyes-of-the-animal",   // <first-creator-id>--<slug>, unique
  "creator_ids": ["marshmallow-laser-feast"],
  "title": "In the Eyes of the Animal",
  "year": 2015,                              // first public showing / publication
  "field": "animal",                         // the being you become (primary): mole | bat | fish | octopus | bird | insect | animal | fungi | tree | river | robot | foundations
  "sub": "multispecies",                     // one sub-category id of that field (data/taxonomy.json)
  "also": ["bird", "insect"],                // optional: other becomings it clearly covers
  "senses": ["vision", "hearing"],           // 1-3 of taxonomy.senses: which sense or bodily dimension is transformed
  "medium": ["vr", "installation"],          // 1-3 of taxonomy.mediums: vr | ar | mr | film360 | dome | installation | wearable | audio | game | performance | screen
  "kind": "artwork",                         // artwork | film | game | prototype | paper | product | performance | publication
  "description": "1-2 sentences, English: what it is and what the participant experiences.",
  "description_zh": "中文描述（自然流畅，不逐字翻译）",
  "idea_en": "One-line core idea in English: what it means to become this being here.",
  "idea_zh": "一句话中文：核心想法",
  "method": "One English sentence: how it works (headset, capture technique, haptics, data source). Mark guesses with 'likely'.",
  "method_zh": "中文：它是怎么做到的。",
  "keywords": ["mosquito", "owl", "dragonfly", "frog", "LiDAR", "binaural"],   // beings, techniques, proper nouns in original
  "shown_at": ["Sundance New Frontier 2016", "Abandon Normal Devices 2015"],   // optional: festivals, exhibitions, awards (proper nouns)

  "video":  { "url": "https://vimeo.com/…" },          // optional: YouTube | Vimeo | X | direct .mp4
  "images": ["https://…/hero.jpg"],                     // optional: 1-4 direct image URLs (jpg/png/webp/gif)
  "paper":  { "url": "https://doi.org/…", "doi": "10.1145/…", "arxiv": "", "venue": "CHI 2016", "title": "…" },  // REQUIRED when kind = paper
  "source_url": "https://www.marshmallowlaserfeast.com/…",   // project page / article (recommended)
  "code_url": "",
  "collections": ["sundance-new-frontier"]              // optional: collection ids (taxonomy.json or data/collections/defs/*.json)
}
```

### How to classify
- `field` = **what the participant becomes** (or whose world they enter). A VR work where you fly as an owl is `bird`, even if it is about a forest. A work about seeing with a bat's echolocation is `bat`. Whales go to `fish`/`cetacean` (add `also: ["bat"]` if echolocation is central).
- Works that move through many animals → `animal`/`multispecies` with `also` listing the others.
- Plants and trees → `tree`; fungi, slime mould, microbes, cells → `fungi`; water, air, rock, planets → `river`; robots, AI, drones, objects, cyborg sensory devices → `robot`.
- Theory, surveys, critiques, embodiment science → `foundations`.
- Only include works where the participant **becomes, embodies or perceives as** a more-than-human being or thing (first-person perspective, sensory translation, embodiment, or perceptual crossing). A nature documentary in VR that only *shows* animals is out, unless it is a landmark others respond to; then use `screen`/`film360` and say why in `idea_en`.
- Related non-XR works (sensory-augmentation wearables, games, performances) are in scope when they make the body or senses become other.

Rules:
- Every work needs **at least one** of `video`, `images`, `paper`. Aim for a visual (video or image) on every work.
- `paper.doi` is checked against Crossref and `paper.arxiv` against arXiv at build: use the real DOI, never a guess.
- Images: direct URLs to image files (`og:image` of the project page is usually best). Must return `image/*`.
- Videos: prefer the creator's own upload (trailer / documentation).

Verify media before writing (all must print `"ok": true`):
```
python3 tools/check_media.py <video-or-image-url> ...
python3 tools/check_media.py --doi 10.1145/2702123.2702611
python3 tools/check_media.py --arxiv 2301.01234
python3 tools/check_media.py --og <project-page-url>      # lists og:image / twitter:image / large <img> candidates
```

## Collections
A collection is a named set of works: a festival or exhibition line-up, the corpus of a survey paper, an award, the book's portfolio.
Defined in `data/taxonomy.json` → `collections` (`id, type, en, zh, desc_en, desc_zh, url`). `type`: `book` | `exhibition` | `festival` | `survey` | `award` | `venue`.
A work joins by listing the id in its `collections`, or by adding its work id to `data/collections/<collection-id>.json`
(a JSON list of work ids — use this for works that already exist in another batch).
New collections: do not edit taxonomy.json — define them in `data/collections/defs/<your-batch>.json` (a JSON list of collection objects); the build merges them.

## Extra media (`data/media/<name>.json`)
`{ "<work-id>": { "images": ["https://…"], "video": { "url": "https://…" } } }` — images appended (max 4), a video used only when the work has none.

## Lead (person/studio/work found but not researched in this batch)
```json
{ "name": "…", "why": "…", "link": "…", "found_via": "creator id", "status": "open" }   // open | no_media | off_topic | duplicate
```

## Language rule
Every user-facing text exists in BOTH languages, never mixed inside one field (proper nouns — titles,
people, studios, species names, festivals — stay in the original).
English fields: description, idea_en, method, role, bio, why, based.
Chinese fields: description_zh, idea_zh, method_zh, role_zh, bio_zh, why_zh, based_zh.
Run `python3 tools/validate.py data/raw/<file>.json` before building.
