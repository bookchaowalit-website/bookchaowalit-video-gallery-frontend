"use client";

import { useMemo, useState } from "react";

type Reel = {
  id: string;
  title: string;
  category: string;
  summary: string;
  duration: string;
  index: string;
};

const REELS: Reel[] = [
  {
    id: "os-intro",
    title: "Intro to the OS",
    category: "Tutorial",
    summary: "A short walk through the Solo Empire operating system.",
    duration: "12:04",
    index: "A-01",
  },
];

const CATEGORIES = ["All", "Tutorial", "Talk"];

export default function VideoGallery() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const filtered = useMemo(
    () => REELS.filter((reel) => {
      const haystack = `${reel.title} ${reel.summary} ${reel.category}`.toLowerCase();
      return (category === "All" || reel.category === category) && haystack.includes(query.toLowerCase());
    }),
    [category, query],
  );

  return (
    <main className="gallery-shell">
      <header className="gallery-header">
        <div className="gallery-mark">B/12</div>
        <div className="gallery-brand"><strong>THE SCREENING ROOM</strong><span>CURATED REELS / STATIC CATALOG</span></div>
        <div className="gallery-state"><i /> OPEN REEL · {REELS.length} ON FILE</div>
      </header>

      <section className="gallery-hero">
        <div>
          <p className="gallery-kicker">BOOKCHAOWALIT / MOVING IMAGE INDEX</p>
          <h1>See what the<br /><em>work leaves behind.</em></h1>
          <p className="gallery-lede">A small contact sheet for talks, walkthroughs, and the moving-image notes worth returning to.</p>
        </div>
        <div className="projector" aria-label="Static catalog, not a media player">
          <span className="projector-lamp" />
          <div className="projector-body"><i /><i /><i /></div>
          <b>NO STREAM<br />ATTACHED</b>
        </div>
      </section>

      <section className="screening-console" aria-label="Video catalog controls">
        <div className="console-head">
          <div><span>CONTACT SHEET / 01</span><h2>Choose a cut.</h2></div>
          <div className="catalog-count"><strong>{String(filtered.length).padStart(2, "0")}</strong><span>VISIBLE<br />REELS</span></div>
        </div>
        <div className="catalog-controls">
          <label><span>Search the archive</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Title, subject, category" /></label>
          <div className="category-tabs" role="group" aria-label="Reel category">
            {CATEGORIES.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}>{item}</button>)}
          </div>
        </div>
        <div className="film-rule"><span>FRAME / CATEGORY / DURATION</span><span>LOCAL INDEX · READ ONLY</span></div>
        {filtered.length === 0 ? (
          <div className="empty-reel"><span>NO CUT</span><p>No reel matches this search. Clear the filter to return to the contact sheet.</p></div>
        ) : (
          <div className="reel-list">
            {filtered.map((reel, index) => (
              <article className="reel-row" key={reel.id}>
                <div className={`reel-poster poster-${index % 3}`} aria-hidden="true"><span>{reel.index}</span><b>PLAY<br />NOTE</b><i /></div>
                <div className="reel-copy"><span className="reel-category">{reel.category}</span><h3>{reel.title}</h3><p>{reel.summary}</p></div>
                <div className="reel-side"><strong>{reel.duration}</strong><span>STATIC CARD</span></div>
              </article>
            ))}
          </div>
        )}
        <p className="catalog-note">This is a curated demo catalog. The cards describe a collection; they do not host or play video.</p>
      </section>

      <footer className="gallery-footer"><span>BOOKCHAOWALIT / VIDEO GALLERY</span><span>STATIC DEMO CONTENT · NO MEDIA BACKEND</span></footer>
    </main>
  );
}
