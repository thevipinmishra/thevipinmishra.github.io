export const IDENTITY = {
	name: 'Vipin Mishra',
	title: 'Full Stack Engineer',
	email: 'hi@vipin.me',
	github: 'https://github.com/thevipinmishra',
	linkedin: 'https://www.linkedin.com/in/thevipinmishra',
	site: 'https://vipinmishra.dev',
} as const;

export const HERO = {
	headline: 'Full Stack Engineer',
	support:
		'5+ years shipping production web apps in TypeScript, React, Next.js, and Node.js.',
} as const;

export const ABOUT = {
	title: 'How I actually build',
} as const;

export const EXPERIENCE = {
	role: 'Full Stack Engineer',
	company: 'Digiqt Technolabs Private Limited',
	dates: '03/2021 – present',
	place: 'Ahmedabad, India',
	bullets: [
		'Shipped 15+ production apps across B2B, insurance, real estate, healthcare, and marketplaces. Several from scratch.',
		'Owned architecture end to end: React/Next.js frontends, Node.js APIs, data flows, and reusable abstractions.',
		'Built design systems with 40+ components and mentored on TypeScript, reviews, and shared patterns.',
	],
} as const;

export const SKILLS = {
	title: 'What I ship with',
} as const;

/** One curated skills map — chips (+ logos where we have them). */
export const SKILL_GROUPS: Array<{ label: string; items: string[] }> = [
	{
		label: 'Frontend',
		items: [
			'TypeScript',
			'React',
			'Next.js',
			'TanStack Query',
			'Tailwind CSS',
			'Design systems',
			'shadcn/ui',
		],
	},
	{
		label: 'Backend',
		items: ['Node.js', 'Express', 'Hono', 'REST', 'GraphQL'],
	},
	{
		label: 'Data',
		items: ['PostgreSQL', 'SQL', 'Drizzle ORM', 'Convex', 'Supabase', 'Amazon RDS'],
	},
	{
		label: 'AI',
		items: ['OpenAI APIs', 'OCR', 'RAG', 'LLM workflows'],
	},
	{
		label: 'Deployments',
		items: ['AWS', 'Vercel'],
	},
	{
		label: 'Tooling',
		items: ['Vite', 'Vitest', 'Turborepo', 'GitHub', 'Cursor'],
	},
];

export type SiteProject = {
	title: string;
	stack: string;
	bullets: string[];
};

export const WORK = {
	title: 'Shipped work',
} as const;

export const PROJECTS: SiteProject[] = [
	{
		title:
			'AI-Powered OCR, Underwriting & Medical Document Intelligence Platform',
		stack: 'Next.js, React, TypeScript, OpenAI APIs, REST, OCR, AI/LLM',
		bullets: [
			'Document intelligence platform with OpenAI for OCR and understanding across insurance workflows.',
			'Automated underwriting against configurable rules from extracted customer and medical data.',
			'Medical report analysis for discrepancies, anomalies, and risk scores for downstream decisions.',
		],
	},
	{
		title: 'Multi-Tenant Metal Marketplace Platform',
		stack:
			'React, TypeScript, Electron, Websockets, Supabase, REST, PostgreSQL',
		bullets: [
			'Re-architected a legacy single-tenant marketplace into multi-tenant with clearer isolation.',
			'Designed tenant-aware data flows across frontend, APIs, and Postgres.',
			'Modernized modules and performance through cleaner fetching and rendering.',
		],
	},
	{
		title: 'Real Estate Sales & Inventory Management Platform',
		stack: 'React, TypeScript, Tailwind CSS, DnD, Node.js, PostgreSQL',
		bullets: [
			'CRM and inventory platform with 8 modules: leads, payments, legal, sales, and property stock.',
			'Kanban, searchable tables, dashboards, and role-based UI wired to REST APIs.',
			'Custom Mantine design system plus code splitting and lazy loading for faster navigation.',
		],
	},
	{
		title: 'Study Abroad Platform',
		stack: 'React, TypeScript, Tailwind CSS, Node.js, PostgreSQL',
		bullets: [
			'Frontend architecture for university discovery, courses, scholarships, onboarding, and visas.',
			'Search, filters, forms, and multi-step journeys over multiple backend APIs.',
			'Performance work via data fetching, code splitting, and shared frontend abstractions.',
		],
	},
	{
		title: 'React Design System & Component Library',
		stack: 'React, Next.js, TypeScript, Headless UI, CSS Modules, esbuild',
		bullets: [
			'45+ accessible, composable components with consistent interaction patterns.',
			'Shared component APIs that cut duplication across product apps.',
			'Forms, tables, navigation, overlays, and data-heavy interfaces standardized for a11y and style.',
		],
	},
];

export const CONTACT = {
	title: 'Say hello',
} as const;
