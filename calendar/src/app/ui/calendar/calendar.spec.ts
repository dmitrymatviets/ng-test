import { TestBed, async } from '@angular/core/testing';
import { Calendar } from './calendar';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Calendar
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(Calendar);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'calendar'`, async(() => {
    const fixture = TestBed.createComponent(Calendar);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('calendar');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Calendar);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to calendar!');
  }));
});
