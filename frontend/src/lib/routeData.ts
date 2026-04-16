/**
 * Türkiye'nin gerçek koordinatlarına dayanan rota waypoint'leri.
 * Her rota birden fazla ara noktayla gerçekçi yol güzergahını simüle eder.
 */

export type LatLng = [number, number];

export interface RouteDefinition {
  start: string;
  end:   string;
  waypoints: LatLng[]; // başlangıç + aralar + bitiş
}

// Önemli nokta koordinatları
const C = {
  istAnadolu:  [40.9886, 29.0300] as LatLng,
  istAvrupa:   [41.0350, 28.8790] as LatLng,
  gebze:       [40.7983, 29.4308] as LatLng,
  kocaeli:     [40.7650, 29.9312] as LatLng,
  sakarya:     [40.7744, 30.3943] as LatLng,
  bolu:        [40.7350, 31.6100] as LatLng,
  gerede:      [40.7900, 32.1900] as LatLng,
  ankara:      [39.9334, 32.8597] as LatLng,
  ankaraSube:  [39.9208, 32.8541] as LatLng,
  bursa:       [40.1828, 29.0665] as LatLng,
  bursaYol1:   [40.4600, 29.2800] as LatLng,
  izmir:       [38.4220, 27.1281] as LatLng,
  izmirYol1:   [39.2000, 27.8000] as LatLng,
  eskisehir:   [39.7767, 30.5206] as LatLng,
  osmangazi:   [40.2000, 29.6000] as LatLng,
};

/** Belirli iki lokasyon adını bir rota tanımına eşler */
export const ROUTE_DEFINITIONS: RouteDefinition[] = [
  {
    start: 'İstanbul Anadolu Depo',
    end:   'Ankara Ostim',
    waypoints: [
      C.istAnadolu,
      C.gebze,
      C.kocaeli,
      C.sakarya,
      C.bolu,
      C.gerede,
      C.ankara,
    ],
  },
  {
    start: 'İstanbul Avrupa Merkezi',
    end:   'Gebze Lojistik Merkezi',
    waypoints: [
      C.istAvrupa,
      [41.0100, 28.9600],
      [40.9500, 29.1200],
      C.gebze,
    ],
  },
  {
    start: 'İstanbul Anadolu Depo',
    end:   'Bursa Merkez Depo',
    waypoints: [
      C.istAnadolu,
      [40.9000, 29.0000],
      C.osmangazi,
      C.bursaYol1,
      C.bursa,
    ],
  },
  {
    start: 'Gebze Lojistik Merkezi',
    end:   'İzmir Liman',
    waypoints: [
      C.gebze,
      C.kocaeli,
      C.osmangazi,
      C.bursa,
      [39.8000, 28.5000],
      C.izmirYol1,
      C.izmir,
    ],
  },
  {
    start: 'Ankara Ostim',
    end:   'Ankara Şube',
    waypoints: [
      C.ankara,
      [39.9270, 32.8560],
      C.ankaraSube,
    ],
  },
  {
    start: 'İstanbul Anadolu Depo',
    end:   'Kocaeli OSB Depo',
    waypoints: [
      C.istAnadolu,
      C.gebze,
      [40.7800, 29.7000],
      C.kocaeli,
    ],
  },
  {
    start: 'Kocaeli OSB Depo',
    end:   'Sakarya Fabrika',
    waypoints: [
      C.kocaeli,
      [40.7700, 30.1000],
      C.sakarya,
    ],
  },
  {
    start: 'Ankara Ostim',
    end:   'Eskişehir Şube',
    waypoints: [
      C.ankara,
      [39.9000, 32.5000],
      [39.8400, 31.9000],
      C.eskisehir,
    ],
  },
  {
    start: 'İstanbul Avrupa Merkezi',
    end:   'İstanbul Anadolu Depo',
    waypoints: [
      C.istAvrupa,
      [41.0200, 28.9500],
      C.istAnadolu,
    ],
  },
  {
    start: 'Bursa Merkez Depo',
    end:   'Gebze Lojistik Merkezi',
    waypoints: [
      C.bursa,
      C.bursaYol1,
      C.osmangazi,
      [40.8500, 29.2500],
      C.gebze,
    ],
  },
];

/** Verilen start+end çiftine göre waypoint listesi döndürür */
export function findRoute(start: string, end: string): LatLng[] {
  const match = ROUTE_DEFINITIONS.find(
    (r) => r.start === start && r.end === end,
  );
  if (match) return match.waypoints;

  // Eşleşme yoksa ters yönü dene
  const reverse = ROUTE_DEFINITIONS.find(
    (r) => r.start === end && r.end === start,
  );
  if (reverse) return [...reverse.waypoints].reverse();

  // Hiç eşleşme yoksa fallback — iki nokta arası düz çizgi
  return [];
}

/** Yön açısı hesapla (0-360°) */
export function calcHeading(from: LatLng, to: LatLng): number {
  const dLat = to[0] - from[0];
  const dLng = to[1] - from[1];
  const angle = Math.atan2(dLng, dLat) * (180 / Math.PI);
  return (angle + 360) % 360;
}
