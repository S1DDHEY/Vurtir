import React from 'react';
import Link from 'next/link';

export default function HRMLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">HRM Module</h2>
        <ul className="space-y-2">
          <li><Link href="/hrm">Dashboard</Link></li>
          <li><Link href="/hrm/employees">Employees</Link></li>
          <li><Link href="/hrm/performance">Performance</Link></li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}
