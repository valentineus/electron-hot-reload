import chokidar from "chokidar";
// tslint:disable-next-line: no-implicit-dependencies
import { BrowserWindow } from "electron";

type TRendererReloader = (
  paths: string | string[],
  ignored?: RegExp | RegExp[],
  handler?: (error: Error | undefined, path: string | undefined) => void,
  options?: chokidar.WatchOptions,
) => void;

const ignoredDefault: RegExp = /(node_modules|bower_components)/;

export const rendererReloader: TRendererReloader = (
  paths: string | string[],
  ignored?: RegExp | RegExp[],
  handler?: (error: Error | undefined, path: string | undefined) => void,
  options?: chokidar.WatchOptions,
): void => {
  const ignoredPaths: RegExp[] = [ignoredDefault];

  if (typeof ignored === "object") {
    ignoredPaths.concat(ignored);
  }

  const watcher: chokidar.FSWatcher = chokidar.watch(paths, {
    ignored: ignoredPaths,
    ...options,
  });

  watcher.on("error", (error: Error) => {
    if (typeof handler === "function") {
      handler(error, undefined);
    }
  });

  watcher.on("change", (path: string) => {
    if (typeof handler === "function") {
      handler(undefined, path);
    }

    const windows: BrowserWindow[] = BrowserWindow.getAllWindows();

    windows.forEach((window: BrowserWindow) => {
      window.webContents.reloadIgnoringCache();
    });
  });
};
