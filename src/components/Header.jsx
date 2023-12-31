import React from 'react'
import BuscadorHeader from './BuscadorHeader'


function Header() {
  return (
        <div className='flex flex-col sm:flex-row items-center justify-around gap-1 bg-slate-500 p-2'>
            <h1 className='text-slate-300'>Poke<strong>API</strong></h1>
            <BuscadorHeader />
        </div>

  )
}

export default Header
