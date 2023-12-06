import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurcompanyComponent } from './ourcompany.component';

describe('OurcompanyComponent', () => {
  let component: OurcompanyComponent;
  let fixture: ComponentFixture<OurcompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurcompanyComponent]
    });
    fixture = TestBed.createComponent(OurcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
