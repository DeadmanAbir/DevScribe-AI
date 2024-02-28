"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Navitems from "./navitems";

const Mobilesidebar = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        {" "}
        <Menu className="h-4 w-5 block md:hidden mr-2 text-black" />
      </DrawerTrigger>
      <DrawerContent className="bg-p p-4 border-none bg-white  bg-opacity-100">
        <Navitems />
      </DrawerContent>
    </Drawer>
  );
};

export default Mobilesidebar;
