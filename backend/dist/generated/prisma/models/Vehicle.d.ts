import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VehicleModel = runtime.Types.Result.DefaultSelection<Prisma.$VehiclePayload>;
export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
};
export type VehicleAvgAggregateOutputType = {
    year: number | null;
    currentKm: number | null;
};
export type VehicleSumAggregateOutputType = {
    year: number | null;
    currentKm: number | null;
};
export type VehicleMinAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    driverId: string | null;
    plateNumber: string | null;
    brand: string | null;
    model: string | null;
    year: number | null;
    fuelType: $Enums.FuelType | null;
    currentKm: number | null;
    status: $Enums.VehicleStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VehicleMaxAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    driverId: string | null;
    plateNumber: string | null;
    brand: string | null;
    model: string | null;
    year: number | null;
    fuelType: $Enums.FuelType | null;
    currentKm: number | null;
    status: $Enums.VehicleStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type VehicleCountAggregateOutputType = {
    id: number;
    companyId: number;
    driverId: number;
    plateNumber: number;
    brand: number;
    model: number;
    year: number;
    fuelType: number;
    currentKm: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type VehicleAvgAggregateInputType = {
    year?: true;
    currentKm?: true;
};
export type VehicleSumAggregateInputType = {
    year?: true;
    currentKm?: true;
};
export type VehicleMinAggregateInputType = {
    id?: true;
    companyId?: true;
    driverId?: true;
    plateNumber?: true;
    brand?: true;
    model?: true;
    year?: true;
    fuelType?: true;
    currentKm?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VehicleMaxAggregateInputType = {
    id?: true;
    companyId?: true;
    driverId?: true;
    plateNumber?: true;
    brand?: true;
    model?: true;
    year?: true;
    fuelType?: true;
    currentKm?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type VehicleCountAggregateInputType = {
    id?: true;
    companyId?: true;
    driverId?: true;
    plateNumber?: true;
    brand?: true;
    model?: true;
    year?: true;
    fuelType?: true;
    currentKm?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type VehicleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VehicleCountAggregateInputType;
    _avg?: VehicleAvgAggregateInputType;
    _sum?: VehicleSumAggregateInputType;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
};
export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVehicle[P]> : Prisma.GetScalarType<T[P], AggregateVehicle[P]>;
};
export type VehicleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithAggregationInput | Prisma.VehicleOrderByWithAggregationInput[];
    by: Prisma.VehicleScalarFieldEnum[] | Prisma.VehicleScalarFieldEnum;
    having?: Prisma.VehicleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehicleCountAggregateInputType | true;
    _avg?: VehicleAvgAggregateInputType;
    _sum?: VehicleSumAggregateInputType;
    _min?: VehicleMinAggregateInputType;
    _max?: VehicleMaxAggregateInputType;
};
export type VehicleGroupByOutputType = {
    id: string;
    companyId: string;
    driverId: string | null;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm: number;
    status: $Enums.VehicleStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: VehicleCountAggregateOutputType | null;
    _avg: VehicleAvgAggregateOutputType | null;
    _sum: VehicleSumAggregateOutputType | null;
    _min: VehicleMinAggregateOutputType | null;
    _max: VehicleMaxAggregateOutputType | null;
};
export type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VehicleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VehicleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VehicleGroupByOutputType[P]>;
}>>;
export type VehicleWhereInput = {
    AND?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    OR?: Prisma.VehicleWhereInput[];
    NOT?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    id?: Prisma.StringFilter<"Vehicle"> | string;
    companyId?: Prisma.StringFilter<"Vehicle"> | string;
    driverId?: Prisma.StringNullableFilter<"Vehicle"> | string | null;
    plateNumber?: Prisma.StringFilter<"Vehicle"> | string;
    brand?: Prisma.StringFilter<"Vehicle"> | string;
    model?: Prisma.StringFilter<"Vehicle"> | string;
    year?: Prisma.IntFilter<"Vehicle"> | number;
    fuelType?: Prisma.EnumFuelTypeFilter<"Vehicle"> | $Enums.FuelType;
    currentKm?: Prisma.IntFilter<"Vehicle"> | number;
    status?: Prisma.EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
    driver?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    tasks?: Prisma.TaskListRelationFilter;
    locationLogs?: Prisma.LocationLogListRelationFilter;
};
export type VehicleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    plateNumber?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    fuelType?: Prisma.SortOrder;
    currentKm?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    company?: Prisma.CompanyOrderByWithRelationInput;
    driver?: Prisma.UserOrderByWithRelationInput;
    tasks?: Prisma.TaskOrderByRelationAggregateInput;
    locationLogs?: Prisma.LocationLogOrderByRelationAggregateInput;
};
export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    companyId_plateNumber?: Prisma.VehicleCompanyIdPlateNumberCompoundUniqueInput;
    AND?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    OR?: Prisma.VehicleWhereInput[];
    NOT?: Prisma.VehicleWhereInput | Prisma.VehicleWhereInput[];
    companyId?: Prisma.StringFilter<"Vehicle"> | string;
    driverId?: Prisma.StringNullableFilter<"Vehicle"> | string | null;
    plateNumber?: Prisma.StringFilter<"Vehicle"> | string;
    brand?: Prisma.StringFilter<"Vehicle"> | string;
    model?: Prisma.StringFilter<"Vehicle"> | string;
    year?: Prisma.IntFilter<"Vehicle"> | number;
    fuelType?: Prisma.EnumFuelTypeFilter<"Vehicle"> | $Enums.FuelType;
    currentKm?: Prisma.IntFilter<"Vehicle"> | number;
    status?: Prisma.EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
    driver?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    tasks?: Prisma.TaskListRelationFilter;
    locationLogs?: Prisma.LocationLogListRelationFilter;
}, "id" | "companyId_plateNumber">;
export type VehicleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    plateNumber?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    fuelType?: Prisma.SortOrder;
    currentKm?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.VehicleCountOrderByAggregateInput;
    _avg?: Prisma.VehicleAvgOrderByAggregateInput;
    _max?: Prisma.VehicleMaxOrderByAggregateInput;
    _min?: Prisma.VehicleMinOrderByAggregateInput;
    _sum?: Prisma.VehicleSumOrderByAggregateInput;
};
export type VehicleScalarWhereWithAggregatesInput = {
    AND?: Prisma.VehicleScalarWhereWithAggregatesInput | Prisma.VehicleScalarWhereWithAggregatesInput[];
    OR?: Prisma.VehicleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VehicleScalarWhereWithAggregatesInput | Prisma.VehicleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    companyId?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    driverId?: Prisma.StringNullableWithAggregatesFilter<"Vehicle"> | string | null;
    plateNumber?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    brand?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    model?: Prisma.StringWithAggregatesFilter<"Vehicle"> | string;
    year?: Prisma.IntWithAggregatesFilter<"Vehicle"> | number;
    fuelType?: Prisma.EnumFuelTypeWithAggregatesFilter<"Vehicle"> | $Enums.FuelType;
    currentKm?: Prisma.IntWithAggregatesFilter<"Vehicle"> | number;
    status?: Prisma.EnumVehicleStatusWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Vehicle"> | Date | string;
};
export type VehicleCreateInput = {
    id?: string;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutVehiclesInput;
    driver?: Prisma.UserCreateNestedOneWithoutAssignedVehicleInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutVehicleInput;
    locationLogs?: Prisma.LocationLogCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateInput = {
    id?: string;
    companyId: string;
    driverId?: string | null;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutVehicleInput;
    locationLogs?: Prisma.LocationLogUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutVehiclesNestedInput;
    driver?: Prisma.UserUpdateOneWithoutAssignedVehicleNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutVehicleNestedInput;
    locationLogs?: Prisma.LocationLogUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutVehicleNestedInput;
    locationLogs?: Prisma.LocationLogUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleCreateManyInput = {
    id?: string;
    companyId: string;
    driverId?: string | null;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VehicleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleListRelationFilter = {
    every?: Prisma.VehicleWhereInput;
    some?: Prisma.VehicleWhereInput;
    none?: Prisma.VehicleWhereInput;
};
export type VehicleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VehicleCompanyIdPlateNumberCompoundUniqueInput = {
    companyId: string;
    plateNumber: string;
};
export type VehicleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    plateNumber?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    fuelType?: Prisma.SortOrder;
    currentKm?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VehicleAvgOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    currentKm?: Prisma.SortOrder;
};
export type VehicleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    plateNumber?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    fuelType?: Prisma.SortOrder;
    currentKm?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VehicleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    plateNumber?: Prisma.SortOrder;
    brand?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    year?: Prisma.SortOrder;
    fuelType?: Prisma.SortOrder;
    currentKm?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type VehicleSumOrderByAggregateInput = {
    year?: Prisma.SortOrder;
    currentKm?: Prisma.SortOrder;
};
export type VehicleScalarRelationFilter = {
    is?: Prisma.VehicleWhereInput;
    isNot?: Prisma.VehicleWhereInput;
};
export type VehicleCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutCompanyInput, Prisma.VehicleUncheckedCreateWithoutCompanyInput> | Prisma.VehicleCreateWithoutCompanyInput[] | Prisma.VehicleUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutCompanyInput | Prisma.VehicleCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.VehicleCreateManyCompanyInputEnvelope;
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
};
export type VehicleUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutCompanyInput, Prisma.VehicleUncheckedCreateWithoutCompanyInput> | Prisma.VehicleCreateWithoutCompanyInput[] | Prisma.VehicleUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutCompanyInput | Prisma.VehicleCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.VehicleCreateManyCompanyInputEnvelope;
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
};
export type VehicleUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutCompanyInput, Prisma.VehicleUncheckedCreateWithoutCompanyInput> | Prisma.VehicleCreateWithoutCompanyInput[] | Prisma.VehicleUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutCompanyInput | Prisma.VehicleCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.VehicleUpsertWithWhereUniqueWithoutCompanyInput | Prisma.VehicleUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.VehicleCreateManyCompanyInputEnvelope;
    set?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    disconnect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    delete?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    update?: Prisma.VehicleUpdateWithWhereUniqueWithoutCompanyInput | Prisma.VehicleUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.VehicleUpdateManyWithWhereWithoutCompanyInput | Prisma.VehicleUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
};
export type VehicleUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutCompanyInput, Prisma.VehicleUncheckedCreateWithoutCompanyInput> | Prisma.VehicleCreateWithoutCompanyInput[] | Prisma.VehicleUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutCompanyInput | Prisma.VehicleCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.VehicleUpsertWithWhereUniqueWithoutCompanyInput | Prisma.VehicleUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.VehicleCreateManyCompanyInputEnvelope;
    set?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    disconnect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    delete?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    update?: Prisma.VehicleUpdateWithWhereUniqueWithoutCompanyInput | Prisma.VehicleUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.VehicleUpdateManyWithWhereWithoutCompanyInput | Prisma.VehicleUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
};
export type VehicleCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutDriverInput, Prisma.VehicleUncheckedCreateWithoutDriverInput> | Prisma.VehicleCreateWithoutDriverInput[] | Prisma.VehicleUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutDriverInput | Prisma.VehicleCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.VehicleCreateManyDriverInputEnvelope;
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
};
export type VehicleUncheckedCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutDriverInput, Prisma.VehicleUncheckedCreateWithoutDriverInput> | Prisma.VehicleCreateWithoutDriverInput[] | Prisma.VehicleUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutDriverInput | Prisma.VehicleCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.VehicleCreateManyDriverInputEnvelope;
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
};
export type VehicleUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutDriverInput, Prisma.VehicleUncheckedCreateWithoutDriverInput> | Prisma.VehicleCreateWithoutDriverInput[] | Prisma.VehicleUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutDriverInput | Prisma.VehicleCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.VehicleUpsertWithWhereUniqueWithoutDriverInput | Prisma.VehicleUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.VehicleCreateManyDriverInputEnvelope;
    set?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    disconnect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    delete?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    update?: Prisma.VehicleUpdateWithWhereUniqueWithoutDriverInput | Prisma.VehicleUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.VehicleUpdateManyWithWhereWithoutDriverInput | Prisma.VehicleUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
};
export type VehicleUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutDriverInput, Prisma.VehicleUncheckedCreateWithoutDriverInput> | Prisma.VehicleCreateWithoutDriverInput[] | Prisma.VehicleUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutDriverInput | Prisma.VehicleCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.VehicleUpsertWithWhereUniqueWithoutDriverInput | Prisma.VehicleUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.VehicleCreateManyDriverInputEnvelope;
    set?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    disconnect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    delete?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    connect?: Prisma.VehicleWhereUniqueInput | Prisma.VehicleWhereUniqueInput[];
    update?: Prisma.VehicleUpdateWithWhereUniqueWithoutDriverInput | Prisma.VehicleUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.VehicleUpdateManyWithWhereWithoutDriverInput | Prisma.VehicleUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumFuelTypeFieldUpdateOperationsInput = {
    set?: $Enums.FuelType;
};
export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type VehicleCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutTasksInput, Prisma.VehicleUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutTasksInput;
    connect?: Prisma.VehicleWhereUniqueInput;
};
export type VehicleUpdateOneRequiredWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutTasksInput, Prisma.VehicleUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.VehicleUpsertWithoutTasksInput;
    connect?: Prisma.VehicleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VehicleUpdateToOneWithWhereWithoutTasksInput, Prisma.VehicleUpdateWithoutTasksInput>, Prisma.VehicleUncheckedUpdateWithoutTasksInput>;
};
export type VehicleCreateNestedOneWithoutLocationLogsInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutLocationLogsInput, Prisma.VehicleUncheckedCreateWithoutLocationLogsInput>;
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutLocationLogsInput;
    connect?: Prisma.VehicleWhereUniqueInput;
};
export type VehicleUpdateOneRequiredWithoutLocationLogsNestedInput = {
    create?: Prisma.XOR<Prisma.VehicleCreateWithoutLocationLogsInput, Prisma.VehicleUncheckedCreateWithoutLocationLogsInput>;
    connectOrCreate?: Prisma.VehicleCreateOrConnectWithoutLocationLogsInput;
    upsert?: Prisma.VehicleUpsertWithoutLocationLogsInput;
    connect?: Prisma.VehicleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VehicleUpdateToOneWithWhereWithoutLocationLogsInput, Prisma.VehicleUpdateWithoutLocationLogsInput>, Prisma.VehicleUncheckedUpdateWithoutLocationLogsInput>;
};
export type VehicleCreateWithoutCompanyInput = {
    id?: string;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    driver?: Prisma.UserCreateNestedOneWithoutAssignedVehicleInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutVehicleInput;
    locationLogs?: Prisma.LocationLogCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateWithoutCompanyInput = {
    id?: string;
    driverId?: string | null;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutVehicleInput;
    locationLogs?: Prisma.LocationLogUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleCreateOrConnectWithoutCompanyInput = {
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutCompanyInput, Prisma.VehicleUncheckedCreateWithoutCompanyInput>;
};
export type VehicleCreateManyCompanyInputEnvelope = {
    data: Prisma.VehicleCreateManyCompanyInput | Prisma.VehicleCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type VehicleUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.VehicleWhereUniqueInput;
    update: Prisma.XOR<Prisma.VehicleUpdateWithoutCompanyInput, Prisma.VehicleUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutCompanyInput, Prisma.VehicleUncheckedCreateWithoutCompanyInput>;
};
export type VehicleUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.VehicleWhereUniqueInput;
    data: Prisma.XOR<Prisma.VehicleUpdateWithoutCompanyInput, Prisma.VehicleUncheckedUpdateWithoutCompanyInput>;
};
export type VehicleUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.VehicleScalarWhereInput;
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyWithoutCompanyInput>;
};
export type VehicleScalarWhereInput = {
    AND?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
    OR?: Prisma.VehicleScalarWhereInput[];
    NOT?: Prisma.VehicleScalarWhereInput | Prisma.VehicleScalarWhereInput[];
    id?: Prisma.StringFilter<"Vehicle"> | string;
    companyId?: Prisma.StringFilter<"Vehicle"> | string;
    driverId?: Prisma.StringNullableFilter<"Vehicle"> | string | null;
    plateNumber?: Prisma.StringFilter<"Vehicle"> | string;
    brand?: Prisma.StringFilter<"Vehicle"> | string;
    model?: Prisma.StringFilter<"Vehicle"> | string;
    year?: Prisma.IntFilter<"Vehicle"> | number;
    fuelType?: Prisma.EnumFuelTypeFilter<"Vehicle"> | $Enums.FuelType;
    currentKm?: Prisma.IntFilter<"Vehicle"> | number;
    status?: Prisma.EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Vehicle"> | Date | string;
};
export type VehicleCreateWithoutDriverInput = {
    id?: string;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutVehiclesInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutVehicleInput;
    locationLogs?: Prisma.LocationLogCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateWithoutDriverInput = {
    id?: string;
    companyId: string;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutVehicleInput;
    locationLogs?: Prisma.LocationLogUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleCreateOrConnectWithoutDriverInput = {
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutDriverInput, Prisma.VehicleUncheckedCreateWithoutDriverInput>;
};
export type VehicleCreateManyDriverInputEnvelope = {
    data: Prisma.VehicleCreateManyDriverInput | Prisma.VehicleCreateManyDriverInput[];
    skipDuplicates?: boolean;
};
export type VehicleUpsertWithWhereUniqueWithoutDriverInput = {
    where: Prisma.VehicleWhereUniqueInput;
    update: Prisma.XOR<Prisma.VehicleUpdateWithoutDriverInput, Prisma.VehicleUncheckedUpdateWithoutDriverInput>;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutDriverInput, Prisma.VehicleUncheckedCreateWithoutDriverInput>;
};
export type VehicleUpdateWithWhereUniqueWithoutDriverInput = {
    where: Prisma.VehicleWhereUniqueInput;
    data: Prisma.XOR<Prisma.VehicleUpdateWithoutDriverInput, Prisma.VehicleUncheckedUpdateWithoutDriverInput>;
};
export type VehicleUpdateManyWithWhereWithoutDriverInput = {
    where: Prisma.VehicleScalarWhereInput;
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyWithoutDriverInput>;
};
export type VehicleCreateWithoutTasksInput = {
    id?: string;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutVehiclesInput;
    driver?: Prisma.UserCreateNestedOneWithoutAssignedVehicleInput;
    locationLogs?: Prisma.LocationLogCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateWithoutTasksInput = {
    id?: string;
    companyId: string;
    driverId?: string | null;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    locationLogs?: Prisma.LocationLogUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleCreateOrConnectWithoutTasksInput = {
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutTasksInput, Prisma.VehicleUncheckedCreateWithoutTasksInput>;
};
export type VehicleUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.VehicleUpdateWithoutTasksInput, Prisma.VehicleUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutTasksInput, Prisma.VehicleUncheckedCreateWithoutTasksInput>;
    where?: Prisma.VehicleWhereInput;
};
export type VehicleUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.VehicleWhereInput;
    data: Prisma.XOR<Prisma.VehicleUpdateWithoutTasksInput, Prisma.VehicleUncheckedUpdateWithoutTasksInput>;
};
export type VehicleUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutVehiclesNestedInput;
    driver?: Prisma.UserUpdateOneWithoutAssignedVehicleNestedInput;
    locationLogs?: Prisma.LocationLogUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    locationLogs?: Prisma.LocationLogUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleCreateWithoutLocationLogsInput = {
    id?: string;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutVehiclesInput;
    driver?: Prisma.UserCreateNestedOneWithoutAssignedVehicleInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutVehicleInput;
};
export type VehicleUncheckedCreateWithoutLocationLogsInput = {
    id?: string;
    companyId: string;
    driverId?: string | null;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutVehicleInput;
};
export type VehicleCreateOrConnectWithoutLocationLogsInput = {
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutLocationLogsInput, Prisma.VehicleUncheckedCreateWithoutLocationLogsInput>;
};
export type VehicleUpsertWithoutLocationLogsInput = {
    update: Prisma.XOR<Prisma.VehicleUpdateWithoutLocationLogsInput, Prisma.VehicleUncheckedUpdateWithoutLocationLogsInput>;
    create: Prisma.XOR<Prisma.VehicleCreateWithoutLocationLogsInput, Prisma.VehicleUncheckedCreateWithoutLocationLogsInput>;
    where?: Prisma.VehicleWhereInput;
};
export type VehicleUpdateToOneWithWhereWithoutLocationLogsInput = {
    where?: Prisma.VehicleWhereInput;
    data: Prisma.XOR<Prisma.VehicleUpdateWithoutLocationLogsInput, Prisma.VehicleUncheckedUpdateWithoutLocationLogsInput>;
};
export type VehicleUpdateWithoutLocationLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutVehiclesNestedInput;
    driver?: Prisma.UserUpdateOneWithoutAssignedVehicleNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateWithoutLocationLogsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleCreateManyCompanyInput = {
    id?: string;
    driverId?: string | null;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VehicleUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driver?: Prisma.UserUpdateOneWithoutAssignedVehicleNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutVehicleNestedInput;
    locationLogs?: Prisma.LocationLogUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutVehicleNestedInput;
    locationLogs?: Prisma.LocationLogUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleCreateManyDriverInput = {
    id?: string;
    companyId: string;
    plateNumber: string;
    brand: string;
    model: string;
    year: number;
    fuelType: $Enums.FuelType;
    currentKm?: number;
    status?: $Enums.VehicleStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type VehicleUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutVehiclesNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutVehicleNestedInput;
    locationLogs?: Prisma.LocationLogUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutVehicleNestedInput;
    locationLogs?: Prisma.LocationLogUncheckedUpdateManyWithoutVehicleNestedInput;
};
export type VehicleUncheckedUpdateManyWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    plateNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    brand?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    year?: Prisma.IntFieldUpdateOperationsInput | number;
    fuelType?: Prisma.EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType;
    currentKm?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VehicleCountOutputType = {
    tasks: number;
    locationLogs: number;
};
export type VehicleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | VehicleCountOutputTypeCountTasksArgs;
    locationLogs?: boolean | VehicleCountOutputTypeCountLocationLogsArgs;
};
export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleCountOutputTypeSelect<ExtArgs> | null;
};
export type VehicleCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type VehicleCountOutputTypeCountLocationLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LocationLogWhereInput;
};
export type VehicleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    driverId?: boolean;
    plateNumber?: boolean;
    brand?: boolean;
    model?: boolean;
    year?: boolean;
    fuelType?: boolean;
    currentKm?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Vehicle$driverArgs<ExtArgs>;
    tasks?: boolean | Prisma.Vehicle$tasksArgs<ExtArgs>;
    locationLogs?: boolean | Prisma.Vehicle$locationLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.VehicleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicle"]>;
