import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const StyledMarketItem = styled.div `
    
`

function MarketItem() {
    return (
        <StyledMarketItem>
            <div className='marketitem__connect'>
                <div className="marketitem__back">
                    <MdKeyboardArrowLeft/>
                    <img src="#" alt="" className="marketitem__icon" />
                    <h3 className="marketitem__name"></h3>
                </div>
                <button className="marketitem__btn btn" type='button'>Connect wallet</button>
            </div>
            <main className="main">
                <ul className="marketitem__card-list">
                    <li className='marketitem__card'>
                        <div className="marketitem__card-titles">
                            <h5 className="marketitem__title-card"></h5>
                            <p className="marketitem__tag"></p>
                        </div>
                        <div className="marketitem__card-info-list">
                            <div className="marketitem__card-info">
                                <p></p>
                                <h4></h4>
                            </div>
                            <div className="marketitem__card-info">
                                <p></p>
                                <h4></h4>
                            </div>
                            <div className="marketitem__card-info">
                                <p></p>
                                <h4></h4>
                            </div>
                        </div>
                        <div className="marketitem__grafic">
                            <ul className="marketitem__grafic-procents">
                                <li className="marketitem__grafic-procent">5%</li>
                                <li className="marketitem__grafic-procent">4%</li>
                                <li className="marketitem__grafic-procent">3%</li>
                                <li className="marketitem__grafic-procent">2%</li>
                                <li className="marketitem__grafic-procent">1%</li>
                                <li className="marketitem__grafic-procent">0%</li>
                            </ul>
                            <div className="marketitem__table">
                                <div className="marketitem__line"></div>
                                <div className="marketitem__line"></div>
                                <div className="marketitem__line"></div>
                                <div className="marketitem__line"></div>
                                <div className="marketitem__line"></div>
                                <div className="marketitem__line">
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
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="marketitem__main-info">
                    <h3 className="marketitem__market-title">Market info</h3>
                    <ul className="marketitem__market-list">
                        <li className="marketitem__market-item">
                            <p>Price</p>
                            <h4>$3.97</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p>Market liquidity</p>
                            <h4>$3,333,519.05</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p># of suppliers</p>
                            <h4>11592</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p># of borrowers</p>
                            <h4>75</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p>Borrow cap</p>
                            <h4>0 XVS</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p>Daily supplying interests</p>
                            <h4>$0.00</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p>Daily borrowing interests</p>
                            <h4>$0.00</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p>Daily XVS distributed</p>
                            <h4>0</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p>Reserves</p>
                            <h4>0.00000086 XVS</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p>Reserve factor</p>
                            <h4>25%</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p>Collateral factor</p>
                            <h4>60%</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p>vXVS minted</p>
                            <h4>41,757,313.2772346</h4>
                        </li>
                        <li className="marketitem__market-item">
                            <p>Exchange rate</p>
                            <h4>1 XVS=49.723741 vXVS</h4>
                        </li>
                    </ul>
                </div>
            </main>
        </StyledMarketItem>
    )
}

export default MarketItem