import { FastifyReply, FastifyRequest } from "fastify";
interface reqtype extends FastifyRequest {
    id: string;
}
export declare const setcontext: (req: reqtype, resp: FastifyReply) => {
    id: any;
    isAuth: boolean;
};
export {};
//# sourceMappingURL=context.d.ts.map