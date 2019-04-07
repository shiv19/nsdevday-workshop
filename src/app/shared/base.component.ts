import { topmost } from "tns-core-modules/ui/frame/frame";

export class BaseComponent {

    constructor() {
        // Use the component constructor to inject providers.
    }

    onGoBack() {
      topmost().goBack();
    }
}
