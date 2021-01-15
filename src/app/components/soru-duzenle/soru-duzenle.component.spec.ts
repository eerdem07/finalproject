/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SoruDuzenleComponent } from './soru-duzenle.component';

describe('SoruDuzenleComponent', () => {
  let component: SoruDuzenleComponent;
  let fixture: ComponentFixture<SoruDuzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoruDuzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoruDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
