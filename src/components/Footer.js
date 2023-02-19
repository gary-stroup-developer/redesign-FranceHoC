import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='grid grid-rows-3 grid-cols-4 gap-1.5 bg-blue-900 text-white'>
        <div className="text-2xl col-span-4 justify-self-center p-3">
        <Image 
        src="/images/france-flag.jpeg"
        alt="france flag"
        width={48}
        height={48}
        />
        FRANCE HOUSE OF CREPES 
        </div>
        <div className="row-start-2 col-start-1 col-span-4 px-5 flex flex-col justify-evenly md:flex-row">
            <div className='py-2'>
                <p>Tel: 951.394.8924</p>
                <p className='pt-4'>Email: info@francehouseofcrepes.com</p>
                
            </div>
            <div className='py-2'>
                <p>12125 Day Street, Suite F308 Moreno Valley CA 92557</p>
                <p className='pt-4'>Open 8AM - 10PM Everyday</p>
            </div>
        </div>
        <div className='row-start-3 col-span-4 p-5 text-red-700 font-bold flex flex-col justify-evenly md:flex-row'>
            <p>France House of Crepes Inc. Redesign</p>
            <p>Gary Stroup Frontend Project</p>
        </div>
    </div>
  )
}
