export type GitHubProfile = {
	login: string;
	name: string;
	bio: string;
	avatar_url: string;
	html_url: string;
	location: string | null;
	hireable: boolean | null;
	public_repos: number;
	followers: number;
	blog: string;
};

export type FeaturedProject = {
	name: string;
	description: string;
	html_url: string;
	homepage: string | null;
	language: string | null;
	stargazers_count: number;
};

const FEATURED: Array<{
	name: string;
	fallbackDescription: string;
}> = [
	{
		name: 'harbor-ui',
		fallbackDescription:
			'Accessible React components with React Aria and Tailwind CSS v4.',
	},
	{
		name: 'country-kit',
		fallbackDescription: 'Typed country metadata helpers for UI.',
	},
	{
		name: 'color-shades-generator',
		fallbackDescription: 'Generate color shade scales in the browser.',
	},
	{
		name: 'theportfolio',
		fallbackDescription: 'Portfolio template for developers.',
	},
	{
		name: 'react-minimal-signature',
		fallbackDescription: 'Signature pad component for React.',
	},
];

const PROFILE_FALLBACK: GitHubProfile = {
	login: 'thevipinmishra',
	name: 'Vipin Mishra',
	bio: 'Full Stack Engineer. TypeScript, React, Next.js, Node.js. 5+ years shipping production web apps.',
	avatar_url: 'https://avatars.githubusercontent.com/u/52159805?v=4',
	html_url: 'https://github.com/thevipinmishra',
	location: null,
	hireable: true,
	public_repos: 45,
	followers: 62,
	blog: 'https://vipinmishra.dev',
};

export const EMAIL = 'hi@vipin.me';

async function githubFetch<T>(path: string): Promise<T | null> {
	try {
		const response = await fetch(`https://api.github.com${path}`, {
			headers: {
				Accept: 'application/vnd.github+json',
				'User-Agent': 'portfolio-26',
			},
		});
		if (!response.ok) return null;
		return (await response.json()) as T;
	} catch {
		return null;
	}
}

export async function getProfile(): Promise<GitHubProfile> {
	const profile = await githubFetch<GitHubProfile>('/users/thevipinmishra');
	if (!profile) return PROFILE_FALLBACK;
	return {
		...PROFILE_FALLBACK,
		...profile,
		name: profile.name || PROFILE_FALLBACK.name,
		bio: PROFILE_FALLBACK.bio,
		blog: profile.blog || PROFILE_FALLBACK.blog,
	};
}

type RepoPayload = {
	name: string;
	description: string | null;
	html_url: string;
	homepage: string | null;
	language: string | null;
	stargazers_count: number;
	fork: boolean;
};

export async function getFeaturedProjects(): Promise<FeaturedProject[]> {
	const repos =
		(await githubFetch<RepoPayload[]>(
			'/users/thevipinmishra/repos?per_page=100&type=owner',
		)) ?? [];

	const byName = new Map(repos.filter((r) => !r.fork).map((r) => [r.name, r]));

	return FEATURED.map(({ name, fallbackDescription }) => {
		const repo = byName.get(name);
		return {
			name,
			description: repo?.description || fallbackDescription,
			html_url: repo?.html_url ?? `https://github.com/thevipinmishra/${name}`,
			homepage: repo?.homepage || null,
			language: repo?.language ?? null,
			stargazers_count: repo?.stargazers_count ?? 0,
		};
	});
}
