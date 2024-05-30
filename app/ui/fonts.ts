import { Inter, Lusitana, Outfit } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
});

export const lusitana = Lusitana({
  weight: '400',
  subsets: ['latin'],
});

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '700'],
})