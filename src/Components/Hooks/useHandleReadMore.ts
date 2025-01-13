// hooks/useHandleReadMore.ts
import { useNavigate } from "react-router-dom";

export const useHandleReadMore = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/readmore");
  };

  return handleReadMore; 
};
