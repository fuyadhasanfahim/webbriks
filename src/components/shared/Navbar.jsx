"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";


const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];

const nestedMenuItems2 = [
  {
    title: "Hero1",
  },
  {
    title: "Features2",
  },
  {
    title: "Testimonials3",
  },
  {
    title: "Ecommerce4",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [openNestedMenu2, setopenNestedMenu2] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  const renderItems2 = nestedMenuItems2.map(({ title }, key) => (
    <a href={title} key={key}>
      <MenuItem>{title}</MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        allowHover={true}
      >
        {/* Dropdown */}
        <MenuHandler>
          <Typography
            as="div"
            variant="medium"
            color="black"
            className="font-medium "
          >
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 hover:bg-transparent hover:text-orange-500 font-medium "
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              <Link href='/services'>Services</Link>
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden rounded-xl lg:block mt-3">
          {/* Nested menu */}
          <Menu
            placement="right-start"
            allowHover
            offset={15}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            {/* <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler> */}
            <MenuList className="rounded-xl">{renderItems}</MenuList>
          </Menu>

          <MenuItem><a href="/services/graphics-design">Graphics design</a></MenuItem>
          <MenuItem><a href="/services/photo-editing">Photo editing</a></MenuItem>
          <MenuItem><a href="/services/web-design-and-development">Web design & development</a></MenuItem>
          {/* <MenuItem><Link href="/services/virtual-assistant">Virtual assistant</Link></MenuItem> */}
          {/* <MenuItem><Link href="/services/video-editing">Video editing</Link></MenuItem>
          <MenuItem><Link href="/services/digital-marketing">Digital marketing</Link></MenuItem> */}
        </MenuList>
      </Menu>


      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen} className='space-y-1'>
          {/* Nested menu */}
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            {/* <MenuHandler className="flex items-center justify-between">
              <MenuItem>
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler> */}
            <MenuList className="block rounded-xl lg:hidden">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem className='bg-gray-500'><a href="/services/graphics-design">Graphics design</a></MenuItem>
          <MenuItem className='bg-gray-500'><a href="/services/photo-editing">Photo editing</a></MenuItem>
          <MenuItem className='bg-gray-500'><a href="/services/web-design-and-development">Web design & development</a></MenuItem>
          {/* <MenuItem className='bg-gray-500'><Link href="/services/virtual-assistant">Virtual assistant</Link></MenuItem> */}
          {/* <MenuItem className='bg-gray-500'><Link href="/services/video-editing">Video editing</Link></MenuItem>
          <MenuItem className='bg-gray-500'><Link href="/services/digital-marketing">Digital marketing</Link>
          </MenuItem> */}
        </Collapse>
      </div>
    </React.Fragment>
  );
};



function NavList() {
  const currentPath = usePathname();
  return (
    <List className="mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="medium"
        className="font-medium"
        color="black"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 hover:bg-[#FEF9EF] hover:text-orange-500 ${currentPath === '/' ? 'text-orange-500' : ''}`}>Home</ListItem>
      </Typography>
      <Typography
        as="a"
        href="/about"
        variant="medium"
        className="font-medium"
        color="black"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 hover:bg-[#FEF9EF] hover:text-orange-500 ${currentPath === '/about' ? 'text-orange-500' : ''}`}>About</ListItem>
      </Typography>
      <NavListMenu />
      {/* <Typography
        as="a"
        href="/services"
        variant="medium"
        className="font-medium"
        color="black"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 hover:bg-[#FEF9EF] hover:text-orange-500 ${currentPath === '/services' ? 'text-orange-500' : ''}`}>Services</ListItem>
      </Typography> */}
      <Typography
        as="a"
        href="/portfolio"
        variant="medium"
        className="font-medium"
        color="black"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 hover:bg-[#FEF9EF] hover:text-orange-500 ${currentPath === '/portfolio' ? 'text-orange-500' : ''}`}>
          Portfolio
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="/contact"
        variant="medium"
        className="font-medium"
        color="black"
      >
        <ListItem className={`flex items-center gap-2 py-2 pr-4 hover:bg-[#FEF9EF] hover:text-orange-500 ${currentPath === '/contact' ? 'text-orange-500' : ''}`}>
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavigationbarWithDropdownMultilevelMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="bg-[#FEF9EF] lg:w-full w-[90%] mx-auto">
      <Navbar className="shadow-none lg:w-[90%] mx-auto rounded-none bg-[#FEF9EF] px-0 border-none">
        <div className="flex items-center justify-between">
          <Link href='/' className=''>
            <Image src='https://iili.io/2TW5PLb.png' alt='webbriks' width={171} height={30} priority={true} />
          </Link>
          <div className="hidden lg:block ">
            <NavList />
          </div>
          <div className="hidden md:block">
            <Link
              href="/get-quote"
              className="bg-[#2B2121] text-white px-4 py-2 rounded hover:bg-orange-500 transition flex items-center gap-2"
            >
              <span>Get a Quote</span><span><FiArrowUpRight /></span>
            </Link>
          </div>
          <IconButton
            variant="text"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Link
              href="/get-quote"
              className="bg-[#2B2121] text-white px-2 py-1 rounded hover:bg-orange-500 transition"
            >
              Get a Quote
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
