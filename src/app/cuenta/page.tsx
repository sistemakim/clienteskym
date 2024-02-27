import Search from '@/components/cuenta/Search'
import Summary from '@/components/cuenta/Summary'
import Table from '@/components/cuenta/Table'
import React from 'react'
import { getCuenta } from '../api/cuenta'

export default async function Cuenta() {
    const result = await getCuenta()
    const data: any = await result
    console.log(data[0]['Nombre']);
    
    
    
    return (
        <div className='bg-primary'>
            <div className='px-5 pb-2 pt-5'>
                <Search />
            </div>
            <div className='px-5 py-2'>
                <Summary/>
            </div>
            <div className='px-5 py-2'>
                <Table 
                    title='Tabla de amortización'
                />
            </div>
            <div className='px-5 py-2'>
                <Table 
                    title='Recibos de pago'
                />
            </div>
        </div>
    )
}
