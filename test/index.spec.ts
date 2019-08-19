import path from "path";
// tslint:disable-next-line: no-implicit-dependencies
import { Application } from "spectron";

const applicationPath: string = path.join(__dirname, "application");
const electronPath: string = path.join(__dirname, "application", "node_modules", ".bin", "electron");

describe("RendererReloader", () => {
  it("start() / stop()", async () => {
    const app: Application = new Application({
      args: [applicationPath],
      path: electronPath,
    });

    await app.start();
    await app.stop();
  });
});
