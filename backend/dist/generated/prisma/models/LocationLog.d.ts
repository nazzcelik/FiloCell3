import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LocationLogModel = runtime.Types.Result.DefaultSelection<Prisma.$LocationLogPayload>;
export type AggregateLocationLog = {
    _count: LocationLogCountAggregateOutputType | null;
    _avg: LocationLogAvgAggregateOutputType | null;
    _sum: LocationLogSumAggregateOutputType | null;
    _min: LocationLogMinAggregateOutputType | null;
    _max: LocationLogMaxAggregateOutputType | null;
};
export type LocationLogAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    heading: number | null;
};
export type LocationLogSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    heading: number | null;
};
export type LocationLogMinAggregateOutputType = {
    id: string | null;
    vehicleId: string | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    heading: number | null;
    recordedAt: Date | null;
};
export type LocationLogMaxAggregateOutputType = {
    id: string | null;
    vehicleId: string | null;
    latitude: number | null;
    longitude: number | null;
    speed: number | null;
    heading: number | null;
    recordedAt: Date | null;
};
export type LocationLogCountAggregateOutputType = {
    id: number;
    vehicleId: number;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    recordedAt: number;
    _all: number;
};
export type LocationLogAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
    speed?: true;
    heading?: true;
};
export type LocationLogSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
    speed?: true;
    heading?: true;
};
export type LocationLogMinAggregateInputType = {
    id?: true;
    vehicleId?: true;
    latitude?: true;
    longitude?: true;
    speed?: true;
    heading?: true;
    recordedAt?: true;
};
export type LocationLogMaxAggregateInputType = {
    id?: true;
    vehicleId?: true;
    latitude?: true;
    longitude?: true;
    speed?: true;
    heading?: true;
    recordedAt?: true;
};
export type LocationLogCountAggregateInputType = {
    id?: true;
    vehicleId?: true;
    latitude?: true;
    longitude?: true;
    speed?: true;
    heading?: true;
    recordedAt?: true;
    _all?: true;
};
export type LocationLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationLogWhereInput;
    orderBy?: Prisma.LocationLogOrderByWithRelationInput | Prisma.LocationLogOrderByWithRelationInput[];
    cursor?: Prisma.LocationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LocationLogCountAggregateInputType;
    _avg?: LocationLogAvgAggregateInputType;
    _sum?: LocationLogSumAggregateInputType;
    _min?: LocationLogMinAggregateInputType;
    _max?: LocationLogMaxAggregateInputType;
};
export type GetLocationLogAggregateType<T extends LocationLogAggregateArgs> = {
    [P in keyof T & keyof AggregateLocationLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLocationLog[P]> : Prisma.GetScalarType<T[P], AggregateLocationLog[P]>;
};
export type LocationLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationLogWhereInput;
    orderBy?: Prisma.LocationLogOrderByWithAggregationInput | Prisma.LocationLogOrderByWithAggregationInput[];
    by: Prisma.LocationLogScalarFieldEnum[] | Prisma.LocationLogScalarFieldEnum;
    having?: Prisma.LocationLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LocationLogCountAggregateInputType | true;
    _avg?: LocationLogAvgAggregateInputType;
    _sum?: LocationLogSumAggregateInputType;
    _min?: LocationLogMinAggregateInputType;
    _max?: LocationLogMaxAggregateInputType;
};
export type LocationLogGroupByOutputType = {
    id: string;
    vehicleId: string;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    recordedAt: Date;
    _count: LocationLogCountAggregateOutputType | null;
    _avg: LocationLogAvgAggregateOutputType | null;
    _sum: LocationLogSumAggregateOutputType | null;
    _min: LocationLogMinAggregateOutputType | null;
    _max: LocationLogMaxAggregateOutputType | null;
};
export type GetLocationLogGroupByPayload<T extends LocationLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LocationLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LocationLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LocationLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LocationLogGroupByOutputType[P]>;
}>>;
export type LocationLogWhereInput = {
    AND?: Prisma.LocationLogWhereInput | Prisma.LocationLogWhereInput[];
    OR?: Prisma.LocationLogWhereInput[];
    NOT?: Prisma.LocationLogWhereInput | Prisma.LocationLogWhereInput[];
    id?: Prisma.StringFilter<"LocationLog"> | string;
    vehicleId?: Prisma.StringFilter<"LocationLog"> | string;
    latitude?: Prisma.FloatFilter<"LocationLog"> | number;
    longitude?: Prisma.FloatFilter<"LocationLog"> | number;
    speed?: Prisma.FloatFilter<"LocationLog"> | number;
    heading?: Prisma.FloatFilter<"LocationLog"> | number;
    recordedAt?: Prisma.DateTimeFilter<"LocationLog"> | Date | string;
    vehicle?: Prisma.XOR<Prisma.VehicleScalarRelationFilter, Prisma.VehicleWhereInput>;
};
export type LocationLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
    vehicle?: Prisma.VehicleOrderByWithRelationInput;
};
export type LocationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LocationLogWhereInput | Prisma.LocationLogWhereInput[];
    OR?: Prisma.LocationLogWhereInput[];
    NOT?: Prisma.LocationLogWhereInput | Prisma.LocationLogWhereInput[];
    vehicleId?: Prisma.StringFilter<"LocationLog"> | string;
    latitude?: Prisma.FloatFilter<"LocationLog"> | number;
    longitude?: Prisma.FloatFilter<"LocationLog"> | number;
    speed?: Prisma.FloatFilter<"LocationLog"> | number;
    heading?: Prisma.FloatFilter<"LocationLog"> | number;
    recordedAt?: Prisma.DateTimeFilter<"LocationLog"> | Date | string;
    vehicle?: Prisma.XOR<Prisma.VehicleScalarRelationFilter, Prisma.VehicleWhereInput>;
}, "id">;
export type LocationLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
    _count?: Prisma.LocationLogCountOrderByAggregateInput;
    _avg?: Prisma.LocationLogAvgOrderByAggregateInput;
    _max?: Prisma.LocationLogMaxOrderByAggregateInput;
    _min?: Prisma.LocationLogMinOrderByAggregateInput;
    _sum?: Prisma.LocationLogSumOrderByAggregateInput;
};
export type LocationLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.LocationLogScalarWhereWithAggregatesInput | Prisma.LocationLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.LocationLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LocationLogScalarWhereWithAggregatesInput | Prisma.LocationLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LocationLog"> | string;
    vehicleId?: Prisma.StringWithAggregatesFilter<"LocationLog"> | string;
    latitude?: Prisma.FloatWithAggregatesFilter<"LocationLog"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"LocationLog"> | number;
    speed?: Prisma.FloatWithAggregatesFilter<"LocationLog"> | number;
    heading?: Prisma.FloatWithAggregatesFilter<"LocationLog"> | number;
    recordedAt?: Prisma.DateTimeWithAggregatesFilter<"LocationLog"> | Date | string;
};
export type LocationLogCreateInput = {
    id?: string;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    recordedAt?: Date | string;
    vehicle: Prisma.VehicleCreateNestedOneWithoutLocationLogsInput;
};
export type LocationLogUncheckedCreateInput = {
    id?: string;
    vehicleId: string;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    recordedAt?: Date | string;
};
export type LocationLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.FloatFieldUpdateOperationsInput | number;
    heading?: Prisma.FloatFieldUpdateOperationsInput | number;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicle?: Prisma.VehicleUpdateOneRequiredWithoutLocationLogsNestedInput;
};
export type LocationLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.FloatFieldUpdateOperationsInput | number;
    heading?: Prisma.FloatFieldUpdateOperationsInput | number;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocationLogCreateManyInput = {
    id?: string;
    vehicleId: string;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    recordedAt?: Date | string;
};
export type LocationLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.FloatFieldUpdateOperationsInput | number;
    heading?: Prisma.FloatFieldUpdateOperationsInput | number;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocationLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.FloatFieldUpdateOperationsInput | number;
    heading?: Prisma.FloatFieldUpdateOperationsInput | number;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocationLogListRelationFilter = {
    every?: Prisma.LocationLogWhereInput;
    some?: Prisma.LocationLogWhereInput;
    none?: Prisma.LocationLogWhereInput;
};
export type LocationLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LocationLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
};
export type LocationLogAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
};
export type LocationLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
};
export type LocationLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
    recordedAt?: Prisma.SortOrder;
};
export type LocationLogSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    speed?: Prisma.SortOrder;
    heading?: Prisma.SortOrder;
};
export type LocationLogCreateNestedManyWithoutVehicleInput = {
    create?: Prisma.XOR<Prisma.LocationLogCreateWithoutVehicleInput, Prisma.LocationLogUncheckedCreateWithoutVehicleInput> | Prisma.LocationLogCreateWithoutVehicleInput[] | Prisma.LocationLogUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.LocationLogCreateOrConnectWithoutVehicleInput | Prisma.LocationLogCreateOrConnectWithoutVehicleInput[];
    createMany?: Prisma.LocationLogCreateManyVehicleInputEnvelope;
    connect?: Prisma.LocationLogWhereUniqueInput | Prisma.LocationLogWhereUniqueInput[];
};
export type LocationLogUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: Prisma.XOR<Prisma.LocationLogCreateWithoutVehicleInput, Prisma.LocationLogUncheckedCreateWithoutVehicleInput> | Prisma.LocationLogCreateWithoutVehicleInput[] | Prisma.LocationLogUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.LocationLogCreateOrConnectWithoutVehicleInput | Prisma.LocationLogCreateOrConnectWithoutVehicleInput[];
    createMany?: Prisma.LocationLogCreateManyVehicleInputEnvelope;
    connect?: Prisma.LocationLogWhereUniqueInput | Prisma.LocationLogWhereUniqueInput[];
};
export type LocationLogUpdateManyWithoutVehicleNestedInput = {
    create?: Prisma.XOR<Prisma.LocationLogCreateWithoutVehicleInput, Prisma.LocationLogUncheckedCreateWithoutVehicleInput> | Prisma.LocationLogCreateWithoutVehicleInput[] | Prisma.LocationLogUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.LocationLogCreateOrConnectWithoutVehicleInput | Prisma.LocationLogCreateOrConnectWithoutVehicleInput[];
    upsert?: Prisma.LocationLogUpsertWithWhereUniqueWithoutVehicleInput | Prisma.LocationLogUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: Prisma.LocationLogCreateManyVehicleInputEnvelope;
    set?: Prisma.LocationLogWhereUniqueInput | Prisma.LocationLogWhereUniqueInput[];
    disconnect?: Prisma.LocationLogWhereUniqueInput | Prisma.LocationLogWhereUniqueInput[];
    delete?: Prisma.LocationLogWhereUniqueInput | Prisma.LocationLogWhereUniqueInput[];
    connect?: Prisma.LocationLogWhereUniqueInput | Prisma.LocationLogWhereUniqueInput[];
    update?: Prisma.LocationLogUpdateWithWhereUniqueWithoutVehicleInput | Prisma.LocationLogUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: Prisma.LocationLogUpdateManyWithWhereWithoutVehicleInput | Prisma.LocationLogUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: Prisma.LocationLogScalarWhereInput | Prisma.LocationLogScalarWhereInput[];
};
export type LocationLogUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: Prisma.XOR<Prisma.LocationLogCreateWithoutVehicleInput, Prisma.LocationLogUncheckedCreateWithoutVehicleInput> | Prisma.LocationLogCreateWithoutVehicleInput[] | Prisma.LocationLogUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.LocationLogCreateOrConnectWithoutVehicleInput | Prisma.LocationLogCreateOrConnectWithoutVehicleInput[];
    upsert?: Prisma.LocationLogUpsertWithWhereUniqueWithoutVehicleInput | Prisma.LocationLogUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: Prisma.LocationLogCreateManyVehicleInputEnvelope;
    set?: Prisma.LocationLogWhereUniqueInput | Prisma.LocationLogWhereUniqueInput[];
    disconnect?: Prisma.LocationLogWhereUniqueInput | Prisma.LocationLogWhereUniqueInput[];
    delete?: Prisma.LocationLogWhereUniqueInput | Prisma.LocationLogWhereUniqueInput[];
    connect?: Prisma.LocationLogWhereUniqueInput | Prisma.LocationLogWhereUniqueInput[];
    update?: Prisma.LocationLogUpdateWithWhereUniqueWithoutVehicleInput | Prisma.LocationLogUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: Prisma.LocationLogUpdateManyWithWhereWithoutVehicleInput | Prisma.LocationLogUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: Prisma.LocationLogScalarWhereInput | Prisma.LocationLogScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type LocationLogCreateWithoutVehicleInput = {
    id?: string;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    recordedAt?: Date | string;
};
export type LocationLogUncheckedCreateWithoutVehicleInput = {
    id?: string;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    recordedAt?: Date | string;
};
export type LocationLogCreateOrConnectWithoutVehicleInput = {
    where: Prisma.LocationLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationLogCreateWithoutVehicleInput, Prisma.LocationLogUncheckedCreateWithoutVehicleInput>;
};
export type LocationLogCreateManyVehicleInputEnvelope = {
    data: Prisma.LocationLogCreateManyVehicleInput | Prisma.LocationLogCreateManyVehicleInput[];
    skipDuplicates?: boolean;
};
export type LocationLogUpsertWithWhereUniqueWithoutVehicleInput = {
    where: Prisma.LocationLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.LocationLogUpdateWithoutVehicleInput, Prisma.LocationLogUncheckedUpdateWithoutVehicleInput>;
    create: Prisma.XOR<Prisma.LocationLogCreateWithoutVehicleInput, Prisma.LocationLogUncheckedCreateWithoutVehicleInput>;
};
export type LocationLogUpdateWithWhereUniqueWithoutVehicleInput = {
    where: Prisma.LocationLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.LocationLogUpdateWithoutVehicleInput, Prisma.LocationLogUncheckedUpdateWithoutVehicleInput>;
};
export type LocationLogUpdateManyWithWhereWithoutVehicleInput = {
    where: Prisma.LocationLogScalarWhereInput;
    data: Prisma.XOR<Prisma.LocationLogUpdateManyMutationInput, Prisma.LocationLogUncheckedUpdateManyWithoutVehicleInput>;
};
export type LocationLogScalarWhereInput = {
    AND?: Prisma.LocationLogScalarWhereInput | Prisma.LocationLogScalarWhereInput[];
    OR?: Prisma.LocationLogScalarWhereInput[];
    NOT?: Prisma.LocationLogScalarWhereInput | Prisma.LocationLogScalarWhereInput[];
    id?: Prisma.StringFilter<"LocationLog"> | string;
    vehicleId?: Prisma.StringFilter<"LocationLog"> | string;
    latitude?: Prisma.FloatFilter<"LocationLog"> | number;
    longitude?: Prisma.FloatFilter<"LocationLog"> | number;
    speed?: Prisma.FloatFilter<"LocationLog"> | number;
    heading?: Prisma.FloatFilter<"LocationLog"> | number;
    recordedAt?: Prisma.DateTimeFilter<"LocationLog"> | Date | string;
};
export type LocationLogCreateManyVehicleInput = {
    id?: string;
    latitude: number;
    longitude: number;
    speed: number;
    heading: number;
    recordedAt?: Date | string;
};
export type LocationLogUpdateWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.FloatFieldUpdateOperationsInput | number;
    heading?: Prisma.FloatFieldUpdateOperationsInput | number;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocationLogUncheckedUpdateWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.FloatFieldUpdateOperationsInput | number;
    heading?: Prisma.FloatFieldUpdateOperationsInput | number;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocationLogUncheckedUpdateManyWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    speed?: Prisma.FloatFieldUpdateOperationsInput | number;
    heading?: Prisma.FloatFieldUpdateOperationsInput | number;
    recordedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LocationLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehicleId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    speed?: boolean;
    heading?: boolean;
    recordedAt?: boolean;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locationLog"]>;
