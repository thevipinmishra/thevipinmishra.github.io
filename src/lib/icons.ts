export type IconSvgFn = {
	toSvg: (options?: {
		size?: number | string;
		color?: string;
		className?: string;
		weight?: 'Outline' | 'Filled';
	}) => string;
};

export function iconSvg(
	icon: IconSvgFn,
	options: {
		size?: number | string;
		color?: string;
		className?: string;
		weight?: 'Outline' | 'Filled';
	} = {},
): string {
	return icon.toSvg({
		size: options.size ?? 18,
		color: options.color ?? 'currentColor',
		className: options.className,
		weight: options.weight,
	});
}
