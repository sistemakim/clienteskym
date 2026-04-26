import Summary from '@/components/cuenta/Summary'
import Table from '@/components/cuenta/Table'
import { getCuenta } from '../../api/cuenta'
import { isValidNoCuenta } from '@/utils/isValidNoCuenta'
import { redirect } from 'next/navigation'
import { Button, Result } from 'antd';
import { tablaAmortColumns, tablaPagosColumns } from '@/constants/columns'
import Link from 'next/link'
import Search from '@/components/cuenta/Search'
import Contact from '@/components/home/Contact'

export default async function Cuenta({ params }: { params: Promise<{ cuenta: string }> }) {

    const { cuenta } = await params

    isValidNoCuenta(cuenta) ? null : redirect('/cuenta')

    const result = await getCuenta(cuenta)
    const data: any = await result

    if (data[0] == null) {
        return (
            <Result
                status='404'
                title='Número de cuenta no encontrado'
                subTitle='Parece que el número de cuenta ingresado no existe, intente con otro, por favor.'
                extra={
                    <Link href={'/'}>
                        <Button type='primary'>Regresar</Button>
                    </Link>
                }
            />
        )
    }

    return (
        <div className='bg-paper p-5 pt-24'>
            <Search
                styleVariant='compact'
            />
            <div className='mx-auto flex max-w-7xl flex-col gap-5 py-4 sm:px-8 sm:py-10'>
                <Summary data={data[0]} />
                <Table
                    title='Tabla de amortización'
                    columns={tablaAmortColumns}
                    data={data[1]}
                    rowKey='IdTA'
                />
                <Table
                    columns={tablaPagosColumns}
                    title='Recibos de pago'
                    data={data[2]}
                    rowKey='IdPagsCli'
                />
                <Contact/>
            </div>
        </div>
    )
}