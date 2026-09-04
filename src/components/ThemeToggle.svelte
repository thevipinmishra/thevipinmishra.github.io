<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import Moon from 'reicon/icons/Moon';
	import Sun from 'reicon/icons/Sun';
	import { iconSvg } from '../lib/icons';

	type Theme = 'light' | 'dark';

	const sunSvg = iconSvg(Sun, { size: 18 });
	const moonSvg = iconSvg(Moon, { size: 18 });

	let theme = $state<Theme>('light');
	let ready = $state(false);
	let kicking = $state(false);
	let reduceMotion = $state(false);

	const copy = {
		light: {
			action: 'Kill the lights',
			hint: 'Dim it. Eyes will thank you.',
		},
		dark: {
			action: 'Flip the lights on',
			hint: 'Enough midnight oil.',
		},
	} as const;

	function readTheme(): Theme {
		const fromDom = document.documentElement.dataset.theme;
		if (fromDom === 'light' || fromDom === 'dark') return fromDom;
		const stored = localStorage.getItem('theme');
		if (stored === 'light' || stored === 'dark') return stored;
		return window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';
	}

	function applyTheme(next: Theme) {
		const root = document.documentElement;
		root.classList.add('theme-switching');
		root.dataset.theme = next;
		root.classList.toggle('dark', next === 'dark');
		void root.offsetHeight;
		requestAnimationFrame(() => {
			root.classList.remove('theme-switching');
		});
		localStorage.setItem('theme', next);
		theme = next;
	}

	function toggle() {
		if (!reduceMotion) {
			kicking = false;
			requestAnimationFrame(() => {
				kicking = true;
			});
		}
		applyTheme(theme === 'dark' ? 'light' : 'dark');
	}

	function onKickEnd(event: AnimationEvent) {
		if (event.target !== event.currentTarget) return;
		if (event.animationName !== 'theme-kick') return;
		kicking = false;
	}

	$effect(() => {
		theme = readTheme();
		ready = true;
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		reduceMotion = mq.matches;
		const onChange = () => {
			reduceMotion = mq.matches;
		};
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	});
</script>

<Tooltip.Provider delayDuration={280} skipDelayDuration={120}>
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<button
					{...props}
					type="button"
					class="theme-toggle"
					class:kicking
					aria-label={copy[theme].action}
					data-cuelume-toggle
					data-theme-state={theme}
					onclick={toggle}
					onanimationend={onKickEnd}
				>
					<span class="glow" aria-hidden="true"></span>
					<span class="icon-stack" aria-hidden="true" class:ready>
						<span class="icon sun" class:active={theme === 'light'}>
							{@html sunSvg}
						</span>
						<span class="icon moon" class:active={theme === 'dark'}>
							{@html moonSvg}
						</span>
					</span>
				</button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content sideOffset={8} class="tooltip-content">
				{copy[theme].hint}
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
</Tooltip.Provider>

<style>
	.theme-toggle {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 12px;
		border: none;
		background: color-mix(in oklab, var(--color-card) 88%, transparent);
		backdrop-filter: blur(12px);
		box-shadow:
			0 1px 0 color-mix(in oklab, var(--color-foreground) 6%, transparent),
			0 8px 28px color-mix(in oklab, var(--color-shadow) 18%, transparent);
		cursor: pointer;
		color: var(--color-foreground);
		overflow: hidden;
		isolation: isolate;
		transition:
			background-color 160ms cubic-bezier(0.2, 0, 0, 1),
			transform 160ms cubic-bezier(0.2, 0, 0, 1),
			box-shadow 160ms cubic-bezier(0.2, 0, 0, 1),
			color 160ms cubic-bezier(0.2, 0, 0, 1);
	}

	.theme-toggle:hover {
		background: var(--color-secondary);
		color: var(--color-accent-text);
	}

	.theme-toggle:active {
		transform: scale(0.96);
	}

	.theme-toggle.kicking {
		animation: theme-kick 420ms cubic-bezier(0.2, 0, 0, 1);
	}

	.theme-toggle.kicking .glow {
		animation: theme-glow 420ms cubic-bezier(0.2, 0, 0, 1);
	}

	.glow {
		position: absolute;
		inset: -30%;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			color-mix(in oklab, var(--gold-8) 42%, transparent) 0%,
			transparent 68%
		);
		opacity: 0;
		pointer-events: none;
		z-index: 0;
	}

	.icon-stack {
		position: relative;
		z-index: 1;
		width: 18px;
		height: 18px;
	}

	.icon {
		position: absolute;
		inset: 0;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transform: scale(0.25) rotate(var(--enter-rotate));
		filter: blur(4px);
	}

	.icon.sun {
		--enter-rotate: -48deg;
	}

	.icon.moon {
		--enter-rotate: 48deg;
	}

	.icon-stack.ready .icon {
		transition:
			opacity 300ms cubic-bezier(0.2, 0, 0, 1),
			transform 300ms cubic-bezier(0.2, 0, 0, 1),
			filter 300ms cubic-bezier(0.2, 0, 0, 1);
	}

	.icon.active {
		opacity: 1;
		transform: scale(1) rotate(0deg);
		filter: none;
	}

	@keyframes theme-kick {
		0% {
			transform: scale(0.96) rotate(0deg);
		}
		38% {
			transform: scale(1.04) rotate(var(--kick-tilt));
		}
		100% {
			transform: scale(1) rotate(0deg);
		}
	}

	.theme-toggle[data-theme-state='light'].kicking {
		--kick-tilt: -8deg;
	}

	.theme-toggle[data-theme-state='dark'].kicking {
		--kick-tilt: 8deg;
	}

	@keyframes theme-glow {
		0% {
			opacity: 0;
			transform: scale(0.6);
		}
		35% {
			opacity: 0.9;
			transform: scale(1);
		}
		100% {
			opacity: 0;
			transform: scale(1.35);
		}
	}

	:global(.tooltip-content) {
		z-index: 60;
		padding: 0.4rem 0.65rem;
		border-radius: 8px;
		border: none;
		background: var(--color-popover);
		color: var(--color-popover-foreground);
		font-family: var(--font-body), ui-sans-serif, sans-serif;
		font-size: 0.75rem;
		font-weight: 500;
		box-shadow: 0 8px 24px var(--color-shadow);
		transform-origin: var(--bits-tooltip-content-transform-origin);
		max-width: 14rem;
	}

	@media (prefers-reduced-motion: reduce) {
		.theme-toggle.kicking,
		.theme-toggle.kicking .glow {
			animation: none;
		}

		.icon-stack.ready .icon {
			transition: none;
		}

		.icon {
			transform: scale(0.25);
		}

		.icon.active {
			transform: scale(1);
		}
	}
</style>
