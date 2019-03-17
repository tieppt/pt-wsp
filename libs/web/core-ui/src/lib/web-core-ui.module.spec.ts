import { async, TestBed } from '@angular/core/testing';
import { WebCoreUiModule } from './web-core-ui.module';

describe('WebCoreUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WebCoreUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WebCoreUiModule).toBeDefined();
  });
});
