import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Resize,
  Sort,
  Selection,
  Search,
  Page,
  ExcelExport,
  Toolbar,
  Edit,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { Header } from "../components";
import { customersData, customersGrid } from "../data/dummy";

const Customers = () => {
  return (
    <div className="p-2 m-2 bg-white rounded-3xl md:m-10 md:p-10 ">
      <Header category="Page" title="Customers" />

      <GridComponent
        dataSource={customersData}
        allowPaging
        toolbar={["Search", "Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        allowSorting
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            Selection,
            Search,
            Page,
            ExcelExport,
            Toolbar,
            Edit,
            Filter
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
