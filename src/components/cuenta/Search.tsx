'use client'
import React from 'react'
import { Input } from 'antd';

export default function Search() {
    const { Search } = Input;
    return (
        <div className='flex items-center bg-white p-4 rounded-xl'>
            <span className='w-[180px]'>No. de cuenta:</span>
            <Search 
                placeholder="Ingrese su número de cuenta" 
                loading={false}
                enterButton 
            />
        </div>
    )
}
