# Design system — The Screening Room

## Overview

A small projection room built around a contact sheet. Browsing is the product: a reel row carries the title, subject, runtime, and an explicit static-card boundary.

## Colors

- Night: #171518
- Panel: #232027
- Bone: #F2EADB
- Amber lamp: #E9B24F
- Coral cue: #DB7468
- Hairline rule: #49434A

## Typography

- Display: Iowan Old Style / Palatino Linotype / Georgia for cinematic titles.
- Interface: Avenir Next for descriptions; Courier New for reel IDs, durations, and labels.
- Amber is reserved for active light and selected filters.

## Layout

- Dark screening room with a high, quiet hero.
- Projector glyph anchors the right edge.
- Console uses a contact-sheet rail, search, category tabs, and a single editorial reel list.
- Mobile collapses each reel into a poster, copy, then runtime row.

## Elevation & Depth

Poster fields use flat blocks and line patterns. No card shadows or fake play surfaces.

## Shapes

Rectangular film frames and hairline rules. No pill controls.

## Components

- Screening header: catalog scope and static boundary.
- Projector mark: authored CSS apparatus, not a media player.
- Catalog controls: search input and category tabs.
- Reel row: frame field, category, title, summary, duration.
- Empty reel: search recovery state.

## Do’s and Don’ts

Do make browsing and filtering feel tactile. Do say when media is not attached.
Don’t fabricate video playback, views, hosting, or a streaming backend.

