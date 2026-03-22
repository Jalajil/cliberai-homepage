# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Single-page marketing website for Cliber AI, built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Commands

- `npm run dev` — Dev server on port 5000
- `npm run build` — Production build
- `npm run start` — Production server on port 5000
- No test or lint scripts configured

## Architecture

All source code lives in `src/app/` using the Next.js App Router (no subroutes — single page site):

- **layout.tsx** — Root layout with metadata and inline theme-detection script to prevent FOUC
- **page.tsx** — Full landing page (header, hero, product showcase, contact, footer)
- **LanguageProvider.tsx** — React Context providing language (`t()` translation function, `dir` for RTL) and theme state, persisted to `localStorage`
- **translations.ts** — All UI strings for 7 languages (en, ar, fr, de, ja, zh, ko). Arabic uses RTL.
- **SettingsModal.tsx** — Language and theme selection modal
- **globals.css** — Tailwind theme tokens (brand-orange, brand-green, cream) and custom animations (fade-in-up, float, pulse-glow)

## Key Conventions

- All interactive components use `"use client"` directive
- State management is Context API only (no external libraries)
- Translations are a manual object map in `translations.ts` — no i18n library
- Theme uses `dark` class on `<html>`, with system/light/dark options
- Custom animations respect `prefers-reduced-motion`
- Path alias: `@/*` maps to `src/*`
