import Summary from '@/components/cuenta/Summary'
import Table from '@/components/cuenta/Table'
import { getCuenta } from '../../api/cuenta'


export default async function Cuenta({ params }: { params: { cuenta: string } }) {

    const result = await getCuenta()
    const data: any = await result
    return (
        <div className='bg-primary'>
            <h1>{params.cuenta}</h1>
            <div className='px-5 py-2'>
                <Summary />
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