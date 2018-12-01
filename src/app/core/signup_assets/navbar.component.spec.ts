import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
 describe('NavbarComponent', () => {
   let component: NavbarComponent;
   let fixture: ComponentFixture<NavbarComponent>;
   beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   beforeEach(async(() => {
     TestBed.configureTestingModule({
       declarations: [ NavbarComponent ]
     })
     .compileComponents();
   }));
   it('should create', () => {
     expect(component).toBeTruthy();
   });
 });