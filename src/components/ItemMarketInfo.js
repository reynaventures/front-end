import React from 'react';
import styled from 'styled-components';

const StyledItemMarketInfo = styled.div `
    .marketitem__main-info {
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        background-image: none;
        background-color: rgb(40, 41, 49);
        border-radius: 24px;
        padding: 24px;
        color: #fff;
        align-self: flex-start;
    }
    .marketitem__market-title {
        font-size: 20px;
        margin-bottom: 25px;
    }
    .marketitem__market-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        border-bottom: 1px solid rgb(149, 151, 161);
        padding-bottom: 12px;
        font-size: 15px;
        p {
            color: rgb(149, 151, 161);
            margin-right: 5px;
        }
        &:last-child {
            border-bottom: none;
        }
    }
`

function ItemMarketInfo({ name, price, liquidity, suppliers, borowers, borrowCap, dailySuppling, dailyBorrowing, dailyXVS, reverses, reverseFactor, collaterakFactor, minted, rate  }) {
    return (
        <StyledItemMarketInfo>
            <div className="marketitem__main-info">
                <h3 className="marketitem__market-title">Market info</h3>
                <ul className="marketitem__market-list">
                    <li className="marketitem__market-item">
                        <p>Price</p>
                        <h4>{price}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p>Market liquidity</p>
                        <h4>{liquidity}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p># of suppliers</p>
                        <h4>{suppliers}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p># of borrowers</p>
                        <h4>{borowers}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p>Borrow cap</p>
                        <h4>{borrowCap}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p>Daily supplying interests</p>
                        <h4>{dailySuppling}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p>Daily borrowing interests</p>
                        <h4>{dailyBorrowing}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p>Daily XVS distributed</p>
                        <h4>{dailyXVS}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p>Reserves</p>
                        <h4>{reverses}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p>Reserve factor</p>
                        <h4>{reverseFactor}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p>Collateral factor</p>
                        <h4>{collaterakFactor}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p>{name} minted</p>
                        <h4>{minted}</h4>
                    </li>
                    <li className="marketitem__market-item">
                        <p>Exchange rate</p>
                        <h4>{rate}</h4>
                    </li>
                </ul>
            </div>
        </StyledItemMarketInfo>
    )
}

export default ItemMarketInfo;