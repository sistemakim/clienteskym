'use client'
import React from 'react';
import { Table as AntdTable } from 'antd';

interface TablePropTypes {
    title: string,
    data: any,
    columns: any
}

const Table = ({ title, data, columns }: TablePropTypes) =>
    <div className='rounded-2xl border border-ink/15 bg-white p-5 sm:p-6'>
        <h2 className='mb-4 text-lg font-semibold tracking-tight text-ink'>{title}</h2>
        <AntdTable
            columns={columns}
            dataSource={data}
            scroll={{ x: 800 }}
            bordered={false}
            size='small'
        />
    </div>

export default Table;
