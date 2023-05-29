import { HeaderSearchInput } from '../Inputs/header-search';
import { CartControl } from './cart-control';
import * as S from './header-styled';

import { Saira_Stencil_One } from 'next/font/google'

const sairaStencil = Saira_Stencil_One({ 
  weight: ['400'],
  subsets: ['latin']
 })


interface HeaderProps{

}


export function Header(props:HeaderProps){
    return(
        <S.TagHeader>
            <div className='container'>
                <S.Logo className={sairaStencil.className}> coffee </S.Logo>
                <div className='container-input'>
                    <HeaderSearchInput placeholder='Procurando por algo específico?' />
                    <CartControl />
                </div>
            </div>
        </S.TagHeader>
    )
}