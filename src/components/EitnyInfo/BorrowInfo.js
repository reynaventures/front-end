import React from 'react';
import styled from 'styled-components';

const StyledBorrowInfo = styled.div `
margin-bottom: 20px;
    .first-line--borrow {
        position: relative;
        height: 2px;
        background-color: rgb(233, 61, 68);
        width: 100%;
        height: 1px;
        margin-left: 15px;
    }
    .borrow-tag:before {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        top: 50%;
        left: -20px;
        background-color: rgb(233, 61, 68);
        transform: translateY(-50%);
        border-radius: 50%;
    }
`

function BorrowInfo() {
    return (
        <StyledBorrowInfo>
            <li className='marketitem__card'>
                <div className="marketitem__card-titles">
                    <h5 className="marketitem__title-card">Borrow info</h5>
                    <p className="marketitem__tag borrow-tag">Borrow APY</p>
                </div>
                <div className="marketitem__card-info-list">
                    <div className="marketitem__card-info">
                        <p>Total borrow</p>
                        <h4>$6.52</h4>
                    </div>
                    <div className="marketitem__card-info">
                        <p>APY</p>
                        <h4>0%</h4>
                    </div>
                    <div className="marketitem__card-info">
                        <p>Distribution APY</p>
                        <h4>0%</h4>
                    </div>
                </div>
                <div className="marketitem__grafic">
                    <ul className="marketitem__grafic-procents">
                        <li className="marketitem__grafic-procent">5% <div className="marketitem__line"></div></li>
                        <li className="marketitem__grafic-procent">4% <div className="marketitem__line"></div></li>
                        <li className="marketitem__grafic-procent">3% <div className="marketitem__line"></div></li>
                        <li className="marketitem__grafic-procent">2% <div className="marketitem__line"></div></li>
                        <li className="marketitem__grafic-procent">1% <div className="marketitem__line"></div></li>
                        <li className="marketitem__grafic-procent">0%
                            <div className="first-line--borrow">
                                <ul className="marketitem__time">
                                    <li className="marketitem__time-number">10.16</li>
                                    <li className="marketitem__time-number">10.20</li>
                                    <li className="marketitem__time-number">10.24</li>
                                    <li className="marketitem__time-number">10.28</li>
                                    <li className="marketitem__time-number">11.01</li>
                                    <li className="marketitem__time-number">11.05</li>
                                    <li className="marketitem__time-number">11.09</li>
                                    <li className="marketitem__time-number">11.13</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>
        </StyledBorrowInfo>
    )
}

export default BorrowInfo