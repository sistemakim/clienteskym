import Summary from '@/components/cuenta/Summary'
import Table from '@/components/cuenta/Table'
import { getCuenta } from '../../api/cuenta'
import { isValidNoCuenta } from '@/utils/isValidNoCuenta'
import { redirect } from 'next/navigation'
import { Button, Result } from 'antd';
import { tablaAmortColumns, tablaPagosColumns } from '@/constants/columns'
import Link from 'next/link'

export default async function Cuenta({ params }: { params: { cuenta: string } }) {

    isValidNoCuenta(params.cuenta) ? null : redirect('/cuenta')

    const result = await getCuenta(params.cuenta)
    const data: any = await result

    return (
        <>
            {
                data[0] != null ?
                    <div className='bg-primary py-4'>
                        {/* Summary */}
                        <div className='px-5 py-2'>
                            <Summary
                                data={data[0]}
                            />
                        </div>
                        {/* Tabla amortizacion */}
                        <div className='px-5 py-2'>
                            <Table
                                title='Tabla de amortización'
                                columns={tablaAmortColumns}
                                data={data[1]}
                            />
                        </div>
                        {/* Recibos de pago */}
                        <div className='px-5 py-2'>
                            <Table
                                columns={tablaPagosColumns}
                                title='Recibos de pago'
                                data={data[2]}
                            />
                        </div>
                        <div className='px-5 py-2'>
                            <div className='bg-white rounded-xl p-4 text-center'>
                                <h1 className='font-semibold'>Cualquier aclaración de tus pagos, mándanos un Whatsapp</h1>
                                <h1 className='text-xl mt-3'>646 132 5082</h1>
                                <h1>Marco Soto Lozano</h1>
                            </div>
                        </div>
                    </div>
                    :
                    <Result
                        status="404"
                        title="Número de cuenta no encontrado"
                        subTitle="Parece que el número de cuenta ingresado no existe, intente con otro, por favor."
                        extra={
                            <Link href={'/cuenta'}>
                                <Button type="primary">Regresar</Button>
                            </Link>
                        }
                    />
            }
        </>
    )
}