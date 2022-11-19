import React from 'react';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

const StyledSpinner = styled.div `
    .spinner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .spinner__title {
        margin-left: 36px;
        font-size: 76px;
        font-weight: bold;
        color: #000;
    }
`

function Spinner() {
    return (
        <StyledSpinner>
            <div className='spinner'>
                <ThreeDots 
                    height="200" 
                    width="200" 
                    radius="9"
                    color="#4fa94d" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
                <h2 className="spinner__title">Wait, there's not much left</h2>
            </div>
        </StyledSpinner>
    )
}

export default Spinner;