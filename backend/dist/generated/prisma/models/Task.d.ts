import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TaskModel = runtime.Types.Result.DefaultSelection<Prisma.$TaskPayload>;
export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type TaskAvgAggregateOutputType = {
    estimatedMinutes: number | null;
};
export type TaskSumAggregateOutputType = {
    estimatedMinutes: number | null;
};
export type TaskMinAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    vehicleId: string | null;
    driverId: string | null;
    title: string | null;
    startLocation: string | null;
    destinationLocation: string | null;
    estimatedMinutes: number | null;
    notes: string | null;
    status: $Enums.TaskStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskMaxAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    vehicleId: string | null;
    driverId: string | null;
    title: string | null;
    startLocation: string | null;
    destinationLocation: string | null;
    estimatedMinutes: number | null;
    notes: string | null;
    status: $Enums.TaskStatus | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TaskCountAggregateOutputType = {
    id: number;
    companyId: number;
    vehicleId: number;
    driverId: number;
    title: number;
    startLocation: number;
    destinationLocation: number;
    estimatedMinutes: number;
    notes: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TaskAvgAggregateInputType = {
    estimatedMinutes?: true;
};
export type TaskSumAggregateInputType = {
    estimatedMinutes?: true;
};
export type TaskMinAggregateInputType = {
    id?: true;
    companyId?: true;
    vehicleId?: true;
    driverId?: true;
    title?: true;
    startLocation?: true;
    destinationLocation?: true;
    estimatedMinutes?: true;
    notes?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskMaxAggregateInputType = {
    id?: true;
    companyId?: true;
    vehicleId?: true;
    driverId?: true;
    title?: true;
    startLocation?: true;
    destinationLocation?: true;
    estimatedMinutes?: true;
    notes?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TaskCountAggregateInputType = {
    id?: true;
    companyId?: true;
    vehicleId?: true;
    driverId?: true;
    title?: true;
    startLocation?: true;
    destinationLocation?: true;
    estimatedMinutes?: true;
    notes?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TaskAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TaskCountAggregateInputType;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTask[P]> : Prisma.GetScalarType<T[P], AggregateTask[P]>;
};
export type TaskGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithAggregationInput | Prisma.TaskOrderByWithAggregationInput[];
    by: Prisma.TaskScalarFieldEnum[] | Prisma.TaskScalarFieldEnum;
    having?: Prisma.TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
};
export type TaskGroupByOutputType = {
    id: string;
    companyId: string;
    vehicleId: string;
    driverId: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes: string | null;
    status: $Enums.TaskStatus;
    createdAt: Date;
    updatedAt: Date;
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
};
export type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TaskGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TaskGroupByOutputType[P]>;
}>>;
export type TaskWhereInput = {
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    companyId?: Prisma.StringFilter<"Task"> | string;
    vehicleId?: Prisma.StringFilter<"Task"> | string;
    driverId?: Prisma.StringFilter<"Task"> | string;
    title?: Prisma.StringFilter<"Task"> | string;
    startLocation?: Prisma.StringFilter<"Task"> | string;
    destinationLocation?: Prisma.StringFilter<"Task"> | string;
    estimatedMinutes?: Prisma.IntFilter<"Task"> | number;
    notes?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
    vehicle?: Prisma.XOR<Prisma.VehicleScalarRelationFilter, Prisma.VehicleWhereInput>;
    driver?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TaskOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    startLocation?: Prisma.SortOrder;
    destinationLocation?: Prisma.SortOrder;
    estimatedMinutes?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    company?: Prisma.CompanyOrderByWithRelationInput;
    vehicle?: Prisma.VehicleOrderByWithRelationInput;
    driver?: Prisma.UserOrderByWithRelationInput;
};
export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    OR?: Prisma.TaskWhereInput[];
    NOT?: Prisma.TaskWhereInput | Prisma.TaskWhereInput[];
    companyId?: Prisma.StringFilter<"Task"> | string;
    vehicleId?: Prisma.StringFilter<"Task"> | string;
    driverId?: Prisma.StringFilter<"Task"> | string;
    title?: Prisma.StringFilter<"Task"> | string;
    startLocation?: Prisma.StringFilter<"Task"> | string;
    destinationLocation?: Prisma.StringFilter<"Task"> | string;
    estimatedMinutes?: Prisma.IntFilter<"Task"> | number;
    notes?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
    vehicle?: Prisma.XOR<Prisma.VehicleScalarRelationFilter, Prisma.VehicleWhereInput>;
    driver?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type TaskOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    startLocation?: Prisma.SortOrder;
    destinationLocation?: Prisma.SortOrder;
    estimatedMinutes?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TaskCountOrderByAggregateInput;
    _avg?: Prisma.TaskAvgOrderByAggregateInput;
    _max?: Prisma.TaskMaxOrderByAggregateInput;
    _min?: Prisma.TaskMinOrderByAggregateInput;
    _sum?: Prisma.TaskSumOrderByAggregateInput;
};
export type TaskScalarWhereWithAggregatesInput = {
    AND?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    OR?: Prisma.TaskScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TaskScalarWhereWithAggregatesInput | Prisma.TaskScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    companyId?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    vehicleId?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    driverId?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    startLocation?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    destinationLocation?: Prisma.StringWithAggregatesFilter<"Task"> | string;
    estimatedMinutes?: Prisma.IntWithAggregatesFilter<"Task"> | number;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusWithAggregatesFilter<"Task"> | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Task"> | Date | string;
};
export type TaskCreateInput = {
    id?: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutTasksInput;
    vehicle: Prisma.VehicleCreateNestedOneWithoutTasksInput;
    driver: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
};
export type TaskUncheckedCreateInput = {
    id?: string;
    companyId: string;
    vehicleId: string;
    driverId: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutTasksNestedInput;
    vehicle?: Prisma.VehicleUpdateOneRequiredWithoutTasksNestedInput;
    driver?: Prisma.UserUpdateOneRequiredWithoutAssignedTasksNestedInput;
};
export type TaskUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCreateManyInput = {
    id?: string;
    companyId: string;
    vehicleId: string;
    driverId: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskListRelationFilter = {
    every?: Prisma.TaskWhereInput;
    some?: Prisma.TaskWhereInput;
    none?: Prisma.TaskWhereInput;
};
export type TaskOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TaskCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    startLocation?: Prisma.SortOrder;
    destinationLocation?: Prisma.SortOrder;
    estimatedMinutes?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskAvgOrderByAggregateInput = {
    estimatedMinutes?: Prisma.SortOrder;
};
export type TaskMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    startLocation?: Prisma.SortOrder;
    destinationLocation?: Prisma.SortOrder;
    estimatedMinutes?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    vehicleId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    startLocation?: Prisma.SortOrder;
    destinationLocation?: Prisma.SortOrder;
    estimatedMinutes?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TaskSumOrderByAggregateInput = {
    estimatedMinutes?: Prisma.SortOrder;
};
export type TaskCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCompanyInput, Prisma.TaskUncheckedCreateWithoutCompanyInput> | Prisma.TaskCreateWithoutCompanyInput[] | Prisma.TaskUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCompanyInput | Prisma.TaskCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.TaskCreateManyCompanyInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCompanyInput, Prisma.TaskUncheckedCreateWithoutCompanyInput> | Prisma.TaskCreateWithoutCompanyInput[] | Prisma.TaskUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCompanyInput | Prisma.TaskCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.TaskCreateManyCompanyInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCompanyInput, Prisma.TaskUncheckedCreateWithoutCompanyInput> | Prisma.TaskCreateWithoutCompanyInput[] | Prisma.TaskUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCompanyInput | Prisma.TaskCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutCompanyInput | Prisma.TaskUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.TaskCreateManyCompanyInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutCompanyInput | Prisma.TaskUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutCompanyInput | Prisma.TaskUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutCompanyInput, Prisma.TaskUncheckedCreateWithoutCompanyInput> | Prisma.TaskCreateWithoutCompanyInput[] | Prisma.TaskUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutCompanyInput | Prisma.TaskCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutCompanyInput | Prisma.TaskUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.TaskCreateManyCompanyInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutCompanyInput | Prisma.TaskUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutCompanyInput | Prisma.TaskUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutDriverInput, Prisma.TaskUncheckedCreateWithoutDriverInput> | Prisma.TaskCreateWithoutDriverInput[] | Prisma.TaskUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutDriverInput | Prisma.TaskCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.TaskCreateManyDriverInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutDriverInput, Prisma.TaskUncheckedCreateWithoutDriverInput> | Prisma.TaskCreateWithoutDriverInput[] | Prisma.TaskUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutDriverInput | Prisma.TaskCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.TaskCreateManyDriverInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutDriverInput, Prisma.TaskUncheckedCreateWithoutDriverInput> | Prisma.TaskCreateWithoutDriverInput[] | Prisma.TaskUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutDriverInput | Prisma.TaskCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutDriverInput | Prisma.TaskUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.TaskCreateManyDriverInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutDriverInput | Prisma.TaskUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutDriverInput | Prisma.TaskUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutDriverInput, Prisma.TaskUncheckedCreateWithoutDriverInput> | Prisma.TaskCreateWithoutDriverInput[] | Prisma.TaskUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutDriverInput | Prisma.TaskCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutDriverInput | Prisma.TaskUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.TaskCreateManyDriverInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutDriverInput | Prisma.TaskUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutDriverInput | Prisma.TaskUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskCreateNestedManyWithoutVehicleInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutVehicleInput, Prisma.TaskUncheckedCreateWithoutVehicleInput> | Prisma.TaskCreateWithoutVehicleInput[] | Prisma.TaskUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutVehicleInput | Prisma.TaskCreateOrConnectWithoutVehicleInput[];
    createMany?: Prisma.TaskCreateManyVehicleInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutVehicleInput, Prisma.TaskUncheckedCreateWithoutVehicleInput> | Prisma.TaskCreateWithoutVehicleInput[] | Prisma.TaskUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutVehicleInput | Prisma.TaskCreateOrConnectWithoutVehicleInput[];
    createMany?: Prisma.TaskCreateManyVehicleInputEnvelope;
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
};
export type TaskUpdateManyWithoutVehicleNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutVehicleInput, Prisma.TaskUncheckedCreateWithoutVehicleInput> | Prisma.TaskCreateWithoutVehicleInput[] | Prisma.TaskUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutVehicleInput | Prisma.TaskCreateOrConnectWithoutVehicleInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutVehicleInput | Prisma.TaskUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: Prisma.TaskCreateManyVehicleInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutVehicleInput | Prisma.TaskUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutVehicleInput | Prisma.TaskUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type TaskUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: Prisma.XOR<Prisma.TaskCreateWithoutVehicleInput, Prisma.TaskUncheckedCreateWithoutVehicleInput> | Prisma.TaskCreateWithoutVehicleInput[] | Prisma.TaskUncheckedCreateWithoutVehicleInput[];
    connectOrCreate?: Prisma.TaskCreateOrConnectWithoutVehicleInput | Prisma.TaskCreateOrConnectWithoutVehicleInput[];
    upsert?: Prisma.TaskUpsertWithWhereUniqueWithoutVehicleInput | Prisma.TaskUpsertWithWhereUniqueWithoutVehicleInput[];
    createMany?: Prisma.TaskCreateManyVehicleInputEnvelope;
    set?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    disconnect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    delete?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    connect?: Prisma.TaskWhereUniqueInput | Prisma.TaskWhereUniqueInput[];
    update?: Prisma.TaskUpdateWithWhereUniqueWithoutVehicleInput | Prisma.TaskUpdateWithWhereUniqueWithoutVehicleInput[];
    updateMany?: Prisma.TaskUpdateManyWithWhereWithoutVehicleInput | Prisma.TaskUpdateManyWithWhereWithoutVehicleInput[];
    deleteMany?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
};
export type EnumTaskStatusFieldUpdateOperationsInput = {
    set?: $Enums.TaskStatus;
};
export type TaskCreateWithoutCompanyInput = {
    id?: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    vehicle: Prisma.VehicleCreateNestedOneWithoutTasksInput;
    driver: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
};
export type TaskUncheckedCreateWithoutCompanyInput = {
    id?: string;
    vehicleId: string;
    driverId: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCreateOrConnectWithoutCompanyInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutCompanyInput, Prisma.TaskUncheckedCreateWithoutCompanyInput>;
};
export type TaskCreateManyCompanyInputEnvelope = {
    data: Prisma.TaskCreateManyCompanyInput | Prisma.TaskCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutCompanyInput, Prisma.TaskUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutCompanyInput, Prisma.TaskUncheckedCreateWithoutCompanyInput>;
};
export type TaskUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutCompanyInput, Prisma.TaskUncheckedUpdateWithoutCompanyInput>;
};
export type TaskUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutCompanyInput>;
};
export type TaskScalarWhereInput = {
    AND?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    OR?: Prisma.TaskScalarWhereInput[];
    NOT?: Prisma.TaskScalarWhereInput | Prisma.TaskScalarWhereInput[];
    id?: Prisma.StringFilter<"Task"> | string;
    companyId?: Prisma.StringFilter<"Task"> | string;
    vehicleId?: Prisma.StringFilter<"Task"> | string;
    driverId?: Prisma.StringFilter<"Task"> | string;
    title?: Prisma.StringFilter<"Task"> | string;
    startLocation?: Prisma.StringFilter<"Task"> | string;
    destinationLocation?: Prisma.StringFilter<"Task"> | string;
    estimatedMinutes?: Prisma.IntFilter<"Task"> | number;
    notes?: Prisma.StringNullableFilter<"Task"> | string | null;
    status?: Prisma.EnumTaskStatusFilter<"Task"> | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Task"> | Date | string;
};
export type TaskCreateWithoutDriverInput = {
    id?: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutTasksInput;
    vehicle: Prisma.VehicleCreateNestedOneWithoutTasksInput;
};
export type TaskUncheckedCreateWithoutDriverInput = {
    id?: string;
    companyId: string;
    vehicleId: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCreateOrConnectWithoutDriverInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutDriverInput, Prisma.TaskUncheckedCreateWithoutDriverInput>;
};
export type TaskCreateManyDriverInputEnvelope = {
    data: Prisma.TaskCreateManyDriverInput | Prisma.TaskCreateManyDriverInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutDriverInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutDriverInput, Prisma.TaskUncheckedUpdateWithoutDriverInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutDriverInput, Prisma.TaskUncheckedCreateWithoutDriverInput>;
};
export type TaskUpdateWithWhereUniqueWithoutDriverInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutDriverInput, Prisma.TaskUncheckedUpdateWithoutDriverInput>;
};
export type TaskUpdateManyWithWhereWithoutDriverInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutDriverInput>;
};
export type TaskCreateWithoutVehicleInput = {
    id?: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutTasksInput;
    driver: Prisma.UserCreateNestedOneWithoutAssignedTasksInput;
};
export type TaskUncheckedCreateWithoutVehicleInput = {
    id?: string;
    companyId: string;
    driverId: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskCreateOrConnectWithoutVehicleInput = {
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateWithoutVehicleInput, Prisma.TaskUncheckedCreateWithoutVehicleInput>;
};
export type TaskCreateManyVehicleInputEnvelope = {
    data: Prisma.TaskCreateManyVehicleInput | Prisma.TaskCreateManyVehicleInput[];
    skipDuplicates?: boolean;
};
export type TaskUpsertWithWhereUniqueWithoutVehicleInput = {
    where: Prisma.TaskWhereUniqueInput;
    update: Prisma.XOR<Prisma.TaskUpdateWithoutVehicleInput, Prisma.TaskUncheckedUpdateWithoutVehicleInput>;
    create: Prisma.XOR<Prisma.TaskCreateWithoutVehicleInput, Prisma.TaskUncheckedCreateWithoutVehicleInput>;
};
export type TaskUpdateWithWhereUniqueWithoutVehicleInput = {
    where: Prisma.TaskWhereUniqueInput;
    data: Prisma.XOR<Prisma.TaskUpdateWithoutVehicleInput, Prisma.TaskUncheckedUpdateWithoutVehicleInput>;
};
export type TaskUpdateManyWithWhereWithoutVehicleInput = {
    where: Prisma.TaskScalarWhereInput;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyWithoutVehicleInput>;
};
export type TaskCreateManyCompanyInput = {
    id?: string;
    vehicleId: string;
    driverId: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vehicle?: Prisma.VehicleUpdateOneRequiredWithoutTasksNestedInput;
    driver?: Prisma.UserUpdateOneRequiredWithoutAssignedTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCreateManyDriverInput = {
    id?: string;
    companyId: string;
    vehicleId: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutTasksNestedInput;
    vehicle?: Prisma.VehicleUpdateOneRequiredWithoutTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskCreateManyVehicleInput = {
    id?: string;
    companyId: string;
    driverId: string;
    title: string;
    startLocation: string;
    destinationLocation: string;
    estimatedMinutes: number;
    notes?: string | null;
    status?: $Enums.TaskStatus;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type TaskUpdateWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutTasksNestedInput;
    driver?: Prisma.UserUpdateOneRequiredWithoutAssignedTasksNestedInput;
};
export type TaskUncheckedUpdateWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskUncheckedUpdateManyWithoutVehicleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    startLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationLocation?: Prisma.StringFieldUpdateOperationsInput | string;
    estimatedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumTaskStatusFieldUpdateOperationsInput | $Enums.TaskStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TaskSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    vehicleId?: boolean;
    driverId?: boolean;
    title?: boolean;
    startLocation?: boolean;
    destinationLocation?: boolean;
    estimatedMinutes?: boolean;
    notes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    vehicleId?: boolean;
    driverId?: boolean;
    title?: boolean;
    startLocation?: boolean;
    destinationLocation?: boolean;
    estimatedMinutes?: boolean;
    notes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    vehicleId?: boolean;
    driverId?: boolean;
    title?: boolean;
    startLocation?: boolean;
    destinationLocation?: boolean;
    estimatedMinutes?: boolean;
    notes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["task"]>;
export type TaskSelectScalar = {
    id?: boolean;
    companyId?: boolean;
    vehicleId?: boolean;
    driverId?: boolean;
    title?: boolean;
    startLocation?: boolean;
    destinationLocation?: boolean;
    estimatedMinutes?: boolean;
    notes?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type TaskOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "companyId" | "vehicleId" | "driverId" | "title" | "startLocation" | "destinationLocation" | "estimatedMinutes" | "notes" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["task"]>;
export type TaskInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TaskIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TaskIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    vehicle?: boolean | Prisma.VehicleDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TaskPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Task";
    objects: {
        company: Prisma.$CompanyPayload<ExtArgs>;
        vehicle: Prisma.$VehiclePayload<ExtArgs>;
        driver: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        companyId: string;
        vehicleId: string;
        driverId: string;
        title: string;
        startLocation: string;
        destinationLocation: string;
        estimatedMinutes: number;
        notes: string | null;
        status: $Enums.TaskStatus;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["task"]>;
    composites: {};
};
export type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TaskPayload, S>;
export type TaskCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCountAggregateInputType | true;
};
export interface TaskDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Task'];
        meta: {
            name: 'Task';
        };
    };
    findUnique<T extends TaskFindUniqueArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TaskFindFirstArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TaskFindManyArgs>(args?: Prisma.SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TaskCreateArgs>(args: Prisma.SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TaskCreateManyArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TaskDeleteArgs>(args: Prisma.SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TaskUpdateArgs>(args: Prisma.SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TaskDeleteManyArgs>(args?: Prisma.SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TaskUpdateManyArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TaskUpsertArgs>(args: Prisma.SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma.Prisma__TaskClient<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TaskCountArgs>(args?: Prisma.Subset<T, TaskCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TaskCountAggregateOutputType> : number>;
    aggregate<T extends TaskAggregateArgs>(args: Prisma.Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>;
    groupBy<T extends TaskGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TaskGroupByArgs['orderBy'];
    } : {
        orderBy?: TaskGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TaskFieldRefs;
}
export interface Prisma__TaskClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    vehicle<T extends Prisma.VehicleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.VehicleDefaultArgs<ExtArgs>>): Prisma.Prisma__VehicleClient<runtime.Types.Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    driver<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TaskFieldRefs {
    readonly id: Prisma.FieldRef<"Task", 'String'>;
    readonly companyId: Prisma.FieldRef<"Task", 'String'>;
    readonly vehicleId: Prisma.FieldRef<"Task", 'String'>;
    readonly driverId: Prisma.FieldRef<"Task", 'String'>;
    readonly title: Prisma.FieldRef<"Task", 'String'>;
    readonly startLocation: Prisma.FieldRef<"Task", 'String'>;
    readonly destinationLocation: Prisma.FieldRef<"Task", 'String'>;
    readonly estimatedMinutes: Prisma.FieldRef<"Task", 'Int'>;
    readonly notes: Prisma.FieldRef<"Task", 'String'>;
    readonly status: Prisma.FieldRef<"Task", 'TaskStatus'>;
    readonly createdAt: Prisma.FieldRef<"Task", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Task", 'DateTime'>;
}
export type TaskFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TaskCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
};
export type TaskCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TaskCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.TaskCreateManyInput | Prisma.TaskCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TaskIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TaskUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TaskUpdateManyMutationInput, Prisma.TaskUncheckedUpdateManyInput>;
    where?: Prisma.TaskWhereInput;
    limit?: number;
    include?: Prisma.TaskIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TaskUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
    create: Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>;
};
export type TaskDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where: Prisma.TaskWhereUniqueInput;
};
export type TaskDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
    limit?: number;
};
export type TaskDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TaskSelect<ExtArgs> | null;
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    include?: Prisma.TaskInclude<ExtArgs> | null;
};
