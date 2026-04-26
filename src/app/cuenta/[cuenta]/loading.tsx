export default function Loading() {
    return (
        <div className='bg-paper'>
            <div className='mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 sm:py-10'>
                <SummarySkeleton />
                <TableSkeleton />
                <TableSkeleton />
            </div>
        </div>
    );
}

function Bar({ className = '' }: { className?: string }) {
    return <div className={`animate-pulse rounded bg-ink/10 ${className}`} />;
}

function SummarySkeleton() {
    return (
        <div className='rounded-2xl border border-ink/15 bg-white p-5 sm:p-6'>
            <Bar className='mb-5 h-5 w-44' />

            <div className='grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-0'>
                <div className='flex flex-col gap-4 md:gap-6 md:pr-6'>
                    <div className='flex flex-row'>
                        <div className='h-14 w-14 shrink-0 animate-pulse rounded-full bg-ink/10' />
                        <div className='ml-4 flex min-w-0 flex-col gap-2'>
                            <Bar className='h-7 w-56' />
                            <Bar className='h-4 w-40' />
                        </div>
                    </div>

                    <div className='md:mt-auto'>
                        <Bar className='h-8 w-56 rounded-full' />
                    </div>
                </div>

                <div className='flex flex-col gap-5 border-t border-ink/10 pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0'>
                    <div className='flex flex-col gap-3'>
                        <Bar className='h-3 w-24' />
                        <Bar className='h-12 w-72' />
                    </div>

                    <div className='flex flex-col gap-2.5'>
                        <BreakdownRowSkeleton />
                        <BreakdownRowSkeleton />
                        <BreakdownRowSkeleton />
                    </div>
                </div>
            </div>
        </div>
    );
}

function BreakdownRowSkeleton() {
    return (
        <div className='flex items-baseline justify-between border-b border-dashed border-ink/10 pb-2 last:border-b-0 last:pb-0'>
            <Bar className='h-3.5 w-24' />
            <Bar className='h-4 w-28' />
        </div>
    );
}

function TableSkeleton() {
    return (
        <div className='rounded-2xl border border-ink/15 bg-white p-5 sm:p-6'>
            <Bar className='mb-4 h-5 w-52' />

            <div className='flex flex-col gap-3'>
                <div className='grid grid-cols-5 gap-4 border-b border-ink/10 pb-3'>
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Bar key={i} className='h-3.5 w-4/5' />
                    ))}
                </div>

                {Array.from({ length: 6 }).map((_, rowIdx) => (
                    <div key={rowIdx} className='grid grid-cols-5 gap-4 py-1.5'>
                        {Array.from({ length: 5 }).map((_, colIdx) => (
                            <Bar
                                key={colIdx}
                                className={`h-3.5 ${colIdx === 0 ? 'w-3/5' : 'w-[85%]'}`}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
