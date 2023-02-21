import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';


export interface IAddPath extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}