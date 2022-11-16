import React from 'react'
import styled from 'styled-components'
import { AiFillCopy } from 'react-icons/ai';

const StyledMetaMaskWallet = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .wallet {
        color: #fff;
        border-bottom: 1px solid rgb(56, 57, 68);
        position: sticky;
        top: 0px;
        background-color: rgb(40, 41, 49);
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .wallet__title {
        text-align: center;
        padding: 10px 0;
        border-bottom: 1px solid rgb(56, 57, 68);
        margin-bottom: 20px;
        width: 100%;
    }
    .wallet__info {
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .wallet__wrap {
        padding: 20px 25px;
    }
    .wallet__btn {
        width: 100%;
        font-size: 15px;
        background-color: transparent;
        margin-top: 20px;
        &:hover {
            background-color: rgb(58, 120, 255);
        }
    }
`

function MetamaskWallet({ setHandleLogout }) {
    return (
        <StyledMetaMaskWallet onClick={() => setHandleLogout(false)}>
            <div className="wallet" onClick={e => e.stopPropagation()}>
                <h3 className="wallet__title">Your wallet</h3>
                <div className="wallet__wrap">
                    <div className="wallet__info">
                    <img src="#" alt="" className="wallet__img" />
                    <div className="wallet__metamask-main">
                        <p className="wallet__name">MetaMask</p>
                        <p className="wallet__num"> <AiFillCopy/></p>
                    </div>
                    </div>
                    <button className='wallet__btn btn' type='button'>Log out</button>
                </div>
            </div>
        </StyledMetaMaskWallet>
    )
}

export default MetamaskWallet