export type LocationLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehicleId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    speed?: boolean;
    heading?: boolean;
    recordedAt?: boolean;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locationLog"]>;
export type LocationLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehicleId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    speed?: boolean;
    heading?: boolean;
    recordedAt?: boolean;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["locationLog"]>;
export type LocationLogSelectScalar = {
    id?: boolean;
    vehicleId?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    speed?: boolean;
    heading?: boolean;
    recordedAt?: boolean;
};
export type LocationLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "vehicleId" | "latitude" | "longitude" | "speed" | "heading" | "recordedAt", ExtArgs["result"]["locationLog"]>;
export type LocationLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
};
export type LocationLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
};
export type LocationLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
};
export type $LocationLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LocationLog";
    objects: {
        vehicle: Prisma.$VehiclePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        vehicleId: string;
        latitude: number;
        longitude: number;
        speed: number;
        heading: number;
        recordedAt: Date;
    }, ExtArgs["result"]["locationLog"]>;
    composites: {};
};
export type LocationLogGetPayload<S extends boolean | null | undefined | LocationLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LocationLogPayload, S>;
export type LocationLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LocationLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LocationLogCountAggregateInputType | true;
};
export interface LocationLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LocationLog'];
        meta: {
            name: 'LocationLog';
        };
    };
    findUnique<T extends LocationLogFindUniqueArgs>(args: Prisma.SelectSubset<T, LocationLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LocationLogClient<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LocationLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LocationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocationLogClient<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LocationLogFindFirstArgs>(args?: Prisma.SelectSubset<T, LocationLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__LocationLogClient<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LocationLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LocationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LocationLogClient<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LocationLogFindManyArgs>(args?: Prisma.SelectSubset<T, LocationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LocationLogCreateArgs>(args: Prisma.SelectSubset<T, LocationLogCreateArgs<ExtArgs>>): Prisma.Prisma__LocationLogClient<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LocationLogCreateManyArgs>(args?: Prisma.SelectSubset<T, LocationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LocationLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LocationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LocationLogDeleteArgs>(args: Prisma.SelectSubset<T, LocationLogDeleteArgs<ExtArgs>>): Prisma.Prisma__LocationLogClient<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LocationLogUpdateArgs>(args: Prisma.SelectSubset<T, LocationLogUpdateArgs<ExtArgs>>): Prisma.Prisma__LocationLogClient<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LocationLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, LocationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LocationLogUpdateManyArgs>(args: Prisma.SelectSubset<T, LocationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LocationLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LocationLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LocationLogUpsertArgs>(args: Prisma.SelectSubset<T, LocationLogUpsertArgs<ExtArgs>>): Prisma.Prisma__LocationLogClient<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LocationLogCountArgs>(args?: Prisma.Subset<T, LocationLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LocationLogCountAggregateOutputType> : number>;
    aggregate<T extends LocationLogAggregateArgs>(args: Prisma.Subset<T, LocationLogAggregateArgs>): Prisma.PrismaPromise<GetLocationLogAggregateType<T>>;
    groupBy<T extends LocationLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LocationLogGroupByArgs['orderBy'];
    } : {
        orderBy?: LocationLogGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LocationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LocationLogFieldRefs;
}
export interface Prisma__LocationLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    vehicle<T extends Prisma.VehicleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VehicleDefaultArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LocationLogFieldRefs {
    readonly id: Prisma.FieldRef<"LocationLog", 'String'>;
    readonly vehicleId: Prisma.FieldRef<"LocationLog", 'String'>;
    readonly latitude: Prisma.FieldRef<"LocationLog", 'Float'>;
    readonly longitude: Prisma.FieldRef<"LocationLog", 'Float'>;
    readonly speed: Prisma.FieldRef<"LocationLog", 'Float'>;
    readonly heading: Prisma.FieldRef<"LocationLog", 'Float'>;
    readonly recordedAt: Prisma.FieldRef<"LocationLog", 'DateTime'>;
}
export type LocationLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelect<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    include?: Prisma.LocationLogInclude<ExtArgs> | null;
    where: Prisma.LocationLogWhereUniqueInput;
};
export type LocationLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelect<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    include?: Prisma.LocationLogInclude<ExtArgs> | null;
    where: Prisma.LocationLogWhereUniqueInput;
};
export type LocationLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelect<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    include?: Prisma.LocationLogInclude<ExtArgs> | null;
    where?: Prisma.LocationLogWhereInput;
    orderBy?: Prisma.LocationLogOrderByWithRelationInput | Prisma.LocationLogOrderByWithRelationInput[];
    cursor?: Prisma.LocationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocationLogScalarFieldEnum | Prisma.LocationLogScalarFieldEnum[];
};
export type LocationLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelect<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    include?: Prisma.LocationLogInclude<ExtArgs> | null;
    where?: Prisma.LocationLogWhereInput;
    orderBy?: Prisma.LocationLogOrderByWithRelationInput | Prisma.LocationLogOrderByWithRelationInput[];
    cursor?: Prisma.LocationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocationLogScalarFieldEnum | Prisma.LocationLogScalarFieldEnum[];
};
export type LocationLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelect<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    include?: Prisma.LocationLogInclude<ExtArgs> | null;
    where?: Prisma.LocationLogWhereInput;
    orderBy?: Prisma.LocationLogOrderByWithRelationInput | Prisma.LocationLogOrderByWithRelationInput[];
    cursor?: Prisma.LocationLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LocationLogScalarFieldEnum | Prisma.LocationLogScalarFieldEnum[];
};
export type LocationLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelect<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    include?: Prisma.LocationLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LocationLogCreateInput, Prisma.LocationLogUncheckedCreateInput>;
};
export type LocationLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LocationLogCreateManyInput | Prisma.LocationLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LocationLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    data: Prisma.LocationLogCreateManyInput | Prisma.LocationLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LocationLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LocationLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelect<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    include?: Prisma.LocationLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LocationLogUpdateInput, Prisma.LocationLogUncheckedUpdateInput>;
    where: Prisma.LocationLogWhereUniqueInput;
};
export type LocationLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LocationLogUpdateManyMutationInput, Prisma.LocationLogUncheckedUpdateManyInput>;
    where?: Prisma.LocationLogWhereInput;
    limit?: number;
};
export type LocationLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LocationLogUpdateManyMutationInput, Prisma.LocationLogUncheckedUpdateManyInput>;
    where?: Prisma.LocationLogWhereInput;
    limit?: number;
    include?: Prisma.LocationLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LocationLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelect<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    include?: Prisma.LocationLogInclude<ExtArgs> | null;
    where: Prisma.LocationLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.LocationLogCreateInput, Prisma.LocationLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LocationLogUpdateInput, Prisma.LocationLogUncheckedUpdateInput>;
};
export type LocationLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelect<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    include?: Prisma.LocationLogInclude<ExtArgs> | null;
    where: Prisma.LocationLogWhereUniqueInput;
};
export type LocationLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationLogWhereInput;
    limit?: number;
};
export type LocationLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LocationLogSelect<ExtArgs> | null;
    omit?: Prisma.LocationLogOmit<ExtArgs> | null;
    include?: Prisma.LocationLogInclude<ExtArgs> | null;
};
