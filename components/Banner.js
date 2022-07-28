import React from 'react';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image'


export default function Banner({ setIsMenuOpen }) {
    return (
    <div>
        <Image
            src="/img/Banner.jpg"
            alt={''}
            width={'100%'}
            height={50}
            layout="responsive"
          />
    </div>
    )
}