"use client";
import { Employee } from "@/firebase/schemas";

export default function EmployeeCard({ employee }: { employee: Employee }) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold">{employee.name}</h2>
      <p>{employee.position} — {employee.department}</p>
      <p className="text-sm text-gray-600">{employee.email}</p>
    </div>
  );
}
