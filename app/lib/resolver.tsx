import { gql } from "@apollo/client";

export const addfriend=gql`
mutation addfriends($name:String,$email:String,$age:String){
    adduser(name:$name,email:$email,age:$age){
        success
        message
    }
}
`