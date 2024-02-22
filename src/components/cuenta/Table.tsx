'use client'
import React from 'react';
import { Space, Table as AntdTable, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag === 'EN COBRO' ? 'geekblue' : 'green';
                    if (tag === 'VENCIDO') {
                        color = 'red';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['PAGADO'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['EN COBRO'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['VENCIDO'],
    },
];

interface TablePropTypes {
    title: string
}

const Table = ({title}: TablePropTypes) =>
    <div className='bg-white rounded-xl p-4'>
        <h1 className='font-semibold mb-2'>{title}</h1>
        <AntdTable
            columns={columns}
            dataSource={data}
            scroll={{x: 800}}
            bordered={true}
            size='middle'
        />
    </div>

export default Table;