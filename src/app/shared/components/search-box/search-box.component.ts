import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  // Import and create a new Output of type string (got to parent component to get and work with data)
  @Output() newTerm = new EventEmitter<string>();

  // Send input value
  addNewTerm(value: string): void {
    this.newTerm.emit(value);
  }
}
