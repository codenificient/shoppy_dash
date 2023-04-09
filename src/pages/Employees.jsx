import {
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Edit,
  GridComponent,
  Inject,
  Page,
  Resize,
  Search,
  Sort,
  Toolbar
} from "@syncfusion/ej2-react-grids";
import React from "react";
import { Header } from "../components";
import { employeesData, employeesGrid } from "../data/dummy";

const Employees = () => {
  return (
    <div className="p-2 m-2 bg-white rounded-3xl md:m-10 md:p-10 ">
      <Header category="Page" title="Employees" />

      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, ContextMenu, Search, Page, Toolbar,Edit]}
        />
      </GridComponent>
    </div>
  );
};

export default Employees;
