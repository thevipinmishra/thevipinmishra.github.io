import Express from 'reicon-brands/icons/Express';
import Github from 'reicon-brands/icons/Github';
import Graphql from 'reicon-brands/icons/Graphql';
import Hono from 'reicon-brands/icons/Hono';
import Nextdotjs from 'reicon-brands/icons/Nextdotjs';
import Nodedotjs from 'reicon-brands/icons/Nodedotjs';
import Postgresql from 'reicon-brands/icons/Postgresql';
import React from 'reicon-brands/icons/React';
import Tailwindcss from 'reicon-brands/icons/Tailwindcss';
import Tanstack from 'reicon-brands/icons/Tanstack';
import Typescript from 'reicon-brands/icons/Typescript';
import Vite from 'reicon-brands/icons/Vite';
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
	Vite: Vite,
	GitHub: Github,
};

export function skillIconSvg(name: string): string | null {
	const icon = SKILL_ICONS[name];
	if (!icon) return null;
	return iconSvg(icon, { size: 14 });
}
