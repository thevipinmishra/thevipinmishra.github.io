import Convex from 'reicon-brands/icons/Convex';
import Cursor from 'reicon-brands/icons/Cursor';
import Drizzle from 'reicon-brands/icons/Drizzle';
import Express from 'reicon-brands/icons/Express';
import Github from 'reicon-brands/icons/Github';
import Graphql from 'reicon-brands/icons/Graphql';
import Hono from 'reicon-brands/icons/Hono';
import Nextdotjs from 'reicon-brands/icons/Nextdotjs';
import Nodedotjs from 'reicon-brands/icons/Nodedotjs';
import Postgresql from 'reicon-brands/icons/Postgresql';
import React from 'reicon-brands/icons/React';
import Shadcnui from 'reicon-brands/icons/Shadcnui';
import Supabase from 'reicon-brands/icons/Supabase';
import Swagger from 'reicon-brands/icons/Swagger';
import Tailwindcss from 'reicon-brands/icons/Tailwindcss';
import Tanstack from 'reicon-brands/icons/Tanstack';
import Turborepo from 'reicon-brands/icons/Turborepo';
import Typescript from 'reicon-brands/icons/Typescript';
import Vercel from 'reicon-brands/icons/Vercel';
import Vite from 'reicon-brands/icons/Vite';
import Vitest from 'reicon-brands/icons/Vitest';
import Cloud from 'reicon/icons/Cloud';
import CpuBolt from 'reicon/icons/CpuBolt';
import Database from 'reicon/icons/Database';
import Hierarchy2 from 'reicon/icons/Hierarchy2';
import Layers from 'reicon/icons/Layers';
import Scan from 'reicon/icons/Scan';
import ServerCloud from 'reicon/icons/ServerCloud';
import Sparkles from 'reicon/icons/Sparkles';
import { iconSvg, type IconSvgFn } from './icons';

/** Brand marks for skill chips — keyed by display name. */
const SKILL_ICONS: Record<string, IconSvgFn> = {
	TypeScript: Typescript,
	React: React,
	'Next.js': Nextdotjs,
	'Node.js': Nodedotjs,
	Express: Express,
	Hono: Hono,
	PostgreSQL: Postgresql,
	GraphQL: Graphql,
	'Tailwind CSS': Tailwindcss,
	'TanStack Query': Tanstack,
	Supabase: Supabase,
	Vite: Vite,
	Vercel: Vercel,
	GitHub: Github,
	'shadcn/ui': Shadcnui,
	'Design systems': Layers,
	REST: Swagger,
	SQL: Database,
	'Drizzle ORM': Drizzle,
	Convex: Convex,
	'Amazon RDS': ServerCloud,
	'OpenAI APIs': Sparkles,
	OCR: Scan,
	RAG: Hierarchy2,
	'LLM workflows': CpuBolt,
	AWS: Cloud,
	Vitest: Vitest,
	Turborepo: Turborepo,
	Cursor: Cursor,
};

export function skillIconSvg(name: string): string | null {
	const icon = SKILL_ICONS[name];
	if (!icon) return null;
	return iconSvg(icon, { size: 15 });
}
