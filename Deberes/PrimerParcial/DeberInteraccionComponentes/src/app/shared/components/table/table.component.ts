import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { metaDataColumn } from '../../interfaces/metadatacolumn.interface';

@Component({
  selector: 'bpaz-table',
  imports: [MatTableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'], // Se corrigió la propiedad
})
export class TableComponent {
  @Input() data: any;
  @Input() metaDataColumns!: metaDataColumn[];


  @Output() add: EventEmitter<void> = new EventEmitter();

  columns: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaDataColumns']) {
      this.columns = this.metaDataColumns.map((m) => m.field);
    }
  }

  onAdd() {
    this.add.emit();
  }
}
