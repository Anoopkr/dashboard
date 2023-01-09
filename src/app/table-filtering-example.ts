import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

export interface Workflows {
  workflow_name: string;
  workflow_state: number;
  job_name: string;
  job_state: number;
  job_started: string;
  // job_updated: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

const ELEMENT_DATA: Workflows[] = [
  {workflow_name: "Harvest Transfer EDL (S3 to Nessie)", workflow_state: 1, job_name: '21218989-AGTAS_104_ACT07_RC_1229_SPLIT.mov', job_state:5, job_started:"Mon Jan 02 2023 19:19:17"},
  {workflow_name: "Ready for 2017 Development GW", workflow_state: 1, job_name: '21217068-AGTAS_104_ACT06_RC_1229_SPLIT.mov',job_state:5,job_started:"Mon Jan 02 2023 19:19:17"},
  {workflow_name: "H264 Dashboard 1280x720 RemovesSlate", workflow_state: 1, job_name: '21217055-AGTAS_104_ACT10_RC_1229_SPLIT.mov',job_state:5, job_started:"Mon Jan 02 2023 19:19:17"},
  {workflow_name: "TrimSlate (Copy)", workflow_state: 1, job_name: '21217062-AGTAS_104_ACT01_RC_1229_SPLIT.mov',job_state:5, job_started:"Mon Jan 02 2023 19:19:17"},
  {workflow_name: "H264 1920x1080 AudioDirect",workflow_state: 1, job_name: '21217066-AGTAS_104_ACT04_RC_1229_SPLIT.mov',job_state:5, job_started:"Mon Jan 02 2023 19:19:17"},
  {workflow_name: "1_Watch Ingest from folders on Nessie SHOOT (PMAM) No Avid", workflow_state: 1, job_name: '21216640-AGTAS_104_ACT03_RC_1229_SPLIT.mov',job_state:5, job_started:"Mon Jan 02 2023 19:19:17"},
  {workflow_name: "Exec Review Sorted",  workflow_state: 1, job_name: '21217069-AGTAS_104_ACT08_RC_1229_SPLIT.mov',job_state:5,job_started:"Mon Jan 02 2023 19:19:17"},
  {workflow_name: "News-Sports_To_OTSM", workflow_state: 1, job_name: '21216655-AGTAS_104_ACT09_RC_1229_SPLIT.mov',job_state:5,job_started:"Mon Jan 02 2023 19:19:17"},
  {workflow_name: "News-Sports_Watermark_To_OTSM",  workflow_state: 1, job_name: '21216639-AGTAS_104_ACT02_RC_1229_SPLIT.mov',job_state:5,job_started:"Mon Jan 02 2023 19:19:17"},
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'table-filtering-example',
  styleUrls: ['table-filtering-example.css'],
  templateUrl: 'table-filtering-example.html',
})
export class TableFilteringExample {
  displayedColumns: string[] = ['workflow_name', 'workflow_state', 'job_name','job_state','job_started'];
  // displayedColumns: string[] = ['Workflow Name', 'Description', 'Workflow State', 'Job Name', 'Job State','Job Started'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */