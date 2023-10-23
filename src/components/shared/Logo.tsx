import Image from 'next/image'
import React from 'react'

type Props = {
    width: number,
    height: number,
}

function Logo({ width, height }: Props) {
    return (
        <Image
            alt='logo bazano'
            src='/images/Group 777.png'
            width={width}
            height={height}
        />
    )
}

export default Logo