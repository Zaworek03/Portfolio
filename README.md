# Portfolio

Portfolio inżyniera mechatroniki zbudowane w [Astro](https://astro.build). Landing page z listą projektów i osobna podstrona dla każdego projektu.

## Uruchomienie

```bash
npm install
npm run dev      # podgląd na http://localhost:4321/Portfolio/
npm run build    # gotowa strona w folderze dist/
```

## Twoje dane

Imię i linki kontaktowe zmieniasz w `src/data/site.ts` (`site`), a opis, umiejętności i inne teksty w obu językach — w tym samym pliku (`siteText.pl` / `siteText.en`). Napisy interfejsu (menu, przyciski) są w `src/i18n/ui.ts`.

## Języki

Strona ma wersję polską (`/Portfolio/`) i angielską (`/Portfolio/en/`). Przy pierwszej wizycie wybierana jest na podstawie języka systemu/przeglądarki (polski → PL, każdy inny → EN). Przełącznik PL/EN w menu zapamiętuje wybór i ma pierwszeństwo przed wykrywaniem.

## Dodawanie projektu

1. Utwórz folder w `src/content/projects/`, np. `src/content/projects/moj-projekt/`. Nazwa folderu to adres podstrony (`/projekty/moj-projekt/`).
2. Wrzuć do niego zdjęcie okładki (`cover.jpg`, `.png`, `.webp` lub `.svg`) i ewentualnie inne zdjęcia.
3. Utwórz `pl.md` (wersja polska) i opcjonalnie `en.md` (angielska, z tymi samymi polami). Jeśli `en.md` nie istnieje, na angielskiej stronie pokaże się wersja polska:

```markdown
---
title: Nazwa projektu
summary: Jedno-dwa zdania opisu widoczne na karcie.
category: robotyka   # robotyka | elektronika | cad | embedded | automatyka
date: 2025-06-01
cover: ./cover.jpg
coverAlt: Opis zdjęcia dla czytników ekranu
tags: [STM32, KiCad, C++]
role: Projekt samodzielny     # opcjonalne
duration: 3 miesiące          # opcjonalne
github: https://github.com/…  # opcjonalne
demo: https://youtube.com/…   # opcjonalne
featured: true                # opcjonalne — wyświetla projekt na początku listy
---

## Problem
…

## Rozwiązanie
![Zdjęcie prototypu](./prototyp.jpg)
…
```

Zdjęcia z telefonu przed dodaniem warto przepuścić przez kompresję bez metadanych (usuwa lokalizację GPS) — repo jest publiczne.

## Design

Kierunek „Blueprint” (rysunek techniczny): Space Grotesk + JetBrains Mono, akcent `#38BDF8` w trybie ciemnym i `#0369A1` w jasnym. Kolory zmieniasz w `src/styles/global.css`.
