import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export default function Loading() {
    return (
        <div className='bg-primary py-4'>
            <div className='px-5 py-2'>
                <div className='w-full h-[20rem] bg-white flex items-center justify-center rounded-xl'>
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
                </div>
            </div>
            <div className='px-5 py-2'>
                <div className='w-full h-[30rem] bg-white flex items-center justify-center rounded-xl'>
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
                </div>
            </div>
            <div className='px-5 py-2'>
                <div className='w-full h-[30rem] bg-white flex items-center justify-center rounded-xl'>
                    <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
                </div>
            </div>
        </div>
    )
} 
