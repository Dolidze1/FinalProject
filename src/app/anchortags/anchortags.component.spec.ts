import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchortagsComponent } from './anchortags.component';

describe('AnchortagsComponent', () => {
  let component: AnchortagsComponent;
  let fixture: ComponentFixture<AnchortagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnchortagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchortagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
