import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClinetComponent } from './add-clinet.component';

describe('AddClinetComponent', () => {
  let component: AddClinetComponent;
  let fixture: ComponentFixture<AddClinetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClinetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
