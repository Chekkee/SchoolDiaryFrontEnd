import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebJournalComponent } from './web-journal.component';

describe('WebJournalComponent', () => {
  let component: WebJournalComponent;
  let fixture: ComponentFixture<WebJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
