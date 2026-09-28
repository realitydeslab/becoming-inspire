/* Becoming Inspire — language-aware field access and Markdown export (SKILL.md / README.md / reading list). */
(() => {
  "use strict";
  const SITE = "https://becoming.reality.design";

  const text = {
    work(w, lang) {
      const zh = lang === "zh";
      return { description: zh ? w.description_zh : w.description, idea: zh ? w.idea_zh : w.idea_en, method: zh ? w.method_zh : w.method };
    },
    creator(c, lang) {
      const zh = lang === "zh";
      return { role: zh ? c.role_zh : c.role, bio: zh ? c.bio_zh : c.bio, why: zh ? c.why_zh : c.why, based: zh ? c.based_zh : c.based };
    },
  };

  const L = {
    en: {
      skillDesc: (n) => `${n} works I starred in Becoming Inspire (${SITE}): XR artworks, immersive films, games and research that let people become another being — animal, plant, fungus, river, machine. For each: what it is, its core idea, how it works, and video / paper links. Use when designing nonhuman-perspective XR experiences, writing related work, or planning a course or studio brief.`,
      skillTitle: "Becoming more-than-human in XR: my starred works",
      source: (d, n) => `Source: ${SITE} · exported ${d} · ${n} works.`,
      howTitle: "How to use this skill",
      how: [
        "Start from these works and name the work and creator you build on.",
        "Propose new directions by combining beings, senses and media from two or more works.",
        "Cite papers only with the DOI / URL listed here; do not invent references.",
        "Do not invent details that are not described here.",
      ],
      field: "Becoming", organisms: "Senses", idea: "Idea", what: "What it is", method: "How it works",
      paper: "Paper", video: "Video", page: "Project page",
      readmeTitle: "My picks from Becoming Inspire",
      readmeIntro: (n) => `${n} works I starred on ${SITE}. For an AI assistant, load the companion SKILL.md.`,
      listTitle: "Reading list — Becoming Inspire",
    },
    zh: {
      skillDesc: (n) => `我在 Becoming Inspire（${SITE}）收藏的 ${n} 件作品：让人成为另一种存在（动物、植物、真菌、河流、机器）的 XR 艺术作品、沉浸式影片、游戏与研究。每件作品包括：内容、核心想法、实现方式，以及视频和论文链接。在设计非人类视角的 XR 体验、撰写相关研究综述、准备课程或设计课题时使用。`,
      skillTitle: "在 XR 中成为万物：我的收藏",
      source: (d, n) => `来源：${SITE} · 导出于 ${d} · 共 ${n} 件作品。`,
      howTitle: "如何使用这个 skill",
      how: [
        "从这些作品出发，并说明借鉴的是哪件作品、哪位创作者。",
        "把两件或更多作品的存在、感官和媒介组合起来，提出新的方向。",
        "引用论文时只使用这里列出的 DOI 或链接，不要编造参考文献。",
        "不要编造这里没有描述的细节。",
      ],
      field: "成为", organisms: "感官", idea: "核心想法", what: "作品内容", method: "实现方式",
      paper: "论文", video: "视频", page: "项目主页",
      readmeTitle: "我在 Becoming Inspire 的收藏",
      readmeIntro: (n) => `我在 ${SITE} 收藏的 ${n} 件作品。给 AI 助手使用时，请加载配套的 SKILL.md。`,
      listTitle: "阅读清单 — Becoming Inspire",
    },
  };

  const label = (pairs, k, zh) => { const r = pairs.find((p) => p[0] === k); return r ? (zh ? r[2] : r[1]) : k; };
  const fieldName = (data, id, zh) => { const f = data.taxonomy.fields.find((x) => x.id === id); return f ? (zh ? f.zh : f.en) : id; };
  const subName = (data, w, zh) => {
    const f = data.taxonomy.fields.find((x) => x.id === w.field);
    const s = f && f.subs.find((x) => x.id === w.sub);
    return s ? (zh ? s.zh : s.en) : "";
  };
  const names = (w, data) => w.creator_ids.map((id) => (data.creators.find((c) => c.id === id) || {}).name || id).join(", ");

  function block(w, data, lang) {
    const s = L[lang], zh = lang === "zh", t = text.work(w, lang);
    const p = w.paper || {};
    return [
      `### ${w.title} — ${names(w, data)}${w.year ? ` (${w.year})` : ""}`,
      `- ${s.field}: ${fieldName(data, w.field, zh)} / ${subName(data, w, zh)}`,
      `- ${s.organisms}: ${(w.senses || []).map((o) => label(data.taxonomy.senses, o, zh)).join(", ")}`,
      t.idea ? `- ${s.idea}: ${t.idea}` : "",
      t.description ? `- ${s.what}: ${t.description}` : "",
      t.method ? `- ${s.method}: ${t.method}` : "",
      p.url ? `- ${s.paper}: ${p.url}${p.venue ? ` (${p.venue})` : ""}` : "",
      w.video && w.video.url ? `- ${s.video}: ${w.video.url}` : "",
      w.source_url ? `- ${s.page}: ${w.source_url}` : "",
    ].filter(Boolean).join("\n");
  }
  const today = () => new Date().toISOString().slice(0, 10);

  function skillMd(list, data, lang) {
    const s = L[lang];
    return [
      "---", "name: more-than-human-inspiration", `description: ${s.skillDesc(list.length)}`, "---", "",
      `# ${s.skillTitle}`, "", s.source(today(), list.length), "", `## ${s.howTitle}`, "",
      ...s.how.map((x) => `- ${x}`), "", ...list.map((w) => block(w, data, lang) + "\n"),
    ].join("\n");
  }
  function readmeMd(list, data, lang) {
    const s = L[lang];
    return [`# ${s.readmeTitle}`, "", s.readmeIntro(list.length), "", ...list.map((w) => block(w, data, lang) + "\n")].join("\n");
  }
  function readingList(list, data, lang) {
    const s = L[lang];
    const rows = list.filter((w) => w.paper && w.paper.url).sort((a, b) => (a.year || 0) - (b.year || 0))
      .map((w) => `- ${names(w, data)} (${w.year || "n.d."}). *${w.title}*.${w.paper.venue ? ` ${w.paper.venue}.` : ""} ${w.paper.doi ? `https://doi.org/${w.paper.doi}` : w.paper.url}`);
    return [`# ${s.listTitle}`, "", s.source(today(), rows.length), "", ...rows, ""].join("\n");
  }

  window.MthText = text;
  window.MthExport = { skillMd, readmeMd, readingList };
})();
