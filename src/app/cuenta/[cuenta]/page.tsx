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
    console.log(data[0]);
    

    return (
        <>
            {
                data[0] != null ?
                    <div className='bg-primary py-4'>
                        <div className='px-5 py-2'>
                            <Summary
                                data={data[0]}
                            />
                        </div>
                        <div className='px-5 py-2'>
                            <Table
                                title='Tabla de amortización'
                                columns={tablaAmortColumns}
                                data={data[1]}
                            />
                        </div>
                        <div className='px-5 py-2'>
                            <Table
                                columns={tablaPagosColumns}
                                title='Recibos de pago'
                                data={data[2]}
                            />
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