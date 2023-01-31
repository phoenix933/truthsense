type Callback = (parentElement: HTMLElement, url: string, disableBackgroundScroll?: boolean) => void;
export type DomUpdaterFunction = (callback: Callback) => void;
