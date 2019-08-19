type TRendererReloader = (paths: string[], ignored?: string[], handler?: (path: string) => void) => void;

export const rendererReloader: TRendererReloader = (paths, ignored, handler) => { };
