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

const Mobilesidebar = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        {' '}
        <Menu className="h-4 w-5 block md:hidden mr-2 text-white" />
      </DrawerTrigger>
      <DrawerContent className="bg-p p-4 border-none backdrop-filter bg-opacity-10 text-white bg-white ">
        <div className="flex flex-col items-center p-10 text-white gap-4 ">
          <div>How to use?</div>
          <div>FAQ</div>
          <div>Dashboard</div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default Mobilesidebar
