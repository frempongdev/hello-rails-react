import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { getGreetings } from './redux/greetings/greetingSlice';
import { useDispatch } from 'react-redux';


const Greetings = () => {
    const { greetings } = useSelector((store) => store.greetings);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getGreetings())
    },[dispatch]);

  return (
    <div>
        <h1>{greetings}</h1>
    </div>
  )
}

export default Greetings