import mongoose from "mongoose";
export declare const tokencollection: mongoose.Model<{
    userid: string;
    token_id: string;
    token: string;
    added_at: NativeDate;
    expired_at?: NativeDate | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userid: string;
    token_id: string;
    token: string;
    added_at: NativeDate;
    expired_at?: NativeDate | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userid: string;
    token_id: string;
    token: string;
    added_at: NativeDate;
    expired_at?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userid: string;
    token_id: string;
    token: string;
    added_at: NativeDate;
    expired_at?: NativeDate | null;
}, mongoose.Document<unknown, {}, {
    userid: string;
    token_id: string;
    token: string;
    added_at: NativeDate;
    expired_at?: NativeDate | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userid: string;
    token_id: string;
    token: string;
    added_at: NativeDate;
    expired_at?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    userid: string;
    token_id: string;
    token: string;
    added_at: NativeDate;
    expired_at?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userid: string;
    token_id: string;
    token: string;
    added_at: NativeDate;
    expired_at?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=tokenschema.d.ts.map