import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewvideoComponent } from './addnewvideo.component';

describe('AddnewvideoComponent', () => {
  let component: AddnewvideoComponent;
  let fixture: ComponentFixture<AddnewvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
