"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error('DATABASE_URL is not set.');
}
const adapter = new adapter_pg_1.PrismaPg({ connectionString });
const prisma = new client_1.PrismaClient({ adapter });
const LOCATIONS = [
    { name: 'İstanbul Anadolu Depo', lat: 40.9886, lng: 29.0300 },
    { name: 'İstanbul Avrupa Merkezi', lat: 41.0350, lng: 28.8790 },
    { name: 'Gebze Lojistik Merkezi', lat: 40.7983, lng: 29.4308 },
    { name: 'Kocaeli OSB Depo', lat: 40.7650, lng: 29.9312 },
    { name: 'Sakarya Fabrika', lat: 40.7744, lng: 30.3943 },
    { name: 'Bursa Merkez Depo', lat: 40.1828, lng: 29.0665 },
    { name: 'Ankara Ostim', lat: 39.9334, lng: 32.8597 },
    { name: 'Ankara Şube', lat: 39.9208, lng: 32.8541 },
    { name: 'İzmir Liman', lat: 38.4220, lng: 27.1281 },
    { name: 'Eskişehir Şube', lat: 39.7767, lng: 30.5206 },
];
async function main() {
    await prisma.locationLog.deleteMany();
    await prisma.task.deleteMany();
    await prisma.vehicle.deleteMany();
    await prisma.user.deleteMany();
    await prisma.company.deleteMany();
    const company = await prisma.company.create({
        data: {
            name: 'FiloCell Lojistik A.Ş.',
            taxNumber: 'TR1234567890',
        },
    });
    const defaultPasswordHash = await bcryptjs_1.default.hash('Password123!', 10);
    await prisma.user.create({
        data: {
            companyId: company.id,
            fullName: 'Sistem Yöneticisi',
            email: 'admin@filocell.com',
            passwordHash: defaultPasswordHash,
            role: client_1.Role.ADMIN,
            phone: '+905001234567',
            isActive: true,
        },
    });
    await prisma.user.create({
        data: {
            companyId: company.id,
            fullName: 'Filo Müdürü Kemal Aydın',
            email: 'manager@filocell.com',
            passwordHash: defaultPasswordHash,
            role: client_1.Role.FLEET_MANAGER,
            phone: '+905001234568',
            isActive: true,
        },
    });
    const driverData = [
        { fullName: 'Ahmet Yılmaz', email: 'ahmet.yilmaz@filocell.com', phone: '+905321110001' },
        { fullName: 'Mehmet Demir', email: 'mehmet.demir@filocell.com', phone: '+905321110002' },
        { fullName: 'Ayşe Kaya', email: 'ayse.kaya@filocell.com', phone: '+905321110003' },
        { fullName: 'Fatma Çelik', email: 'fatma.celik@filocell.com', phone: '+905321110004' },
        { fullName: 'Mustafa Şahin', email: 'mustafa.sahin@filocell.com', phone: '+905321110005' },
    ];
    const drivers = await Promise.all(driverData.map((d) => prisma.user.create({
        data: {
            companyId: company.id,
            fullName: d.fullName,
            email: d.email,
            passwordHash: defaultPasswordHash,
            role: client_1.Role.DRIVER,
            phone: d.phone,
            isActive: true,
        },
    })));
    const vehicleData = [
        { plate: '34 FC 001', brand: 'Ford', model: 'Transit', year: 2022, fuel: client_1.FuelType.DIESEL, km: 48200, status: client_1.VehicleStatus.ACTIVE },
        { plate: '34 FC 002', brand: 'Renault', model: 'Master', year: 2021, fuel: client_1.FuelType.DIESEL, km: 67300, status: client_1.VehicleStatus.ACTIVE },
        { plate: '34 FC 003', brand: 'Mercedes', model: 'Sprinter', year: 2023, fuel: client_1.FuelType.DIESEL, km: 21500, status: client_1.VehicleStatus.ACTIVE },
        { plate: '34 FC 004', brand: 'Volkswagen', model: 'Crafter', year: 2020, fuel: client_1.FuelType.DIESEL, km: 89100, status: client_1.VehicleStatus.MAINTENANCE },
        { plate: '34 FC 005', brand: 'Ford', model: 'Transit', year: 2022, fuel: client_1.FuelType.GASOLINE, km: 35700, status: client_1.VehicleStatus.ACTIVE },
        { plate: '34 FC 006', brand: 'Renault', model: 'Kangoo', year: 2023, fuel: client_1.FuelType.ELECTRIC, km: 14200, status: client_1.VehicleStatus.ACTIVE },
        { plate: '34 FC 007', brand: 'Fiat', model: 'Ducato', year: 2021, fuel: client_1.FuelType.DIESEL, km: 55800, status: client_1.VehicleStatus.ACTIVE },
        { plate: '34 FC 008', brand: 'Peugeot', model: 'Boxer', year: 2022, fuel: client_1.FuelType.DIESEL, km: 41200, status: client_1.VehicleStatus.GARAGE },
        { plate: '34 FC 009', brand: 'Iveco', model: 'Daily', year: 2020, fuel: client_1.FuelType.DIESEL, km: 112400, status: client_1.VehicleStatus.FAULTY },
        { plate: '34 FC 010', brand: 'Mercedes', model: 'Vito', year: 2023, fuel: client_1.FuelType.DIESEL, km: 18600, status: client_1.VehicleStatus.ACTIVE },
    ];
    const vehicles = await Promise.all(vehicleData.map((v, i) => prisma.vehicle.create({
        data: {
            companyId: company.id,
            driverId: i < drivers.length ? drivers[i].id : null,
            plateNumber: v.plate,
            brand: v.brand,
            model: v.model,
            year: v.year,
            fuelType: v.fuel,
            currentKm: v.km,
            status: v.status,
        },
    })));
    const taskData = [
        {
            title: 'İstanbul → Ankara Kargo Teslimatı',
            start: 'İstanbul Anadolu Depo',
            dest: 'Ankara Ostim',
            mins: 210,
            notes: 'Kırılgan ürün içermektedir, dikkatli taşıyın.',
            status: client_1.TaskStatus.ON_THE_WAY,
        },
        {
            title: 'Gebze Fabrika Sevkiyatı',
            start: 'İstanbul Avrupa Merkezi',
            dest: 'Gebze Lojistik Merkezi',
            mins: 55,
            notes: null,
            status: client_1.TaskStatus.ON_THE_WAY,
        },
        {
            title: 'Bursa Müşteri Teslimatı',
            start: 'İstanbul Anadolu Depo',
            dest: 'Bursa Merkez Depo',
            mins: 120,
            notes: 'Müşteri kapıya teslim talep etti.',
            status: client_1.TaskStatus.ON_THE_WAY,
        },
        {
            title: 'İzmir Liman Transfer',
            start: 'Gebze Lojistik Merkezi',
            dest: 'İzmir Liman',
            mins: 280,
            notes: 'Gümrük belgesi sürücüde mevcut.',
            status: client_1.TaskStatus.ASSIGNED,
        },
        {
            title: 'Ankara Ofis Malzeme Dağıtımı',
            start: 'Ankara Ostim',
            dest: 'Ankara Şube',
            mins: 30,
            notes: null,
            status: client_1.TaskStatus.ASSIGNED,
        },
        {
            title: 'Kocaeli OSB Depo Transferi',
            start: 'İstanbul Anadolu Depo',
            dest: 'Kocaeli OSB Depo',
            mins: 75,
            notes: 'Ağır yük, forklift gerekebilir.',
            status: client_1.TaskStatus.ASSIGNED,
        },
        {
            title: 'Sakarya Fabrika Bakım Malzemesi',
            start: 'Kocaeli OSB Depo',
            dest: 'Sakarya Fabrika',
            mins: 50,
            notes: null,
            status: client_1.TaskStatus.ASSIGNED,
        },
        {
            title: 'Eskişehir Şube Stok Yenileme',
            start: 'Ankara Ostim',
            dest: 'Eskişehir Şube',
            mins: 110,
            notes: 'Öncelikli görev.',
            status: client_1.TaskStatus.COMPLETED,
        },
        {
            title: 'İstanbul Havalimanı Kurye',
            start: 'İstanbul Avrupa Merkezi',
            dest: 'İstanbul Anadolu Depo',
            mins: 45,
            notes: 'Ekspres teslimat.',
            status: client_1.TaskStatus.COMPLETED,
        },
        {
            title: 'Bursa → Gebze Dönüş Yükü',
            start: 'Bursa Merkez Depo',
            dest: 'Gebze Lojistik Merkezi',
            mins: 90,
            notes: null,
            status: client_1.TaskStatus.CANCELLED,
        },
    ];
    await Promise.all(taskData.map((t, i) => {
        const vehicle = vehicles[i % vehicles.length];
        const driver = drivers[i % drivers.length];
        return prisma.task.create({
            data: {
                companyId: company.id,
                vehicleId: vehicle.id,
                driverId: driver.id,
                title: t.title,
                startLocation: t.start,
                destinationLocation: t.dest,
                estimatedMinutes: t.mins,
                notes: t.notes,
                status: t.status,
            },
        });
    }));
    const routeStarts = [
        { lat: 40.9886, lng: 29.0300 },
        { lat: 41.0350, lng: 28.8790 },
        { lat: 40.9886, lng: 29.0300 },
        { lat: 40.7983, lng: 29.4308 },
        { lat: 39.9334, lng: 32.8597 },
        { lat: 40.9886, lng: 29.0300 },
        { lat: 40.7650, lng: 29.9312 },
        { lat: 39.9334, lng: 32.8597 },
        { lat: 41.0350, lng: 28.8790 },
        { lat: 40.1828, lng: 29.0665 },
    ];
    for (let vi = 0; vi < vehicles.length; vi++) {
        const vehicle = vehicles[vi];
        const start = routeStarts[vi] ?? { lat: 41.0082, lng: 28.9784 };
        await prisma.locationLog.createMany({
            data: Array.from({ length: 8 }, (_, i) => ({
                vehicleId: vehicle.id,
                latitude: start.lat + i * 0.0018,
                longitude: start.lng + i * 0.0015,
                speed: 30 + i * 5,
                heading: (60 + i * 15) % 360,
                recordedAt: new Date(Date.now() - (8 - i) * 60_000),
            })),
        });
    }
    console.log('\n✅ Seed tamamlandı!');
    console.log(`🏢 Firma: ${company.name}`);
    console.log(`👤 Kullanıcılar: ${2 + drivers.length}`);
    console.log(`🚗 Araçlar: ${vehicles.length}`);
    console.log(`📋 Görevler: ${taskData.length}`);
    console.log(`📍 Konum logları: ${vehicles.length * 8}`);
    console.log('\nGiriş bilgileri:');
    console.log('  Admin:   admin@filocell.com   / Password123!');
    console.log('  Müdür:  manager@filocell.com  / Password123!');
    console.log('  Sürücü: ahmet.yilmaz@...      / Password123!');
}
main()
    .catch((error) => {
    console.error('Seed başarısız:', error);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map