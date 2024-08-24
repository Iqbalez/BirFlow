'use client'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className='w-full'>
            <CountUp decimals={2} decimal='.' end={amount} /> Birr
        </div>
    )
}

export default AnimatedCounter