import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IDistance extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    arow: boolean
}