import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
	bg: 'var(--color-background)',
	fg: 'var(--color-foreground)',
	muted: 'var(--color-muted)',
	card: 'var(--color-card)',
	cardFg: 'var(--color-card-foreground)',
	popover: 'var(--color-popover)',
	popoverFg: 'var(--color-popover-foreground)',
	border: 'var(--color-border)',
	borderSubtle: 'var(--color-border-subtle)',
	primary: 'var(--color-primary)',
	primaryFg: 'var(--color-primary-foreground)',
	primaryHover: 'var(--color-primary-hover)',
	accent: 'var(--color-accent)',
	accentFg: 'var(--color-accent-foreground)',
	accentText: 'var(--color-accent-text)',
	secondary: 'var(--color-secondary)',
	secondaryFg: 'var(--color-secondary-foreground)',
	overlay: 'var(--color-overlay)',
	ring: 'var(--color-ring)',
	imageOutline: 'var(--color-image-outline)',
	portraitRing: 'var(--color-portrait-ring)',
	portraitRim: 'var(--color-portrait-rim)',
	portraitGlow: 'var(--color-portrait-glow)',
	shadow: 'var(--color-shadow)',
	meshA: 'var(--color-hero-mesh-a)',
	meshB: 'var(--color-hero-mesh-b)',
	meshC: 'var(--color-hero-mesh-c)',
});

export const fonts = stylex.defineVars({
	display: 'var(--font-display)',
	body: 'var(--font-body)',
});

export const space = stylex.defineVars({
	page: 'var(--space-page)',
	xs: '0.25rem',
	sm: '0.5rem',
	md: '0.75rem',
	lg: '1rem',
	xl: '1.5rem',
	'2xl': '2rem',
	'3xl': '3rem',
	'4xl': '4.5rem',
});
