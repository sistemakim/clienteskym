import Summary from '@/components/cuenta/Summary'
import Table from '@/components/cuenta/Table'
import { getCuenta } from '../../api/cuenta'
import { isValidNoCuenta } from '@/utils/isValidNoCuenta'
import { redirect } from 'next/navigation'


export default async function Cuenta({ params }: { params: { cuenta: string } }) {

    isValidNoCuenta(params.cuenta) ? null : redirect('/cuenta')

    const result = await getCuenta(params.cuenta)
    const data: any = await result

    return (
        <div className='bg-primary py-4'>
            <div className='px-5 py-2'>
                <Summary 
                    data={data[0]}
                />
            </div>
            <div className='px-5 py-2'>
                <Table
                    title='Tabla de amortización'
                    data={data[1]}
                />
            </div>
            <div className='px-5 py-2'>
                <Table
                    title='Recibos de pago'
                    data={data[2]}
                />
            </div>
        </div>
    )
}