import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="button" onClick={() => handleStatus()} className="statusBtn">CHECK STATUS </button>
      <span>{status}</span>
    </>
  );
};
export default Categories;
