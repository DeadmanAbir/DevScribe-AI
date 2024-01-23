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
        <div className='flex md:flex-row flex-col gap-4 text-white '>
            
                {items.map((item, index) => (
                    <div key={index} className=''>
                        <Link href={item.href}>{item.text}</Link>
                    </div>
                ))}
           
        </div>
    );
}

export default Navitems;
