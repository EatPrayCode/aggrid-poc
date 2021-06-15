import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CustomPinnedRowRenderer } from './custom-pinned-row-renderer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public gridApi: any;
  public gridColumnApi: any;

  public columnDefs: any;
  // public defaultColDef: any;

  public rowData: any = [
    { id: 123, product: "ABC", qty: 2, price: 30 },
    { id: 234, product: "DEF", qty: 1, price: 130 },
    { id: 345, product: "FGH", qty: 3, price: 300 },
    { id: 456, product: "IJK", qty: 2, price: 60 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 123, product: "ABC", qty: 2, price: 30 },
    { id: 234, product: "DEF", qty: 1, price: 130 },
    { id: 345, product: "FGH", qty: 3, price: 300 },
    { id: 456, product: "IJK", qty: 2, price: 60 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 123, product: "ABC", qty: 2, price: 30 },
    { id: 234, product: "DEF", qty: 1, price: 130 },
    { id: 345, product: "FGH", qty: 3, price: 300 },
    { id: 456, product: "IJK", qty: 2, price: 60 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 123, product: "ABC", qty: 2, price: 30 },
    { id: 234, product: "DEF", qty: 1, price: 130 },
    { id: 345, product: "FGH", qty: 3, price: 300 },
    { id: 456, product: "IJK", qty: 2, price: 60 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 123, product: "ABC", qty: 2, price: 30 },
    { id: 234, product: "DEF", qty: 1, price: 130 },
    { id: 345, product: "FGH", qty: 3, price: 300 },
    { id: 456, product: "IJK", qty: 2, price: 60 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 123, product: "ABC", qty: 2, price: 30 },
    { id: 234, product: "DEF", qty: 1, price: 130 },
    { id: 345, product: "FGH", qty: 3, price: 300 },
    { id: 456, product: "IJK", qty: 2, price: 60 },
    { id: 567, product: "LMN", qty: 5, price: 50 },
    { id: 567, product: "LMN", qty: 5, price: 50 }
  ];

  public pinnedTopRowData;
  public pinnedBottomRowData;

  public components: any = [];

  oldCellSelectedCell: any;

  currency = [
    { name: 'USD', factor: 1 },
    { name: 'INR', factor: 70 },
    { name: 'GBP', factor: 2 }
  ];

  // columns: ColDef[] = [
  //   { field: "id", headerName: "ID" },
  //   { field: "product", headerName: "Product", minWidth: 120 },
  //   { field: "qty", headerName: "Quantity" },
  //   { field: "price", headerName: "Price (in USD)", minWidth: 120 }
  // ];

  constructor() {

    this.columnDefs = [
      {
        headerName: 'Make',
        field: 'make',
        sortable: true,
        filter: true,
        checkboxSelection: true,
        headerCheckboxSelection: true
      },
      // {
      //   headerName: 'Athlete Details',
      //   children: [
      //     {
      //       field: "id", headerName: "ID",
      //       // cellRenderer: function (param: any) {
      //       //   return param.data.qty + '<br/>' + param.data.price;
      //       // }
      //     },
      //     {
      //       field: "product", headerName: "Product", minWidth: 120,
      //       cellStyle: function (params: any) {

      //         /*
      //         Params give assess to the row node from which we can
      //         get the node data. So you can get the data for
      //         another column and style your column based on that.
      //         */

      //         var goals = params.node.data.qty;
      //         let background = 'red';

      //         if (goals === 0) {
      //           background = "#B70000"
      //         } else if (goals === 1 || goals === 2) {
      //           background = "#FF8400"
      //         } else if (goals === 3 || goals === 4) {
      //           background = "#FFF700"
      //         } else if (goals === 5 || goals === 6) {
      //           background = "#CEFF00"
      //         } else if (goals === 7) {
      //           background = "#05CC00"
      //         } else {
      //           background = "#fff"
      //         }

      //         if (params.node.data.isCellSelected) {
      //           background = "";
      //         }

      //         return {
      //           background: background
      //         };
      //       }

      //     },
      //   ]
      // },
      // {
      //   headerName: 'Sports Results',
      //   children: [
      //     {
      //       field: "qty", headerName: "Quantity",
      //       cellRenderer: function (param: any) {
      //         return param.data.qty + '<br/>' + param.data.price;
      //       }
      //     },
      //     {
      //       field: "price",
      //       headerName: "Price (in USD)",
      //       minWidth: 120,
      //       cellRenderer: function (param: any) {
      //         return param.data.qty + '<br/>' + param.data.price;
      //       }
      //     }
      //   ]
      // }
    ];

    this.pinnedTopRowData = createData(1, 'Top');
    this.pinnedBottomRowData = createData(1, 'Bottom');
    this.components = {
      // customPinnedRowRenderer: CustomPinnedRowRenderer,
    };
    // this.defaultColDef = {
    //   resizable: true,
    //   width: 170,
    // };
  }

  getSelectedRows() {
    const selectedRow = this.gridApi.getSelectedRows();
    console.log(selectedRow);
    //debugger;
    // console.log(this.agGrid);
    // const selectedNodes = this.agGrid.api.getSelectedNodes(); debugger;
    // const selectedData = selectedNodes.map(node => node.data);
    // const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    // alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onCellClicked(params: any) {
    if (this.oldCellSelectedCell && (params.column.colId == this.oldCellSelectedCell.column.colId)) {
      this.oldCellSelectedCell.node.setData({
        ...this.oldCellSelectedCell.data,
        isCellSelected: false
      });
    }
    if (params.column.colId === 'id') {
      params.node.setData({
        ...params.data,
        isCellSelected: true
      });
      this.oldCellSelectedCell = params;
    }
  }

  getRowStyle(params: any) {
    if (params.data.isCellSelected) {
      return { 'background-color': 'pink' }
    }
    else {
      return { 'background-color': '' }
    }
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();

    const total = this.rowData
      .map((data: any) => data.price)
      .reduce((res: any, curr: any) => res + curr, 0);
    const obj = {};
    this.rowData.forEach((ele: any) => {

    });

    this.gridApi.setPinnedBottomRowData([
      { qty: 2, price: 30, id: 'Total' }
    ]);
  }

  onBtPrint() {
    const api = this.gridApi;
    const eGridDiv: any = document.querySelector('#myGrid');
    eGridDiv.style.height = '';
    eGridDiv.style.width = '';
    setTimeout(function () {
      api.setDomLayout('print');
      print();
      // setNormal(api);
    }, 2000);
  }
}

function setPrinterFriendly(api: any) {}

function setNormal(api: any) {
  const eGridDiv: any = document.querySelector('#myGrid');
  api.setDomLayout(null);
}

function createData(count: any, prefix: any) {
  var result = [];
  for (var i = 0; i < count; i++) {
    result.push({
      make: 'Toyota', model: 'Celica', price: 35000 ,
      athlete: prefix + ' Athlete ' + i,
      age: prefix + ' Age ' + i,
      country: prefix + ' Country ' + i,
      year: prefix + ' Year ' + i,
      date: prefix + ' Date ' + i,
      sport: prefix + ' Sport ' + i,
    });
  }
  return result;
}

// function onCellClicked(params:any) {
//   const focusedCell =  params.api.getFocusedCell();
//   focusedCell.column.colDef.cellStyle = { 'background-color': '#b7e4ff' };
//   params.api.refreshCells({
//       force: true // this updates the whole column, not only the clicked cell
//   });
// }
