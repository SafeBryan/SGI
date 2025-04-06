import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { metaDataColumn } from '../../interfaces/metadatacolumn.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sgi-table',
  imports: [MatTableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() data: any;
  @Input() metaDataColumns!: metaDataColumn[];
  columns: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['metaDataColumns']) {
      this.columns = this.metaDataColumns.map((m) => m.field);
    }
  }
}
