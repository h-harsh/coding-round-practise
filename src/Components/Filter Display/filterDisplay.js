import { useFilter } from './filterContext';
import './filterDisplay.css'

export const FilterDisplay = () => {
  const {state, dispatch} = useFilter()

  return (
    <div className="cont-filters" >
      <legend className="cont-sub-filters">
        sortBy: price
        <label>
          <input type="radio" name="price" checked={state.price === 'HIGH_TO_LOW'? true: false} onChange={() => dispatch({type:'PRICE', payload:'HIGH_TO_LOW'})} />
          High-to-Low
        </label>
        <label>
          <input type="radio" name="price" checked={state.price === 'LOW_TO_HIGH'? true: false} onChange={() => dispatch({type:'PRICE', payload:'LOW_TO_HIGH'})} />
          Low-to-High
        </label>
      </legend>
      <div className="cont-sub-filters">
        <h3>Filters</h3>
      <legend className="cont-sub-filters">
         Size
        <label>
          <input type="radio" checked={state.size === 'S' ? true : false } name="size" onChange={() => dispatch({type:'SIZE', payload:'S'})} />
          S
        </label>
        <label>
          <input type="radio" checked={state.size === 'M' ? true : false } name="size" onChange={() => dispatch({type:'SIZE', payload:'M'})} />
          M
        </label>
        <label>
          <input type="radio" checked={state.size === 'L' ? true : false } name="size" onChange={() => dispatch({type:'SIZE', payload:'L'})} />
          L
        </label>
        <label>
          <input type="radio" checked={state.size === 'XL' ? true : false } name="size" onChange={() => dispatch({type:'SIZE', payload:'XL'})} />
          XL
        </label>
      </legend>
      <legend className="cont-sub-filters">
         Ideal For
        <label>
          <input type="radio" name="gender" checked={state.idealFor === 'men' ? true : false } onChange={() => dispatch({type:'IDEAL_FOR', payload:'men'})}  /  >
          Men
        </label>
        <label>
          <input type="radio" name="gender" checked={state.idealFor === 'women' ? true : false } onChange={() => dispatch({type:'IDEAL_FOR', payload:'women'})}  /  >
          Women
        </label>
      </legend>
      <legend className="cont-sub-filters">
         Brand
        <label>
          <input type="radio" name="brand" checked={state.brand === 'Louis phillipe' ? true : false } onChange={() => dispatch({type:'BRAND', payload:'Louis phillipe'})} />
          Louis phillipe
        </label>
        <label>
          <input type="radio" name="brand" checked={state.brand === 'Manish malhotra' ? true : false } onChange={() => dispatch({type:'BRAND', payload:'Manish malhotra'})} />
          Manish malhotra
        </label>
        <label>
          <input type="radio" name="brand" checked={state.brand === 'US Polo' ? true : false } onChange={() => dispatch({type:'BRAND', payload:"US Polo"})} />
          US Polo
        </label>
        <label>
          <input type="radio" name="brand" checked={state.brand === 'Maniac' ? true : false } onChange={() => dispatch({type:'BRAND', payload:"Maniac"})} />
          Maniac
        </label>
        <label>
          <input type="radio" name="brand" checked={state.brand === 'Seven' ? true : false } onChange={() => dispatch({type:'BRAND', payload:"Seven"})} />
          Seven
        </label>
      </legend>
      </div>
      <button onClick={() => dispatch({type:'CLEAR_ALL'}) } className="nm-btn2">Clear All</button>
    </div>
  );
};
