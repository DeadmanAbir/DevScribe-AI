import Link from 'next/link';
import React from 'react';

const Navitems = () => {
    
    const items = [
        { text: 'Home', href: '/home' },
        { text: 'About', href: '/about' },
        { text: 'Feature', href: '/contact' },
        { text: 'Explore', href: '/contact' },
        { text: 'Pricing', href: '/contact' }
    ];

    return (
        <div className='flex md:flex-row flex-col gap-6  text-center pt-10 md:pt-0 text-black font-semibold '>
            
                {items.map((item, index) => (
                    <div key={index} className='hover:-translate-y-[2px] transition-transform'>
                        <Link href={item.href}>{item.text}</Link>
                    </div>
                ))}
           
        </div>
    );
}

export default Navitems;
