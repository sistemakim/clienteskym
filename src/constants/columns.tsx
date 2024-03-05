'use client'
import type { TableProps } from 'antd';
import { Tag } from 'antd';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

export const tablaAmortColumns: TableProps<any>['columns'] = [
    {
        title: 'No. Pago',
        dataIndex: 'NoPag',
        key: 'NoPag',
    },
    {
        title: 'Fecha de pago',
        dataIndex: 'FecPag',
        key: 'FecPag',
    },
    {
        title: 'Status',
        dataIndex: 'Status',
        key: 'Status',
        render: (text) => {

            if (text == '') return null

            let color = text == 'EN COBRO' ? 'geekblue' : 'green';
            if (text == 'VENCIDO') {
                color = 'red';
            }
            return (
                <Tag color={color}>{text}</Tag>
            )
        }
    },
    {
        title: 'Abono',
        dataIndex: 'Abono',
        key: 'Abono',
    },
    {
        title: 'Int. Mort.',
        dataIndex: 'IntMor',
        key: 'IntMor',
    },
    {
        title: 'A Cuenta',
        dataIndex: 'ACuent',
        key: 'ACuent',
    },
    {
        title: 'Por Cobrar',
        dataIndex: 'PorCob',
        key: 'PorCob',
    },
    {
        title: 'Saldo vencido',
        dataIndex: 'SalVen',
        key: 'SalVen',
    },
    {
        title: 'Nuevo saldo',
        dataIndex: 'NvoSal',
        key: 'NvoSal',
    },
    {
        title: 'Punto Pago',
        dataIndex: 'PuntPag',
        key: 'PuntPag',
        render: (text) => {

            if (text == '') return null

            let color = text == 'V' ? 'geekblue' : 'green';
            if (text == 'A') {
                color = 'red';
            }
            return (
                <Tag color={color}>{text}</Tag>
            )
        }
    },
];

export const tablaPagosColumns: TableProps<DataType>['columns'] = [
    {
        title: 'No. Recibo',
        dataIndex: 'NoRec',
        key: 'NoRec',
    },
    {
        title: 'Fecha de pago',
        dataIndex: 'FecPag1',
        key: 'FecPag1',
    },
    {
        title: 'Forma de pago',
        dataIndex: 'FormPag',
        key: 'FormPag',
    },
    {
        title: 'Tipo de pago',
        dataIndex: 'TipPag',
        key: 'TipPag',
    },
    // {
    //     title: 'Referencia bancaria',
    //     dataIndex: 'RefBanc',
    //     key: 'RefBanc',
    // },
    {
        title: 'Importe',
        dataIndex: 'Importe',
        key: 'Importe',
    },
    {
        title: 'Status',
        dataIndex: 'Status',
        key: 'Status',
        render: (text) => {
            if (text == '') return null

            let color = text == 'VIGENTE' ? 'geekblue' : 'red';

            return (
                <Tag color={color}>{text}</Tag>
            )
        }
    },
];
