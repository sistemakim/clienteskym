'use client'
import React from 'react';
import { Space, Table as AntdTable, Tag } from 'antd';

interface TablePropTypes {
    title: string,
    data: any,
    columns: any
}

const Table = ({ title, data, columns }: TablePropTypes) =>
    <div className='bg-white rounded-xl p-4'>
        <h1 className='font-semibold mb-2'>{title}</h1>
        <AntdTable
            columns={columns}
            dataSource={data}
            scroll={{ x: 800 }}
            bordered={true}
            size='middle'
        />
    </div>

export default Table;