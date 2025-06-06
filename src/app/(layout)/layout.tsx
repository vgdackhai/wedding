"use client";

import { Snowflake } from "@/components/Snowflake";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navigation, setNavigation] = useState([
    { name: "Home", href: "/", current: false },
    { name: "Cặp đôi", href: "/couple", current: false },
    { name: "Chuyện tình yêu", href: "/story", current: false },
    { name: "Album hình cưới", href: "/album", current: false },
    { name: "Sự kiện cưới", href: "/event", current: false },
    { name: "Video cưới", href: "/video", current: false },
    { name: "Sổ lưu bút", href: "/wedding-guest-book", current: false },
    { name: "Mừng cưới", href: "/congratulation", current: false },
  ]);

  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setNavigation((prev) => {
      return prev.map((item) => {
        item.current = item.href === pathname;
        return item;
      });
    });
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-10 flex h-16 bg-[#faf0e6]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-3 p-3 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-5 text-gray-900" />
            </button>
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm/6 md:font-semibold md:text-gray-700 h-full">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "border-[#f0394d] text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium h-full"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 left-0 z-50 w-1/2 overflow-y-auto bg-[#faf0e6] px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="-ml-0.5 flex h-16 items-center gap-x-6">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-2 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="h-[calc(100vh-64px)] relative overflow-hidden">
        <Snowflake />
        <div className="h-full relative overflow-y-auto">{children}</div>
      </main>
    </>
  );
}
