"use client";

import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "@/firebase/client";
import { Employee, EmployeeRole, EmployeeStatus } from "@/types/Employee";

export default function EmployeeForm() {
  const [form, setForm] = useState<Omit<Employee, "id" | "createdAt" | "updatedAt">>({
    name: "",
    email: "",
    phone: "",
    photoURL: "",
    designation: "",
    department: "",
    status: "active" as EmployeeStatus,
    doj: Timestamp.now(),
    role: "staff" as EmployeeRole,
    skills: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addDoc(collection(db, "employees"), {
      ...form,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });

    setForm({
      name: "",
      email: "",
      phone: "",
      photoURL: "",
      designation: "",
      department: "",
      status: "active" as EmployeeStatus,
      doj: Timestamp.now(),
      role: "staff" as EmployeeRole,
      skills: [],
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
      />
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
      />
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
      />
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Photo URL"
        value={form.photoURL}
        onChange={(e) => setForm((f) => ({ ...f, photoURL: e.target.value }))}
      />
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Designation"
        value={form.designation}
        onChange={(e) => setForm((f) => ({ ...f, designation: e.target.value }))}
      />
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Department"
        value={form.department}
        onChange={(e) => setForm((f) => ({ ...f, department: e.target.value }))}
      />

      {/* Status Dropdown */}
      <select
        className="w-full border rounded px-3 py-2"
        value={form.status}
        onChange={(e) =>
          setForm((f) => ({ ...f, status: e.target.value as EmployeeStatus }))
        }
      >
        <option value="active">Active</option>
        <option value="on_leave">On Leave</option>
        <option value="resigned">Resigned</option>
      </select>

      {/* Date of Joining */}
      <input
        type="date"
        className="w-full border rounded px-3 py-2"
        onChange={(e) =>
          setForm((f) => ({ ...f, doj: Timestamp.fromDate(new Date(e.target.value)) }))
        }
      />

      {/* Role Dropdown */}
      <select
        className="w-full border rounded px-3 py-2"
        value={form.role}
        onChange={(e) =>
          setForm((f) => ({ ...f, role: e.target.value as EmployeeRole }))
        }
      >
        <option value="staff">Staff</option>
        <option value="manager">Manager</option>
        <option value="admin">Admin</option>
        <option value="hr">HR</option>
      </select>

      {/* Skills Input */}
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Skills (comma separated)"
        onChange={(e) =>
          setForm((f) => ({ ...f, skills: e.target.value.split(",").map(s => s.trim()) }))
        }
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
      >
        Add Employee
      </button>
    </form>
  );
}
