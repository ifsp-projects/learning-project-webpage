import React from 'react'

import { Table } from '@radix-ui/themes'

import { tableData } from './data'
import { tableProps } from './types'

export const TableNote: React.FC<tableProps> = () => {
  return (
    <Table.Root className="mt-6" size="1">
      <Table.Header className="mt-5 bg-slate-900 bg-opacity-5">
        <Table.Row>
          {tableData.length > 0 &&
            Object.keys(tableData[0]).map(key => (
              <Table.ColumnHeaderCell key={key}>{key}</Table.ColumnHeaderCell>
            ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableData.map((data, index) => (
          <Table.Row key={index}>
            <Table.RowHeaderCell>{data.Curso}</Table.RowHeaderCell>
            <Table.Cell>{data.Periodo}</Table.Cell>
            <Table.Cell className="text-green-300">{data.Situacao}</Table.Cell>
            <Table.Cell>{data.Nota}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
