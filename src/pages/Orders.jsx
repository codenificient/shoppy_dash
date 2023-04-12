import React from 'react'
import { Header } from '../components'
import { GridComponent,ColumnsDirective,ColumnDirective, Inject, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit } from '@syncfusion/ej2-react-grids'

import { ordersData, ordersGrid } from '../data/dummy'

const Orders = () => {
  return (
	<div className='p-2 m-2 bg-white  md:m-10 md:p-10 rounded-3xl '>
    <Header category="Page" title="Orders" />

    <GridComponent
    id='gridcomp'
    dataSource={ordersData}
    allowPaging
    allowSorting
    >
      <ColumnsDirective>
      {
        ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))
      }
      </ColumnsDirective>
      <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit]} />
    </GridComponent>
  </div>
  )
}

export default Orders