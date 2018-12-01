import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 import { FooterComponent } from './footer.component';
 describe('FooterComponent', () => {
   let component: FooterComponent;
   let fixture: ComponentFixture<FooterComponent>;
   beforeEach(() => {
     fixture = TestBed.createComponent(FooterComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
   });
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));
   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });