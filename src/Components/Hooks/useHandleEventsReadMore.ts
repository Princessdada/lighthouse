import React from 'react'
import { useNavigate } from 'react-router-dom';

const useHandleEventsReadMore = () => {
    const navigate = useNavigate();

    const eventHandleReadMore = () => {
      navigate("/eventreadmore");
    };
  
    return eventHandleReadMore; }

export default useHandleEventsReadMore