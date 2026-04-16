const badgeBase =
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tabular-nums";

export function vehicleStatusClass(status: string): string {
  switch (status.toUpperCase()) {
    case "ACTIVE":
      return `${badgeBase} bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300`;
    case "GARAGE":
      return `${badgeBase} bg-slate-100 text-slate-700 ring-1 ring-slate-300`;
    case "MAINTENANCE":
      return `${badgeBase} bg-amber-100 text-amber-800 ring-1 ring-amber-300`;
    case "FAULTY":
      return `${badgeBase} bg-red-100 text-red-800 ring-1 ring-red-300`;
    default:
      return `${badgeBase} bg-blue-50 text-blue-700 ring-1 ring-blue-200`;
  }
}

export function taskStatusClass(status: string): string {
  switch (status.toUpperCase()) {
    case "ASSIGNED":
      return `${badgeBase} bg-sky-100 text-sky-800 ring-1 ring-sky-300`;
    case "ON_THE_WAY":
      return `${badgeBase} bg-amber-100 text-amber-800 ring-1 ring-amber-300`;
    case "COMPLETED":
      return `${badgeBase} bg-emerald-100 text-emerald-800 ring-1 ring-emerald-300`;
    case "CANCELLED":
      return `${badgeBase} bg-red-100 text-red-800 ring-1 ring-red-300`;
    default:
      return `${badgeBase} bg-blue-50 text-blue-700 ring-1 ring-blue-200`;
  }
}
