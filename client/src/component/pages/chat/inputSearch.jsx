import React from 'react';
import './input.scss'

const Inputsearch = () => {
    return (
       <div class="Card">
  <div class="CardInner">
  <label>Search for your favourite food</label>
  <div class="container">
    <div class="Icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </div>
    <div class="InputContainer">
      <input placeholder="It just can't be pizza..."/>
    </div>
  </div>
 </div>
</div>
    );
};

export default Inputsearch;