export type VehicleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    driverId?: boolean;
    plateNumber?: boolean;
    brand?: boolean;
    model?: boolean;
    year?: boolean;
    fuelType?: boolean;
    currentKm?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Vehicle$driverArgs<ExtArgs>;
}, ExtArgs["result"]["vehicle"]>;
export type VehicleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    driverId?: boolean;
    plateNumber?: boolean;
    brand?: boolean;
    model?: boolean;
    year?: boolean;
    fuelType?: boolean;
    currentKm?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Vehicle$driverArgs<ExtArgs>;
}, ExtArgs["result"]["vehicle"]>;
export type VehicleSelectScalar = {
    id?: boolean;
    companyId?: boolean;
    driverId?: boolean;
    plateNumber?: boolean;
    brand?: boolean;
    model?: boolean;
    year?: boolean;
    fuelType?: boolean;
    currentKm?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type VehicleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "companyId" | "driverId" | "plateNumber" | "brand" | "model" | "year" | "fuelType" | "currentKm" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>;
export type VehicleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Vehicle$driverArgs<ExtArgs>;
    tasks?: boolean | Prisma.Vehicle$tasksArgs<ExtArgs>;
    locationLogs?: boolean | Prisma.Vehicle$locationLogsArgs<ExtArgs>;
    _count?: boolean | Prisma.VehicleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VehicleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Vehicle$driverArgs<ExtArgs>;
};
export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.Vehicle$driverArgs<ExtArgs>;
};
export type $VehiclePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vehicle";
    objects: {
        company: Prisma.$CompanyPayload<ExtArgs>;
        driver: Prisma.$UserPayload<ExtArgs> | null;
        tasks: Prisma.$TaskPayload<ExtArgs>[];
        locationLogs: Prisma.$LocationLogPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        companyId: string;
        driverId: string | null;
        plateNumber: string;
        brand: string;
        model: string;
        year: number;
        fuelType: $Enums.FuelType;
        currentKm: number;
        status: $Enums.VehicleStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["vehicle"]>;
    composites: {};
};
export type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VehiclePayload, S>;
export type VehicleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VehicleCountAggregateInputType | true;
};
export interface VehicleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'];
        meta: {
            name: 'Vehicle';
        };
    };
    findUnique<T extends VehicleFindUniqueArgs>(args: Prisma.SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VehicleFindFirstArgs>(args?: Prisma.SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VehicleFindManyArgs>(args?: Prisma.SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VehicleCreateArgs>(args: Prisma.SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VehicleCreateManyArgs>(args?: Prisma.SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VehicleDeleteArgs>(args: Prisma.SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VehicleUpdateArgs>(args: Prisma.SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VehicleDeleteManyArgs>(args?: Prisma.SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VehicleUpdateManyArgs>(args: Prisma.SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VehicleUpsertArgs>(args: Prisma.SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VehicleCountArgs>(args?: Prisma.Subset<T, VehicleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VehicleCountAggregateOutputType> : number>;
    aggregate<T extends VehicleAggregateArgs>(args: Prisma.Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>;
    groupBy<T extends VehicleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VehicleGroupByArgs['orderBy'];
    } : {
        orderBy?: VehicleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VehicleFieldRefs;
}
export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    driver<T extends Prisma.Vehicle$driverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vehicle$driverArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tasks<T extends Prisma.Vehicle$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vehicle$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    locationLogs<T extends Prisma.Vehicle$locationLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vehicle$locationLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LocationLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VehicleFieldRefs {
    readonly id: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly companyId: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly driverId: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly plateNumber: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly brand: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly model: Prisma.FieldRef<"Vehicle", 'String'>;
    readonly year: Prisma.FieldRef<"Vehicle", 'Int'>;
    readonly fuelType: Prisma.FieldRef<"Vehicle", 'FuelType'>;
    readonly currentKm: Prisma.FieldRef<"Vehicle", 'Int'>;
    readonly status: Prisma.FieldRef<"Vehicle", 'VehicleStatus'>;
    readonly createdAt: Prisma.FieldRef<"Vehicle", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Vehicle", 'DateTime'>;
}
export type VehicleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehicleScalarFieldEnum | Prisma.VehicleScalarFieldEnum[];
};
export type VehicleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehicleScalarFieldEnum | Prisma.VehicleScalarFieldEnum[];
};
export type VehicleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where?: Prisma.VehicleWhereInput;
    orderBy?: Prisma.VehicleOrderByWithRelationInput | Prisma.VehicleOrderByWithRelationInput[];
    cursor?: Prisma.VehicleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehicleScalarFieldEnum | Prisma.VehicleScalarFieldEnum[];
};
export type VehicleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehicleCreateInput, Prisma.VehicleUncheckedCreateInput>;
};
export type VehicleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VehicleCreateManyInput | Prisma.VehicleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VehicleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    data: Prisma.VehicleCreateManyInput | Prisma.VehicleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VehicleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VehicleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehicleUpdateInput, Prisma.VehicleUncheckedUpdateInput>;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyInput>;
    where?: Prisma.VehicleWhereInput;
    limit?: number;
};
export type VehicleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehicleUpdateManyMutationInput, Prisma.VehicleUncheckedUpdateManyInput>;
    where?: Prisma.VehicleWhereInput;
    limit?: number;
    include?: Prisma.VehicleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VehicleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehicleCreateInput, Prisma.VehicleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VehicleUpdateInput, Prisma.VehicleUncheckedUpdateInput>;
};
export type VehicleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
    where: Prisma.VehicleWhereUniqueInput;
};
export type VehicleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehicleWhereInput;
    limit?: number;
};
export type Vehicle$driverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type Vehicle$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
export type Vehicle$locationLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VehicleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehicleSelect<ExtArgs> | null;
    omit?: Prisma.VehicleOmit<ExtArgs> | null;
    include?: Prisma.VehicleInclude<ExtArgs> | null;
};
