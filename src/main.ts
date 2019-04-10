// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";
import { AppOptions } from "nativescript-angular/platform-common";

const options: AppOptions = {};
if (module["hot"]) {
    // attach to livesync hooks and perfrom navigation
    require("./livesync-navigation").attachLivesyncNavigation();
    const hmrUpdate = require("nativescript-dev-webpack/hmr").hmrUpdate;

    options.hmrOptions = {
        moduleTypeFactory: () => AppModule,
        livesyncCallback: (platformReboot) => {
            console.log("HMR: Sync...");
            hmrUpdate();
            setTimeout(platformReboot, 0);
        },
    };
    hmrUpdate();

    module["hot"].accept(["./app/app.module"]);
}

platformNativeScriptDynamic(options).bootstrapModule(AppModule);
