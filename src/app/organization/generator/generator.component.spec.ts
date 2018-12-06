import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 import { GeneratorComponent } from './generator.component';
 describe('GeneratorComponent', () => {
  let component: GeneratorComponent;
  let fixture: ComponentFixture<GeneratorComponent>;
   beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorComponent ]
    })
    .compileComponents();
  }));
   beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
   it('should create', () => {
    expect(component).toBeTruthy();
  });
});