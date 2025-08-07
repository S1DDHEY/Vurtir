"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { useAuth } from "../../../context/auth";

const modules = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "HRM", href: "/hrm" },
  { name: "Finance", href: "/finance" },
  { name: "CRM", href: "/crm" },
  { name: "SCM", href: "/scm" }
];

export default function Shell({ children }: { children: ReactNode }) {
  const auth = useAuth();
  if (!auth) return null;
  const { logout, currentUser } = auth;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-6 shadow-md">
        <h2 className="text-xl font-bold mb-6">Vurtir ERP</h2>
        <nav className="flex flex-col gap-3">
          {modules.map((mod) => (
            <Link key={mod.name} href={mod.href} className="text-gray-700 hover:underline">
              {mod.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="flex justify-between items-center px-6 py-4 border-b">
          <div className="text-sm text-gray-600">Organization: Acme Corp</div>
          <div className="flex items-center gap-4">
            {currentUser && (
              <>
                <img
                  src={currentUser.photoURL || ""}
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </header>

        {/* Main page content */}
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
