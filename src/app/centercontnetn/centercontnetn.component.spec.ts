import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentercontnetnComponent } from './centercontnetn.component';

describe('CentercontnetnComponent', () => {
  let component: CentercontnetnComponent;
  let fixture: ComponentFixture<CentercontnetnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentercontnetnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentercontnetnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
