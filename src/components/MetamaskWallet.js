import React from 'react'
import styled from 'styled-components'
import { AiFillCopy } from 'react-icons/ai';
import MetaMaskFox from '../assets/imgs/MetaMaskFox.png';
import { useSelector } from 'react-redux';
import { metamaskWalletName } from '../store/selectors/metamaskSelectors';

const StyledMetaMaskWallet = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .wallet {
        color: #fff;
        border-bottom: 1px solid rgb(56, 57, 68);
        position: relative;
        top: 0px;
        background-color: rgb(40, 41, 49);
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 20px;
    }
    .wallet__title {
        text-align: center;
        padding: 30px 0;
        border-bottom: 1px solid rgb(56, 57, 68);
        margin-bottom: 20px;
        width: 100%;
        font-size: 25px;
    }
    .wallet__info {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 60px;
    }
    .wallet__wrap {
        padding: 20px 25px;
    }
    .wallet__btn {
        width: 100%;
        font-size: 15px;
        background-color: transparent;
        margin-top: 20px;
        margin-bottom: 20px;
        &:hover {
            background-color: rgb(58, 120, 255);
        }
    }
    .wallet__img {
        width: 50px;
        height: 50px;
        margin-right: 5px;
    }
    .wallet__name {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: rgb(149, 151, 161);
        margin-bottom: 3px;
    }
    .wallet__num {
        font-size: 15px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wallet__num-copy {
        color: #f0f;
        margin-left: 5px;
        font-size: 17px;
        color: rgb(58, 120, 255);
        width: 24px;
        height: 24px;
        transition: color 0.3s ease 0s;
        cursor: pointer;
        &:hover {
            color: rgb(58, 90, 255);
        }
    }
    .wallet__cross {
        position: absolute;
        top: 20px;
        right: 25px;
        font-size: 30px;
        cursor: pointer;
    }
`

function MetamaskWallet({ setHandleLogout, setDefaultAccount }) {
    const metamaskName = useSelector(metamaskWalletName);
    return (
        <StyledMetaMaskWallet onClick={() => setHandleLogout(false)}>
            <div className="wallet" onClick={e => e.stopPropagation()}>
                <h3 className="wallet__title">Your wallet</h3>
                <span className="wallet__cross" onClick={() => setHandleLogout(false)}>x</span>
                <div className="wallet__wrap">
                    <div className="wallet__info">
                    <img src={MetaMaskFox} alt="" className="wallet__img" />
                    <div className="wallet__metamask-main">
                        <p className="wallet__name">MetaMask</p>
                        <p className="wallet__num">{metamaskName} <AiFillCopy className='wallet__num-copy'/></p>
                    </div>
                    </div>
                    <button className='wallet__btn btn' type='button' onClick={() => setDefaultAccount(null)}>Log out</button>
                </div>
            </div>
        </StyledMetaMaskWallet>
    )
}

export default MetamaskWallet