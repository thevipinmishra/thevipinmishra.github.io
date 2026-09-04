<script lang="ts">
	interface Props {
		sharpSrc: string;
		sharpSrcSet?: string;
		pixelSrc: string;
		alt: string;
		width?: number;
		height?: number;
		sizes?: string;
	}

	let {
		sharpSrc,
		sharpSrcSet = '',
		pixelSrc,
		alt,
		width = 296,
		height = 296,
		sizes = '148px',
	}: Props = $props();

	let sharpEl: HTMLImageElement | undefined = $state();
	let revealed = $state(false);
	let settle = $state(false);
	let reduceMotion = $state(false);

	function prefersReducedMotion(): boolean {
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	function waitForDecode(img: HTMLImageElement): Promise<void> {
		if (img.complete && img.naturalWidth > 0) {
			return img.decode?.().catch(() => undefined) ?? Promise.resolve();
		}
		return new Promise((resolve) => {
			const done = () => resolve();
			img.addEventListener('load', done, { once: true });
			img.addEventListener('error', done, { once: true });
		}).then(() => img.decode?.().catch(() => undefined));
	}

	$effect(() => {
		if (prefersReducedMotion()) {
			reduceMotion = true;
			revealed = true;
			settle = true;
			return;
		}

		let cancelled = false;
		let settleTimer = 0;

		const run = async () => {
			if (sharpEl) await waitForDecode(sharpEl);
			if (cancelled) return;

			// Double rAF so the pixelated cover paints before the dissolve.
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					if (cancelled) return;
					revealed = true;
					settleTimer = window.setTimeout(() => {
						if (!cancelled) settle = true;
					}, 1200);
				});
			});
		};

		void run();

		return () => {
			cancelled = true;
			window.clearTimeout(settleTimer);
		};
	});
</script>

<div
	class="stack"
	class:revealed
	class:settle
	class:instant={reduceMotion}
>
	<img
		bind:this={sharpEl}
		class="layer sharp"
		src={sharpSrc}
		srcset={sharpSrcSet || undefined}
		{sizes}
		{width}
		{height}
		{alt}
		decoding="async"
		fetchpriority="high"
		loading="eager"
	/>
	{#if !settle}
		<img
			class="layer pixel"
			src={pixelSrc}
			{width}
			{height}
			alt=""
			aria-hidden="true"
			decoding="async"
			loading="eager"
			draggable="false"
		/>
	{/if}
</div>

<noscript>
	<style>
		.stack .pixel {
			display: none !important;
		}
	</style>
</noscript>

<style>
	.stack {
		position: relative;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 9999px;
		overflow: hidden;
		isolation: isolate;
		transform: scale(1.04);
		transform-origin: center center;
		will-change: transform;
	}

	.stack.revealed {
		transform: scale(1);
		transition: transform 1200ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.stack.settle,
	.stack.instant {
		will-change: auto;
		transform: none;
		transition: none;
	}

	.layer {
		display: block;
		width: 100%;
		height: 100%;
		max-width: none;
		aspect-ratio: 1 / 1;
		border-radius: 9999px;
		object-fit: cover;
		object-position: center top;
		box-shadow: inset 0 0 0 1px var(--color-image-outline);
	}

	.sharp {
		position: relative;
		z-index: 0;
	}

	.pixel {
		position: absolute;
		inset: 0;
		z-index: 1;
		opacity: 1;
		image-rendering: pixelated;
		pointer-events: none;
		user-select: none;
		will-change: opacity;
	}

	.stack.revealed .pixel {
		opacity: 0;
		transition: opacity 1100ms cubic-bezier(0.16, 1, 0.3, 1);
	}

	.stack.instant .pixel {
		opacity: 0;
		transition: none;
		will-change: auto;
	}

	.stack.settle .pixel {
		will-change: auto;
	}

	@media (prefers-reduced-motion: reduce) {
		.stack,
		.stack.revealed {
			transform: none !important;
			transition: none !important;
			will-change: auto !important;
		}

		.pixel {
			display: none !important;
		}
	}
</style>