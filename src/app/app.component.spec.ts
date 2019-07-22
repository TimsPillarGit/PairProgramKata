import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should allow user to write text to paper', () => {
    component.write('test');
    expect(component.paper).toBe('test');
  });

  it('should allow user to write text to paper and it should append to existing text', () => {
    component.write('test ');
    component.write('test2');
    expect(component.paper).toBe('test test2');
  });
});
