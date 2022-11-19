import React, { useState } from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import WalletConnect from '../components/WalletConnect';
import { useSelector } from 'react-redux';
import { walletName } from '../store/selectors/userSelectors';
import MetamaskWallet from '../components/MetamaskWallet';
import SupplyInfo from '../components/EitnyInfo/SupplyInfo';
import BorrowInfo from '../components/EitnyInfo/BorrowInfo';
import ItemMarketInfo from '../components/ItemMarketInfo';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constans/routes';

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
        padding-bottom: 45px;
        width: 100%;
    }
    .marketitem__card + .marketitem__card {
        margin-top: 25px;
    }
    .main {
        margin: 20px 0;
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 25px;
    }
    .marketitem__card-titles {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    .marketitem__tag {
        position: relative;
    }
    @media only screen and (max-width: 1050px) {
        .main {
        grid-template-columns: 1fr;
    }
    }
    .marketitem__title-card {
        font-size: 20px;
        margin-bottom: 15px;
    }
    .marketitem__card-info-list {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-bottom: 40px;
    }
    .marketitem__card-info + .marketitem__card-info {
        margin-left: 20px;
        border-left: 1px solid rgb(149, 151, 161);
        padding: 0 25px;
    }
    .marketitem__card-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        p {
            color: rgb(149, 151, 161);
            margin-bottom: 3px;
            font-size: 13px;
        }
        h4 {
            font-size: 20px;
        }
    }
    .marketitem__grafic {
        padding: 0 25px;
        position: relative;
        font-size: 12px;
    }
    .marketitem__time {
        position: absolute;
        display: flex;
        justify-content: space-between;
        width: 100%;
        bottom: -25px;
        left: 0;
        font-size: 12px;
    }
    .marketitem__grafic-procent + .marketitem__grafic-procent {
        margin-top: 25px;
    }
    .marketitem__grafic-procent {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .marketitem__line {
        width: 100%;
        height: 1px;
        background-color:  rgba(149, 151, 161, 0.589);
        margin-left: 15px;
    }

`

function MarketItem() {

    const [handleLogout, setHandleLogout] = useState(false);
    const wallet = useSelector(walletName);
    const navigate = useNavigate();

    return (
        <StyledMarketItem>
            <div className="container">
                <div className='marketitem__connect'>
                    <div className="marketitem__back">
                        <MdKeyboardArrowLeft className='marketitem__arrow-back' onClick={() => navigate(PATH.markets)}/>
                        <img src="#" alt="" className="marketitem__icon" />
                        <h3 className="marketitem__name">Eitny</h3>
                    </div>
                    <WalletConnect setHandleLogout={setHandleLogout}/>
                </div>
                <main className="main">
                    <ul className="marketitem__card-list">
                        <SupplyInfo/>
                        <BorrowInfo/>
                    </ul>
                    <ItemMarketInfo 
                        name={'vXVS'} 
                        price={'$3.97'} 
                        liquidity={'$3,333,519.05'} 
                        suppliers={'11592'} 
                        borowers={'75'} 
                        borrowCap={'0 XVS'} 
                        dailySuppling={'$0.00'} 
                        dailyBorrowing={'$0.00'} 
                        dailyXVS={'0'} 
                        reverses={'0.00000086 XVS'} 
                        reverseFactor={'25%'} 
                        collaterakFactor={'60%'} 
                        minted={'41,757,313.2772346'} 
                        rate={'1 XVS=49.723741 vXVS'}/>
                </main>
                {(wallet && handleLogout) && <MetamaskWallet setHandleLogout={setHandleLogout}/>}
            </div>
        </StyledMarketItem>
    )
}

export default MarketItem