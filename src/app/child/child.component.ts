import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  value: string = 'Melek';

  constructor() {
    console.log('Constructor called ! it is not considered as a lifecycle hook');
    //console.log('value inside constructor = ' + this.value);// at this level it will display Melek, but then it will be overridden by value coming from the parent
  }

  ngOnInit(): void {
    console.log('ngOnInit called ! it is called only once !');
    //console.log('value inside ngOnInit (it is now overridden !) = ' + this.value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called ! it is called when Angular app runs for the first time AND ALSO when the value changes !');
    console.log('changes = ' + JSON.stringify(changes));
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called ! it is called whenever an event happen, even if there is not changes !');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called ! it is called only once when projected content is initialized !');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called ! it is called every time when projected content changes !');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called ! it is called only once when the component view and all its children views are initialized !');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called ! it is called for every change in the component view !');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called !');
  }

}
