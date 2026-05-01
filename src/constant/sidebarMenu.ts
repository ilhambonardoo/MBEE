import {
  List,
  Scale,
  User2Icon,
  LayoutDashboard,
  Beef,
  UserCircle,
} from "lucide-react";

export const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Kambing",
    icon: Beef,
    children: [
      { title: "Daftar Kambing", href: "/kambing", icon: List },
      { title: "Timbangan", href: "/kambing/timbangan", icon: Scale },
    ],
  },
  {
    title: "Profil",
    href: "/profile",
    icon: UserCircle,
  },
  {
    title: "Manajemen Users",
    href: "/users",
    icon: User2Icon,
  },
];
