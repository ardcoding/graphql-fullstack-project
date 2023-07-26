import React from 'react'
import {gql, useQuery} from '@apollo/client'


const getEvents = gql`
query getAllEvents{
    events{
      title,
      desc
    }
  }
`;


const Events = () => {
    const {loading, error, data} = useQuery(getEvents);
    if(loading){
        return
    }
    console.log(data)
    return (
      <div>
        { 
            data.events.map((event, index) => (
                <div>
                    <h1 className='text-xl font-bold'>{event.title}</h1>
                    <p>{event.desc}</p>
                </div>
            ))
        }
      </div>
    )
  
}
export default Events