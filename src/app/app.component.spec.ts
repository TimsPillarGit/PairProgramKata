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

  describe('Writing', () => {
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

  describe('Point durability', () => {
    it('should have an intial value of 10 for pencil point durability', () => {
      expect(component.pencil.pointDurability).toBe(10);
    });

    it('should reduce point durability by number of lowercase characters', () => {
      component.write('on');
      expect(component.pencil.pointDurability).toBe(8);
    });

    it('should double the reduction of point durability by number of uppercase characters', () => {
      component.write('ON');
      expect(component.pencil.pointDurability).toBe(6);
    });

    it('should calculate the point reduction for mix of uppercase and lowercase letters', () => {
      component.write('On');
      expect(component.pencil.pointDurability).toBe(7);
    });

    it('should ignore the point reduction for spaces and new lines', () => {
      component.write(' On \n');
      expect(component.pencil.pointDurability).toBe(7);
    });

    it('should ignore the point reduction for spaces when space is between characters', () => {
      component.write('O n');
      expect(component.pencil.pointDurability).toBe(7);
    });
  });

  describe('Sharpen', () => {
    it('should allow to sharpen a pencil and restore point durability', () => {
      component.write('O');
      expect(component.pencil.pointDurability).toBe(8);
      component.sharpen();
      expect(component.pencil.pointDurability).toBe(10);
    });
  });
});
