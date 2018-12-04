import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGroupsComponent } from './student.groups.component';

describe('Student.GroupsComponent', () => {
  let component: StudentGroupsComponent;
  let fixture: ComponentFixture<StudentGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
