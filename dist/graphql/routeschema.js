"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeschema = void 0;
exports.routeschema = `
type resptype{
    success:Boolean
    message:String
}

type Mutation{
adduser(name:String,email:String,age:String):resptype
}


type Query{
    _empty:String
}
`;
//# sourceMappingURL=routeschema.js.map