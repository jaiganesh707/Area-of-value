import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOfComponent } from './area-of.component';

describe('AreaOfComponent', () => {
  let component: AreaOfComponent;
  let fixture: ComponentFixture<AreaOfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaOfComponent]
    });
    fixture = TestBed.createComponent(AreaOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
