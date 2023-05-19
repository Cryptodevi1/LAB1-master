import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
   let service: RecursionService;

   beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(RecursionService);
   });

   fit('should be created', () => {
      expect(service).toBeTruthy();
   });
   
   fit('Сума ряду за допомогою рекурсії значення x = 0.1 та y = 0.9983', () => {
      let x = 0.1;
      let y = 0.9983;
      let y1 = 1;
      service.getRecursion(x,-1, 1, 2, y1);
      expect(y.toFixed(2)).toBe(y1.toFixed(2));
   });
});
