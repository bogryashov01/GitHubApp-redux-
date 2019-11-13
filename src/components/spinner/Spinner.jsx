import React from 'react';
import { css } from '@emotion/core';
// First way to import
// Another way to import. This is recommended to reduce bundle size
import ClipLoader from 'react-spinners/BarLoader';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
const AwesomeComponent=(props) =>{
  const {loading}=props; 
    return (
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color={'green'}
          loading={loading}
        />
      </div> 
    )
}
export default AwesomeComponent;