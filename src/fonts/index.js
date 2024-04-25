import { PT_Serif_Caption, Noto_Sans_KR } from 'next/font/google';

export const ptSerif = PT_Serif_Caption({
    subsets: ['latin'],
    variable: '--font-pt-serif',
    weight:["400"]
});

export const notoSansKR = Noto_Sans_KR({
    subsets: ['latin'],
    variable: '--font-noto-kr',
});
