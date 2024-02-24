import Link from 'next/link'
import React from 'react'

const Navitems = () => {
  const items = [
    { text: 'Home', href: '/' },
    { text: 'Feature', href: '#features' },
    { text: 'Contact', href: '#contact' },
    { text: 'Demo', href: '#demo' },
  ]

  return (
    <div className="flex md:flex-row flex-col gap-6  text-center pt-10 md:pt-0 text-black font-semibold ">
      {items.map((item, index) => (
        <div
          key={index}
          className="hover:-translate-y-[2px] transition-transform"
     
        >
          <Link href={item.href}>{item.text}</Link>
        </div>
      ))}
    </div>
  )
}

export default Navitems
