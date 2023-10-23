import localFont from '@next/font/local'

export const dana = localFont({
    src: [
        {
            path: '../../public/fonts2/fonts/dana-light.ttf',
            weight: '300'
        },
        {
            path: '../../public/fonts2/fonts/dana-medium.ttf',
            weight: '400'
        },
        {
            path: '../../public/fonts2/fonts/dana-demibold.ttf',
            weight: '700'
        },
        {
            path: '../../public/fonts2/fonts/dana-demibold.ttf',
            weight: '800'
        },
        {
            path: '../../public/fonts2/fonts/dana-ultrabold.ttf',
            weight: '900'
        },
    ],
    variable: '--font-dana'
})