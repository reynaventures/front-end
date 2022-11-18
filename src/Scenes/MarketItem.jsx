import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import WalletConnect from '../components/WalletConnect';
import { useSelector } from 'react-redux';
import { walletName } from '../store/selectors/userSelectors';
import MetamaskWallet from '../components/MetamaskWallet';

const StyledMarketItem = styled.div `
    margin-top: -70px;
    .marketitem__connect {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .marketitem__back {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .marketitem__name {
        margin-left: 10px;
        font-size: 2.2rem;
        font-weight: 700;
    }
    .marketitem__arrow-back {
        font-size: 1.9rem;
        font-weight: bold;
        margin-right: 5px;
        cursor: pointer;
    }
    .marketitem__card-list {
        width: 100%;
        margin-right: 25px;
    }
    .marketitem__card {
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-image: none;
        background-color: rgb(40, 41, 49);
        border-radius: 24px;
        padding: 24px;
        box-shadow: none;
        color: #fff;
        width: 100%;
    }
    .marketitem__card + .marketitem__card {
        margin-top: 25px;
    }
    .marketitem__main-info {
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-image: none;
        background-color: rgb(40, 41, 49);
        border-radius: 24px;
        padding: 24px;
        color: #fff;
    }
    .main {
        margin: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .marketitem__card-titles {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .marketitem__tag {
        position: relative;
        &:before {
            content: '';
            width: 10px;
            height: 10px;
            position: absolute;
            top: 50%;
            left: -20px;
            background-color: red;
            transform: translateY(-50%);
            border-radius: 50%;
        }
    }
`

function MarketItem() {
    const [handleLogout, setHandleLogout] = useState(false);
    const wallet = useSelector(walletName);
    return (
        <StyledMarketItem>
            <div className="container">
                <div className='marketitem__connect'>
                    <div className="marketitem__back">
                        <MdKeyboardArrowLeft className='marketitem__arrow-back'/>
                        <img src="#" alt="" className="marketitem__icon" />
                        <h3 className="marketitem__name">Eitny</h3>
                    </div>
                    <WalletConnect setHandleLogout={setHandleLogout}/>
                </div>
                <main className="main">
                    <ul className="marketitem__card-list">
                        <li className='marketitem__card'>
                            <div className="marketitem__card-titles">
                                <h5 className="marketitem__title-card">Supply info</h5>
                                <p className="marketitem__tag">Supply APY</p>
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
                        <li className='marketitem__card'>
                            <div className="marketitem__card-titles">
                                <h5 className="marketitem__title-card">Borrow info</h5>
                                <p className="marketitem__tag">Borrow APY</p>
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
                {(wallet && handleLogout) && <MetamaskWallet setHandleLogout={setHandleLogout}/>}
            </div>
        </StyledMarketItem>
    )
}

export default MarketItem