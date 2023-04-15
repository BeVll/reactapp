

import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import withRouter from '../withRouter';
import { wait } from '@testing-library/user-event/dist/utils';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            match2: [],
            loading: true
        }

    }
    componentDidMount() {
        this.matches();


    }


    async matches() {

        while (true) {
            var dt;
            console.log(this.props.params.date);
            if (this.props.params?.date == null) {
                var t = new Date(Date.now());
                console.log(t);
                dt = t.getFullYear().toString();
                dt += '0' + (t.getMonth()+1).toString().slice(-2);
                dt += t.getDate().toString();
                console.log(dt);
            }
            else {
                dt = this.props.params.date;
            }
            console.log("fdfs" + dt);
            const response = await fetch('/matches?date='+dt);
            const data = await response.json();
            console.log(data);
            this.setState({ match2: data, loading: false });

            await this.sleep(15000);
        }


    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    getTime(datetime){
        var dt = new Date(datetime);

        return (("0" + dt.getHours()).slice(-2) + ":" + ("0" + dt.getMinutes()).slice(-2));
    }
    render() {
        return (
            <div className='homePage'>
                <div className='sidebarMatch'></div>
                {this.state.loading ? (
                    <div className="loader-container">
                        <div className="spinner"></div>
                    </div>
                )
                    :
                    (
                        <div className='content'>
                            <div className='matchesBlock'>
                                {this.state.match2.map((y) => {
                                    return (
                                        <div className='league'>
                                            <div className='leagueHeader'>
                                                <img className='logoLeague' src={y.leagueLogo}></img>
                                                <span className='leagueName'>{y.leagueName}</span>
                                            </div>
                                            {y.matches.map((match) => {
                                                return (<a href={"/match/" + match.id} className='matchLine'>
                                                   
                                                        {match.isStarted && !match.isFinished ? (
                                                            <div className='statusLeft'>
                                                                {match.liveTime.replace('’', '')}
                                                            </div>
                                                        ) : null}
                                                        {match.isFinished && match.isStarted ? (
                                                            <div className='statusLeft finished'>
                                                                {match.liveTime}
                                                            </div>
                                                        ) : null}
                                                     
                                                        {!match.isStarted ? (
                                                                <div></div>
                                                            ) : null}
                                                    <div className='team1'>
                                                        <span className='teamName'>
                                                            {match.homeTeam.name}
                                                        </span>
                                                        <img className='logoTeam' src={match.homeTeam.imageUrl}></img>
                                                    </div>
                                                    <div className='goals'>
                                                            {match.isStarted ? <span>{match.homeScore} - {match.awayScore}</span> : <span>{this.getTime(match.utcTime)}</span>}
                                                    
                                                    </div>
                                                    <div className='team2'>
                                                        <img className='logoTeam' src={match.awayTeam.imageUrl}></img>
                                                        <span className='teamName'>
                                                            {match.awayTeam.name}
                                                        </span>
                                                    </div>
                                                    <div className='statusRight'>
                                                  
                                                    </div>
                                                </a>)
                                            })}
                                        </div>
                                    )

                                })}


                            </div>
                        </div>
                    )
                }

            </div>
        )
    }
}

export default withRouter(HomePage);