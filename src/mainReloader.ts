type TMainReloader = (paths: string[], ignored?: string[], handler?: (path: string) => void) => void;

export const mainReloader: TMainReloader = (paths, ignored, handler) => { };
