import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Image cache.
import { fromNativeSource } from 'tns-core-modules/image-source';
import { Cache } from 'tns-core-modules/ui/image-cache';

/**
 * Takes care of application internal cache.
 */
@Injectable()
export class CacheService {
  private imgCache: Cache;

  constructor() {
    this.imgCache = new Cache();
  }

  /**
   * Gets an image from the cache, if is not cached, we'll cache it.
   *
   * @param url
   * @returns {Promise<T>}
   */
  getImage(url: string) {
    return Observable.create(observer => {
      let isValidUrl = false;
      if (url) {
        isValidUrl = url.indexOf('http') > -1;
      }
      if (isValidUrl) {
        const img = this.imgCache.get(url);
        if (img) {
          observer.next(fromNativeSource(img));
          observer.complete();
        } else {
          this.cacheImage(url).then(_img => {
            observer.next(_img);
            observer.complete();
          });
        }
      } else if (url && (url.indexOf('ref') === 0 || url.indexOf('~') === 0)) {
        observer.next(url);
        observer.complete();
      }
    });
  }

  /**
   * Caches single image.
   *
   * @param url
   */
  private cacheImage(url: string) {
    return new Promise((resolve, reject) => {
      this.imgCache.push({
        key: url,
        url,
        completed: (image: any, key: string) => {
          if (key === url) {
            resolve(fromNativeSource(image));
          } else {
            reject(`Error caching image: ${url}`);
          }
        }
      });
    });
  }
}
