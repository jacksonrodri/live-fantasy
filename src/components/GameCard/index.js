import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip';

import Replace from '../../icons/Replace'
import Plus from '../../icons/Plus'
import Minus from '../../icons/Minus'
import boltIcon from '../../assets/bolt.png'
import Tick from '../../icons/Tick'
import Cards from '../../icons/Cards/index'
import classes from "./gameCard.module.scss"
import ProgressBar from '../../components/Progress';
import { render } from '@testing-library/react';
import StartButton from '../StartButton';

import { useMediaQuery } from 'react-responsive';


function GameCard(props) {

    const [showPopup, setPopupState] = useState(false)
    const [hasReplaced, setHasReplacedState] = useState(false)

    const {
        isSelected = false,
        showCardPopup = false,
        isCompleted = false,
        image = '',
        text = '',
        styles = {},
        card = {},
        inventory: { replace = 0, powerMatch = 0, increaseOrDecrease = 0 } = {},
        activeCard = {},
        time = 0,
        width = 0,
        height = 0,
        hoverShadow = false,
        currentCard = 0,
        cardIndex = 0,
        start = false,
        onStart = () => {},
        showPowerMatchPower = false,
        showReplacePower = false,
        showIncrementOrDecrementPower = false,
        onClick = () => { },
        onIncrease = () => { },
        onDecrease = () => { },
        onPowerMatch = () => { },
        onReplace = () => { },
        onReplaceAll = () => { },
        myPowers = false,
        showTimer = false,
        gotAceWithPower = false,
        powerHandEnabled = false
    } = props || {}

    useEffect(() => {
        if (time <= 0) {
            setHasReplacedState(false)
            setPopupState(false)
        } else if (!isCompleted && myPowers) {
            setPopupState(true);
        }
    }, [time])

    const isMobile = useMediaQuery({ query: '(max-width: 414px)' });

    const toolTip = (id, tip) => {
        return (
            <ReactTooltip id={id} place="top" textColor="#fff" effect="solid">
                {tip}
            </ReactTooltip>
        );
    }

    const _onReplace = () => { 
        setHasReplacedState(true)
    }

    // Start Button
    const renderStartButton = () => {
        return (
            <>
                <p className={classes.__card_game_Next_card_drawn_in}>Click Start to Begin</p>
                <StartButton onStart={() => onStart()} />
            </>
        );
    };

    return (
        <div className={`${classes.__game_card_wrapper} ${hoverShadow && classes.shadow}`} style={styles} {...props}>
            {
                //if rank === 12 => "A"
                isCompleted &&
                <Tick style={{
                    height: "auto",
                    position: "absolute",
                    alignSelf: "center",
                    transform: `translate(25%, -25%)`
                }}/>
            }
            {
                isSelected
                    ?
                    <div className={classes.__game_card_selected} onClick={() => {
                        if (showCardPopup && myPowers) {
                            setPopupState(!showPopup)
                        }
                        onClick()
                    }} onBlur={() => {
                        setPopupState(false)
                        }}>
                        {
                            image ?
                                <div className={classes.__game_card_selected}>
                                    <img src={image} style={{width: '100%', height: '100%'}}/>
                                </div>
                                :
                                <Cards card={card} width={width || 130} height={height || 195} />
                        }
                    </div>
                    :
                    <div className={classes.__game_card_container}>    
                        {
                            showTimer
                            ?
                                start
                                ?
                                    cardIndex !== currentCard
                                    ?
                                        <div className={classes.__question_mark}>
                                            <span>?</span>                                
                                        </div>
                                    :
                                    <>
                                        <p className={classes.__card_game_Next_card_drawn_in}>Next card drawn in</p>
                                        <ProgressBar
                                            progress={time}
                                            maxProgress={5}
                                            size={isMobile ? 40 : 62}
                                            strokeWidth={isMobile ? 2 : 4}
                                            circleOneStroke='grey'
                                            circleTwoStroke='#fff'
                                        />
                                    </>
                                :
                                cardIndex == 0
                                ?
                                renderStartButton()
                                :
                                <div className={classes.__question_mark}>
                                    <span>?</span>                                
                                </div>
                            :
                            <div className={classes.__question_mark}>
                                <span>?</span>                                
                            </div>
                        }
                    </div>
            }
            {
                showPopup && activeCard === card && time > 0 && !gotAceWithPower &&
                <div className={classes.__game_card_popup_container}
                    style={{ 
                        marginLeft: isMobile && cardIndex == 0 ? 50 : 0,
                        marginRight: isMobile && cardIndex == 4 ? 50 : 0
                    }}
                >
                    <div className={classes.__game_card_popup}>
                        {
                            isCompleted ?
                                <span>No action required</span>
                                :
                                <>
                                    {
                                        showReplacePower || showPowerMatchPower || showIncrementOrDecrementPower
                                            ?
                                            !powerHandEnabled
                                            &&
                                            <>
                                                {toolTip("newCard", "Power Hit")}
                                                {
                                                    showReplacePower && !hasReplaced &&
                                                    <div>
                                                        <button className={classes.__btn__} onClick={() => {
                                                            onReplace()
                                                            _onReplace()
                                                        }}
                                                        data-tip data-for="newCard">
                                                            <Replace style={{height: 'auto'}} size={isMobile ? 29 : 39}/>
                                                        </button>
                                                        {
                                                            isMobile
                                                            &&
                                                            <span className={classes.__game_card_popup_power_label}>Power Hit</span>
                                                        }
                                                    </div>
                                                }    
                                                    {toolTip("powerMatch", "Power Ace")}
                                                {
                                                    showPowerMatchPower &&
                                                    <div>
                                                        <button className={classes.__btn__} onClick={onPowerMatch} data-tip data-for="powerMatch">
                                                            <img src={boltIcon} width={isMobile ? 29 : 39} height={isMobile ? 29 : 39}/>
                                                        </button>
                                                        {
                                                            isMobile
                                                            &&
                                                            <span className={classes.__game_card_popup_power_label}>Power Ace</span>    
                                                        }
                                                    </div>
                                                }

                                                {
                                                    showIncrementOrDecrementPower &&
                                                    <>
                                                        {toolTip("powerUp", "Power Up")}
                                                        <div>
                                                            <button className={classes.__btn__} data-tip data-for="powerUp">
                                                                <Plus style={{height: 'auto'}} size={isMobile ? 29 : 39} onClick={onIncrease}/>
                                                            </button>
                                                            {
                                                                isMobile
                                                                &&
                                                                <span className={classes.__game_card_popup_power_label}>Power Up</span>
                                                            }
                                                        </div>
                                                        {toolTip("powerDown", "Power Down")}
                                                        <div>
                                                            <button className={classes.__btn__} data-tip data-for="powerDown">
                                                                <Minus style={{height: 'auto'}} size={isMobile ? 29 : 39} onClick={onDecrease}/>
                                                            </button>  
                                                            {
                                                                isMobile
                                                                &&
                                                                <span className={classes.__game_card_popup_power_label}>Power Down</span>  
                                                            } 
                                                        </div>                                                   
                                                    </>
                                                }   
                                            </>
                                            :
                                            <span>All your Powers have been used</span>
                                    }
                                </>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

GameCard.propTypes = {
    isSelected: PropTypes.bool,
    showCardPopup: PropTypes.bool,
    isCompleted: PropTypes.bool,
    image: PropTypes.string,
    text: PropTypes.string,
    styles: PropTypes.object,
    onClick: PropTypes.func,
    card: PropTypes.object,
    inventory: PropTypes.object,
    activeCard: PropTypes.object,
    showPowerMatchPower: PropTypes.bool,
    showReplacePower: PropTypes.bool,
    showIncrementOrDecrementPower: PropTypes.bool,
    time: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    hoverShadow: PropTypes.bool,
    onIncrease: PropTypes.func,
    onDecrease: PropTypes.func,
    onPowerMatch: PropTypes.func,
    onReplace: PropTypes.func
}

export default GameCard
