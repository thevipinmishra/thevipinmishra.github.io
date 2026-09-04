/** Subtle film-grain via a tiny tiled noise canvas. Cheap CPU; scroll stays at 60fps. */

const TILE = 128;
const MAX_DPR = 1.5;
/** Grain refresh rate — tiling/compositing is continuous; pixels update sparsely. */
const FRAME_MS = 1000 / 12;
const RESIZE_DEBOUNCE_MS = 120;

function makeNoiseTile(): HTMLCanvasElement {
	const tile = document.createElement('canvas');
	tile.width = TILE;
	tile.height = TILE;
	const tctx = tile.getContext('2d', { alpha: false });
	if (!tctx) return tile;

	const image = tctx.createImageData(TILE, TILE);
	const data = image.data;
	for (let i = 0; i < data.length; i += 4) {
		const v = (Math.random() * 255) | 0;
		data[i] = v;
		data[i + 1] = v;
		data[i + 2] = v;
		data[i + 3] = 255;
	}
	tctx.putImageData(image, 0, 0);
	return tile;
}

function refillNoise(tile: HTMLCanvasElement) {
	const tctx = tile.getContext('2d', { alpha: false });
	if (!tctx) return;
	const image = tctx.createImageData(TILE, TILE);
	const data = image.data;
	for (let i = 0; i < data.length; i += 4) {
		const v = (Math.random() * 255) | 0;
		data[i] = v;
		data[i + 1] = v;
		data[i + 2] = v;
		data[i + 3] = 255;
	}
	tctx.putImageData(image, 0, 0);
}

/**
 * Mount grain on `[data-page-grain]`. Safe to call once from the layout.
 * Respects prefers-reduced-motion (static grain) and pauses when the tab is hidden.
 */
export function initPageGrain() {
	const canvas = document.querySelector<HTMLCanvasElement>('[data-page-grain]');
	if (!canvas) return;

	const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
	if (!ctx) return;

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	const tile = makeNoiseTile();

	let cssW = 0;
	let cssH = 0;
	let pattern: CanvasPattern | null = null;
	let raf = 0;
	let lastPaint = 0;
	let resizeTimer = 0;

	function paint() {
		if (!pattern) return;
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

		const ox = -((Math.random() * TILE) | 0);
		const oy = -((Math.random() * TILE) | 0);
		ctx.save();
		ctx.translate(ox, oy);
		ctx.fillStyle = pattern;
		ctx.fillRect(-ox, -oy, cssW + TILE, cssH + TILE);
		ctx.restore();
	}

	function resize() {
		const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
		cssW = window.innerWidth;
		cssH = window.innerHeight;
		canvas.width = Math.max(1, Math.round(cssW * dpr));
		canvas.height = Math.max(1, Math.round(cssH * dpr));
		canvas.style.width = `${cssW}px`;
		canvas.style.height = `${cssH}px`;
		pattern = ctx.createPattern(tile, 'repeat');
		paint();
	}

	function tick(now: number) {
		raf = requestAnimationFrame(tick);
		if (now - lastPaint < FRAME_MS) return;
		lastPaint = now;
		refillNoise(tile);
		pattern = ctx.createPattern(tile, 'repeat');
		paint();
	}

	function stop() {
		cancelAnimationFrame(raf);
		raf = 0;
	}

	function start() {
		stop();
		resize();
		if (reduceMotion.matches) return;
		if (document.hidden) return;
		lastPaint = 0;
		raf = requestAnimationFrame(tick);
	}

	function onResize() {
		window.clearTimeout(resizeTimer);
		resizeTimer = window.setTimeout(() => {
			resize();
		}, RESIZE_DEBOUNCE_MS);
	}

	start();

	window.addEventListener('resize', onResize, { passive: true });
	reduceMotion.addEventListener('change', start);
	document.addEventListener('visibilitychange', start);
}
