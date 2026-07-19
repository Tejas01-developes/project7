interface addusertype {
    name: string;
    email: string;
    age: string;
}
export declare const resolver: {
    Mutation: {
        adduser: (_parent: any, args: addusertype, _ctx: any) => Promise<{
            success: boolean;
            message: string;
        }>;
    };
};
export {};
//# sourceMappingURL=resolver.d.ts.map