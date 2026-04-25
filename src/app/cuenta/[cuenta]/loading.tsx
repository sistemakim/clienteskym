import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function Loading() {
    return (
        <div className='bg-paper'>
            <div className='mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 sm:py-10'>
                <div className='flex h-[20rem] w-full items-center justify-center rounded-2xl border border-ink/15 bg-white'>
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
                </div>
                <div className='flex h-[30rem] w-full items-center justify-center rounded-2xl border border-ink/15 bg-white'>
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
                </div>
                <div className='flex h-[30rem] w-full items-center justify-center rounded-2xl border border-ink/15 bg-white'>
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
                </div>
            </div>
        </div>
    )
}
