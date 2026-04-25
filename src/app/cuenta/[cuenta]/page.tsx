import Summary from '@/components/cuenta/Summary'
import Table from '@/components/cuenta/Table'
import { getCuenta } from '../../api/cuenta'
import { isValidNoCuenta } from '@/utils/isValidNoCuenta'
import { redirect } from 'next/navigation'
import { Button, Result } from 'antd';
import { tablaAmortColumns, tablaPagosColumns } from '@/constants/columns'
import Link from 'next/link'

export default async function Cuenta({ params }: { params: Promise<{ cuenta: string }> }) {

    const { cuenta } = await params

    isValidNoCuenta(cuenta) ? null : redirect('/cuenta')

    const result = await getCuenta(cuenta)
    const data: any = await result

    if (data[0] == null) {
        return (
            <div className='bg-paper'>
                <Result
                    status='404'
                    title='Número de cuenta no encontrado'
                    subTitle='Parece que el número de cuenta ingresado no existe, intente con otro, por favor.'
                    extra={
                        <Link href={'/cuenta'}>
                            <Button type='primary'>Regresar</Button>
                        </Link>
                    }
                />
            </div>
        )
    }

    return (
        <div className='bg-paper'>
            <div className='mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 sm:py-10'>
                <Summary data={data[0]} />
                <Table
                    title='Tabla de amortización'
                    columns={tablaAmortColumns}
                    data={data[1]}
                />
                <Table
                    columns={tablaPagosColumns}
                    title='Recibos de pago'
                    data={data[2]}
                />
                <section className='rounded-2xl border border-ink/15 bg-white p-6 text-center'>
                    <p className='text-sm font-medium text-ink/70'>
                        Cualquier aclaración de tus pagos, mándanos un WhatsApp
                    </p>
                    <a
                        href='https://wa.me/16461935224'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='mt-3 inline-block text-2xl font-semibold tracking-tight text-ink hover:text-gold'
                    >
                        646 193 5224
                    </a>
                    <p className='mt-1 text-sm text-ink/55'>Será un placer atenderte</p>
                </section>
            </div>
        </div>
    )
}