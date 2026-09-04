<script lang="ts">
	import { Tooltip } from 'bits-ui';
	import Sun from 'reicon-svelte/icons/Sun.svelte';
	import Moon from 'reicon-svelte/icons/Moon.svelte';

	type Theme = 'light' | 'dark';

	let theme = $state<Theme>('light');
	let ready = $state(false);

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
		applyTheme(theme === 'dark' ? 'light' : 'dark');
	}

	$effect(() => {
		theme = readTheme();
		ready = true;
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
					aria-label={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
					onclick={toggle}
				>
					<span class="icon-stack" aria-hidden="true" class:ready>
						<span class="icon sun" class:active={theme === 'light'}>
							<Sun size={18} color="currentColor" />
						</span>
						<span class="icon moon" class:active={theme === 'dark'}>
							<Moon size={18} color="currentColor" />
						</span>
					</span>
				</button>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Portal>
			<Tooltip.Content sideOffset={8} class="tooltip-content">
				{theme === 'dark' ? 'Light mode' : 'Dark mode'}
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
		transition:
			background-color 160ms cubic-bezier(0.2, 0, 0, 1),
			transform 160ms cubic-bezier(0.2, 0, 0, 1),
			box-shadow 160ms cubic-bezier(0.2, 0, 0, 1);
	}

	.theme-toggle:hover {
		background: var(--color-secondary);
	}

	.theme-toggle:active {
		transform: scale(0.96);
	}

	.icon-stack {
		position: relative;
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
		transform: scale(0.25);
		filter: blur(4px);
	}

	.icon-stack.ready .icon {
		transition:
			opacity 200ms cubic-bezier(0.2, 0, 0, 1),
			transform 200ms cubic-bezier(0.2, 0, 0, 1),
			filter 200ms cubic-bezier(0.2, 0, 0, 1);
	}

	.icon.active {
		opacity: 1;
		transform: scale(1);
		filter: blur(0);
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
	}
</style>
