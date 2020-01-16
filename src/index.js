// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import './index.css';
// // import App from './App';
// // import Customredux from './Customredux';
// // import * as serviceWorker from './serviceWorker';

// // ReactDOM.render(<Customredux />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// // serviceWorker.unregister();


// // const endpoint = "http://localhost:4000";

// // const query = `
// //     query{
// //         totalDays
// //     }
// // `;

// // const opts = {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json"},
// //     body: JSON.stringify({query})
// // }

// // fetch(endpoint,opts).then(res=>res.json()).then(({data})=>`totalDays: ${data.totalDays}`).then(console.log).catch(console.error);

// /* not success */
// import {request} from "graphql-request";

// const endpoint = "http://localhost:4000";

// const query = `query {totalDays}`;

// console.log("sending the query")

// request(endpoint, query)
//     .then(({totalDays}) =>`totalDays: ${totalDays}`)
//     .then(console.log)
//     .catch(console.error);

// import ApolloClient, {gql} from 'apollo-boost'

// const uri = "http://localhost:4000";
// const client = new ApolloClient({uri})
// const query =gql`query{totalDays}`;

// console.log("Sending the query");

// client.query({query}).then(({data}) =>`totalDays:${data.totalDays}`).then(console.log).then(console.error);


// import  React from "react";
// import { render } from "react-dom";
// import  ApolloClient, {gql} from "apollo-boost";
// import {ApolloProvider, Query} from "react-apollo";

// const uri = "http://localhost:4000";

// const client = new ApolloClient({uri});

// const COUNT_DAY_QUERY = gql`query countDays{totalDays}`;
//   // <h1> Hello World</h1>, document.getElementById("root")
//     // <ApolloClient client={client}></ApolloClient>
//     // <ApolloClient client={client}> <h1> Hello World</h1></ApolloClient>,
// render(
//     <ApolloProvider client={client}> 
//         <Query query = {COUNT_DAY_QUERY}>
//             {({loading}) => {
//                 if(loading) return <p> loading...</p>
//                 return <p> ready</p>
//             }}
//         </Query>
//     </ApolloProvider>,
//     document.getElementById("root")
// );


import  React from "react";
import { render } from "react-dom";
import  ApolloClient, {gql} from "apollo-boost";
import {ApolloProvider, Query} from "react-apollo";
import Customquery from "./Customquery";

const client = new ApolloClient({uri: "http://localhost:4000"});

const COUNT_DAY_QUERY = gql`query countDays{totalDays}`;
render(
    <ApolloProvider client={client}> 
        <Customquery/>
    </ApolloProvider>,
    document.getElementById("root")
);
