import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/dashboard.png",
        label: "Home",
        href: "/admin",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/Reports.png",
        label: "Reports",
        href: "/list/Reports",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/UIElements.png",
        label: "Analytics",
        href: "/list/Analytics",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/list/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },

];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-8" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {/* {i.title} */}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  {/* <span className="hidden lg:block">{item.label}</span> */}
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
