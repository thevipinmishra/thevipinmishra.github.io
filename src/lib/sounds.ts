import { bind, setEnabled, setVolume } from 'cuelume';

/** localStorage: `"on"` | `"off"`. Absent → follow prefers-reduced-motion. */
export const UI_SOUNDS_KEY = 'ui-sounds';

/** Soft enough for a quiet portfolio; still audible on laptop speakers. */
const VOLUME = 0.42;

function readPreference(): boolean {
	try {
		const stored = localStorage.getItem(UI_SOUNDS_KEY);
		if (stored === 'off') return false;
		if (stored === 'on') return true;
	} catch {
		/* private mode / blocked storage */
	}
	return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function applyPreference() {
	setEnabled(readPreference());
}

/**
 * One-shot client init: global volume, mute preference, then document bind.
 * Safe to call once from a layout script; bind() is idempotent.
 */
export function initSounds() {
	setVolume(VOLUME);
	applyPreference();
	bind();

	window
		.matchMedia('(prefers-reduced-motion: reduce)')
		.addEventListener('change', applyPreference);

	window.addEventListener('storage', (event) => {
		if (event.key === UI_SOUNDS_KEY) applyPreference();
	});
}
