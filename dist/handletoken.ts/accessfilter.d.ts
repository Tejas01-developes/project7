import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";
interface reqtype extends FastifyRequest {
    id: string;
}
export declare const accessfilter: (req: reqtype, resp: FastifyReply, next: HookHandlerDoneFunction) => void;
export {};
//# sourceMappingURL=accessfilter.d.ts.map