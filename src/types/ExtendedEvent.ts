export type ExtendedEvent<T extends Event, V extends HTMLElement> = T & {
	target: V;
	currentTarget: V;
};
