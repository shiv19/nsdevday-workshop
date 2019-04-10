import { View } from "tns-core-modules/ui/page/page";

/**
 * Adds a pop animation to the view
 *
 * @param {object} view - the nativescript view you want to animate
 * @returns {Promise<void>} promise - always resolves
 */
export async function touchPop(view: View): Promise<{}> {
  return new Promise((resolve, _) => {
    if (view && view.animate) {
      try {
        view.animate({
            scale: { x: 0.9, y: 0.9 },
            duration: 120,
            curve: 'easeIn'
          })
          .then(() => {
            view.animate({
                scale: { x: 1, y: 1 },
                duration: 90,
                curve: 'easeOut'
              })
          });
        resolve();
      } catch(e) {
        resolve();
      }
    }
  });
}

/**
 * Disables bounce/overscroll for scrollViews or ListViews on Android and iOS
 **/
export function disableScrollBounce(view: View): void {
  if (!view) return;
  if (view.ios) {
    view.ios.bounces = false;
  } else if (view.android) {
    view.android.setOverScrollMode(2);
  }
}

/**
 * Hides horizontal scrollbars for scrollViews or ListViews on Android and iOS
 **/
export function removeHorizontalScrollBars(view: View): void {
  if (!view) return;
  if (view.ios) {
    view.ios.showsHorizontalScrollIndicator = false;
  } else if (view.android) {
    view.android.setHorizontalScrollBarEnabled(false);
  }
}

/**
 * Hides vertical scrollbars for scrollViews or ListViews on Android and iOS
 **/
export function removeVerticalScrollBars(view: View): void {
  if (!view) return;
  if (view.ios) {
    view.ios.showsVerticalScrollIndicator = false;
  } else if (view.android) {
    view.android.setVerticalScrollBarEnabled(false);
  }
}
