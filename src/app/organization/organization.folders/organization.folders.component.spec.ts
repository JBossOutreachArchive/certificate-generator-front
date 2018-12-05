import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationFoldersComponent } from './organization.folders.component';

describe('Organization.FoldersComponent', () => {
  let component: OrganizationFoldersComponent;
  let fixture: ComponentFixture<OrganizationFoldersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationFoldersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
