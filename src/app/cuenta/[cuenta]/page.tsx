import Summary from '@/components/cuenta/Summary'
import Table from '@/components/cuenta/Table'
import { getCuenta } from '../../api/cuenta'
import { isValidNoCuenta } from '@/utils/isValidNoCuenta'
import { redirect } from 'next/navigation'
import { Result } from 'antd';
import { tablaAmortColumns, tablaPagosColumns } from '@/constants/columns'
import Search from '@/components/cuenta/Search'

export default async function Cuenta({ params }: { params: Promise<{ cuenta: string }> }) {
    const { cuenta } = await params

    if (!isValidNoCuenta(cuenta)) redirect('/')

    const [summary, amort, pagos] = await getCuenta(cuenta)

    if (!summary) {
        return (
            <Result
                status='warning'
                title='Número de cuenta no encontrado'
                subTitle='Parece que el número de cuenta ingresado no existe, intente con otro, por favor.'
                extra={<Search styleVariant='compact' />}
            />
        )
    }

    return (
        <>
            <Search styleVariant='compact' />
            <div className='mx-auto flex max-w-7xl flex-col gap-5 py-4 sm:px-8 sm:py-10'>
                <Summary data={summary} />
                <Table
                    title='Tabla de amortización'
                    columns={tablaAmortColumns}
                    data={amort}
                    rowKey='IdTA'
                />
                <Table
                    columns={tablaPagosColumns}
                    title='Recibos de pago'
                    data={pagos}
                    rowKey='IdPagsCli'
                />
            </div>
        </>
    )
}