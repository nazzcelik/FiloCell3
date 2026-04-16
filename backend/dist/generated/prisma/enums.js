"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = exports.VehicleStatus = exports.FuelType = exports.Role = void 0;
exports.Role = {
    ADMIN: 'ADMIN',
    FLEET_MANAGER: 'FLEET_MANAGER',
    DRIVER: 'DRIVER'
};
exports.FuelType = {
    GASOLINE: 'GASOLINE',
    DIESEL: 'DIESEL',
    LPG: 'LPG',
    ELECTRIC: 'ELECTRIC',
    HYBRID: 'HYBRID'
};
exports.VehicleStatus = {
    ACTIVE: 'ACTIVE',
    GARAGE: 'GARAGE',
    MAINTENANCE: 'MAINTENANCE',
    FAULTY: 'FAULTY'
};
exports.TaskStatus = {
    ASSIGNED: 'ASSIGNED',
    ON_THE_WAY: 'ON_THE_WAY',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED'
};
//# sourceMappingURL=enums.js.map