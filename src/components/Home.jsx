import React, { useState } from 'react';
import Hero from './Hero';
import { useLoaderData } from 'react-router';
import Coffees from './Coffees';

const Home = () => {
    const initialCoffees= useLoaderData();
    const[coffees,setCoffees]=useState(initialCoffees)
    console.log(coffees)
        return (
        <div>
           <Hero></Hero>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            {
                coffees.map(coffee=> <Coffees  key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></Coffees> )
            }
          </div>

        </div>
    );
};

export default Home;