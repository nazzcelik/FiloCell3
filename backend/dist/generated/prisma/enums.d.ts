export declare const Role: {
    readonly ADMIN: "ADMIN";
    readonly FLEET_MANAGER: "FLEET_MANAGER";
    readonly DRIVER: "DRIVER";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const FuelType: {
    readonly GASOLINE: "GASOLINE";
    readonly DIESEL: "DIESEL";
    readonly LPG: "LPG";
    readonly ELECTRIC: "ELECTRIC";
    readonly HYBRID: "HYBRID";
};
export type FuelType = (typeof FuelType)[keyof typeof FuelType];
export declare const VehicleStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly GARAGE: "GARAGE";
    readonly MAINTENANCE: "MAINTENANCE";
    readonly FAULTY: "FAULTY";
};
export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus];
export declare const TaskStatus: {
    readonly ASSIGNED: "ASSIGNED";
    readonly ON_THE_WAY: "ON_THE_WAY";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
