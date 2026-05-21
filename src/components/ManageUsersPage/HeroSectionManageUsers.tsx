"use client";
import { Plus } from "lucide-react";
import Link from "next/link";

const HeroSectionManageUsers = () => {
  return (
    <section>
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
        <div className="max-w-xl ml-5 mt-15">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl font-plenty text-neutral-900 dark:text-white">
            Manajemen{" "}
            <span className="text-amber-700 dark:text-amber-600">Users</span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Kelola data dan akses pengguna dalam sistem dengan mudah. Pantau dan
            atur akun pengguna di satu tempat.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-end items-end sm:items-center gap-4 mb-6 sm:mb-10 mr-5">
        <Link
          href="/users/create"
          className="w-1/2 mt-10 mb-5 sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl transition-colors text-sm font-semibold cursor-pointer shadow-sm"
        >
          <Plus size={18} />
          Tambah User
        </Link>
      </div>
    </section>
  );
};

export default HeroSectionManageUsers;
