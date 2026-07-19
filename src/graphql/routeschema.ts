export const routeschema=`
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
`