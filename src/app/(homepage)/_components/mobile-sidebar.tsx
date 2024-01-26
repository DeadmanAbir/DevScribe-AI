'use client'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Menu } from 'lucide-react'
import Navitems from './navitems'

const Mobilesidebar = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        {' '}
      
          <Menu className="h-4 w-5 block md:hidden mr-2 text-white" />
     
      </DrawerTrigger>
      <DrawerContent className='bg-p p-4 border-none bg-purple-900   bg-opacity-30'>
       <Navitems/>
      </DrawerContent>
    </Drawer>
  )
}

export default Mobilesidebar
