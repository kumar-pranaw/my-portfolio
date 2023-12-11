import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTechnicalEventsComponent } from './my-technical-events.component';

describe('MyTechnicalEventsComponent', () => {
  let component: MyTechnicalEventsComponent;
  let fixture: ComponentFixture<MyTechnicalEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTechnicalEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTechnicalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
