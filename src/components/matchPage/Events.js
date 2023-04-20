import React, { Component } from 'react'
import ball from '../../icons/ball.png'
import exchange from '../../icons/exchange.png'
export default class Events extends Component {
    constructor(props) {
        super(props)

    }
    getElement(event) {
        console.log(event.type);
        switch (event.type) {
            case "Goal":
                return (
                    <div className='eElement'>
                        <div className='team1'>

                            {event.isHome ?
                                <div className='playerBlock'>
                                    <span className='playerGoal'>{event.player}</span>
                                    <span className='assistGoal'>{event.playerAssist}</span>
                                </div> : null}
                            {event.isHome ? <img src={ball} className='icon'></img> : null}
                        </div>
                        <div className='timeBlock'>
                            <div className='time'>
                                {event.time}
                            </div>

                        </div>
                        <div className='team2'>
                            {!event.isHome ? <img src={ball} className='icon'></img> : null}
                            {!event.isHome ?
                                <div className='playerBlock'>
                                    <span className='playerGoal'>{event.player}</span>
                                    <span className='assistGoal'>{event.playerAssist}</span>
                                </div> : null}

                        </div>
                    </div>
                );
                break;
            case "Substitution":
                return (
                    <div className='eElement'>
                        <div className='team1'>

                            {event.isHome ?
                                <div className='playerBlock'>
                                    <span className='playerIn'>{event.player}</span>
                                    <span className='playerOut'>{event.playerSwap}</span>
                                </div> : null}
                            {event.isHome ? <img src={exchange} className='icon'></img> : null}
                        </div>
                        <div className='timeBlock'>
                            <div className='time'>
                                {event.time}
                            </div>

                        </div>
                        <div className='team2'>
                            {!event.isHome ? <img src={exchange} className='icon'></img> : null}
                            {!event.isHome ?
                                <div className='playerBlock'>
                                    <span className='playerIn'>{event.player}</span>
                                    <span className='playerOut'>{event.playerSwap}</span>
                                </div> : null}

                        </div>
                    </div>
                );
                break;
            case "Card":
                return (
                    <div className='eElement'>
                        <div className='team1'>
                            {event.isHome ? <span className='player'>{event.player}</span> : null}

                            {event.isHome ? (
                                event.card == "Yellow" ? (
                                    <div className='yellowCard'></div>
                                )
                                    :
                                    <div className='redCard'></div>
                            ) : null}
                        </div>
                        <div className='timeBlock'>
                            <div className='time'>
                                {event.time}
                            </div>

                        </div>
                        <div className='team2'>
                            {!event.isHome ? (
                                event.card == "Yellow" ? (
                                    <div className='yellowCard'></div>
                                )
                                    :
                                    <div className='redCard'></div>
                            ) : null}
                            {!event.isHome ? <span className='player'>{event.player}</span> : null}



                        </div>
                    </div>
                );
                break;
        }
    }
    render() {
        return (
            <div className='events border-radius'>
                <h2>Events</h2>
                {this.props.match.events.map(s =>
                    this.getElement(s)
                )}

            </div>
        )
    }
}
