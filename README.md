# Becoming Inspire

**https://becoming.reality.design**

Become more than human. A bilingual (English / 中文) gallery of **embodied, whole-body, immersive XR works** in which the participant **becomes another being or thing**: hear space as a bat, feel the ground as a mole, swim as a fish, move as an octopus, fly as a bird, breathe as a tree, flow as a river, see as a machine. It includes XR artworks, immersive films, VR games and XR research prototypes. Screen games, films you only watch, audio works, stand-alone wearables and theory are deliberately left out. Every work has its core idea, how it works, and links to its video, images and paper.

Built by [Reality Design Lab](https://reality.design) as research material for the book *Experiencing More-than-Humans: Augmented Noticing through Extended Reality* (Botao Amber Hu, Danlin Huang, Jae-eun Shin). It is a sibling of [More than Human Inspire](https://more-than-human.reality.design).

## What's inside

- **Atlas**: the becomings, following the book's chapters.
  - Becoming Mole: touch-first worlds, underground life, reduced sight.
  - Becoming Bat: echolocation, sonic umwelten.
  - Becoming Fish: fish, whales and dolphins, reefs and plankton.
  - Becoming Octopus: cephalopods, tails and extra limbs, shared bodies.
  - Becoming Bird: flight, avian senses, flocks.
  - Becoming Insect: bees, ants, butterflies and spiders.
  - Becoming Animal: companion, farm and wild animals, reptiles, many species.
  - Becoming Fungi: mycelium, slime mould, microbes, symbiosis.
  - Becoming Tree: trees, plants, forests.
  - Becoming River: water, air and breath, rock and deep time, planets.
  - Becoming Chair: furniture, objects and things.
  - Becoming AI: seeing as a model, being an AI agent, data and networks.
  - Becoming Robot: robot, drone and vehicle bodies, telepresence, cyborg senses.
  - Foundations: theory, embodiment science, surveys, critique, methods.
- **All works**: filter by becoming, sense (echolocation, touch, magnetic sense, time and scale, …), medium (VR, AR, MR, dome, installation, wearable, spatial audio, game, performance), type, collection and era. Includes full-text search.
- **Collections**: the book's portfolio and its named counterpoints, festival line-ups (Venice Immersive, Sundance New Frontier, Tribeca, IDFA DocLab, Ars Electronica, …), exhibitions and survey corpora.
- **Papers**, **Creators**, **Starred** (export as `SKILL.md`, `README.md` or a reading list).

## For AI assistants

- [`llms.txt`](llms.txt): index
- [`catalog.md`](catalog.md) / [`catalog.zh.md`](catalog.zh.md): full catalog
- [`data/entries.json`](data/entries.json): raw data

## Maintain it with AI

Open this folder in [Claude Code](https://claude.com/claude-code) and run `/add-work <creator, work, DOI or URL>`. The research rules are in [`data/RESEARCH_BRIEF.md`](data/RESEARCH_BRIEF.md) and the data format is in [`data/SCHEMA.md`](data/SCHEMA.md).

| Script | Purpose |
|---|---|
| `python3 tools/check_media.py <url>…` / `--doi` / `--arxiv` / `--og <page>` | Check videos, images, DOIs and arXiv ids; list image candidates on a page |
| `python3 tools/validate.py data/raw/<file>.json` (or `--all`) | Check a batch |
| `python3 tools/build_data.py [--recheck]` | Merge batches, verify every link, write `data/entries.*`, catalogs and `llms.txt` |
| `python3 tools/audit_titles.py` | List same-title works (possible duplicates) |
| `tools/publish.sh "<message>"` | Validate, rebuild, commit and push |

Run locally: `./serve.sh`, which serves http://localhost:8934.

## Credits

Images and videos are linked from the artists, studios, labs, festivals and publishers, and remain theirs. To suggest a correction or an addition, please open an issue.
