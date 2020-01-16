import React, { Component } from 'react'
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
    uri: "http://localhost:4000/"
});
client.query({
    query: gql`
        {
            query {
                totalDays
            }
        }`

   }).then(result=>console.log(result));
class Customredux extends Component{
    render(){
        return(
            <div>Hello World!</div>
        )
    }
}

export default Customredux;