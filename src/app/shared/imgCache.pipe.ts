import { Pipe, PipeTransform } from '@angular/core';
import { CacheService } from '../services/cache.service';

@Pipe({ name: 'imgCache' })
export class ImgCachePipe implements PipeTransform {
  constructor(private cacheService: CacheService) {}
  transform(value: string) {
    return this.cacheService.getImage(value);
  }
}
