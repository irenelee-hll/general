import  React, {Fragment} from "react";
import  {gql} from "apollo-boost";
import { Query, Mutation} from "react-apollo";

const COUNT_DAY_QUERY = gql`
    query countDays{
        totalDays
    }
`;

const ADD_DAY_MUTATION = gql`
    mutation add {
        addDay
    }
`
const REMOVE_DAY_MUTATION = gql`
    mutation remove {
        removeDay
    }
`;

const updateLocalCount = (cache, {data}) => {
    const totalDays = data.addDay || data.removeDay;
    cache.writeQuery({
        query: COUNT_DAY_QUERY,
        data: {totalDays}
    })
}
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
    <Mutation mutation={ADD_DAY_MUTATION}
        update={updateLocalCount}
    >
        {addDay => <button onClick={addDay}>+</button>}
    </Mutation>
    <Mutation mutation={REMOVE_DAY_MUTATION}
        update={updateLocalCount}
    >
        {removeDay => <button onClick={removeDay}>-</button>}
    </Mutation>
    
    </Fragment>
);

export default Customquery;