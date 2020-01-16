import  React, {Fragment} from "react";
import  {gql} from "apollo-boost";
import { Query} from "react-apollo";

const COUNT_DAY_QUERY = gql`query countDays{totalDays}`;

const Customquery =() =>(
    <Fragment>
        <h1> SKi Days</h1>
    <Query query = {COUNT_DAY_QUERY}>
        {({loading,data}) => {
            // if(loading) return <p> loading...</p>
            if(loading) return <p> loading...</p>
            // return <p> ready</p>
            return <p> total days: {data.totalDays}</p>
        }}
    </Query>
    </Fragment>
);

export default Customquery;