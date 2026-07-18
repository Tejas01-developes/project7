import { gql } from "@apollo/client";

export const addfriend=gql`
mutation adduser($name:String,$email:String,$age:Int){
    adduser(name:$name,email:$email,age:$age){
        success
        message
    }
}
`