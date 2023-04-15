import React, { Component } from 'react'
import Goals from './Goals';
import Information from './Information';


export default class MatchHeader extends Component {
    
    constructor(props) {
        super(props);

    }
    PerformLogin = () => {
        const history = this.props.history;
        const username = this.state.username;
        const password = this.state.password;
        // ...
    }
    getTime() {
        if (this.props.match.isStarted && this.props.match.isGoing) {
            return (
                <span className='time going'>
                    {this.props.match.liveTime}
                </span>
            );
        }
        else if (this.props.match.isStarted) {
            return (
                <span className='time'>
                    {this.props.match.liveTime}
                </span>
            );
        }
        else {
            var dt = Date.parse(this.props.match.utcTime);
            var options = {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: false,

            };
            var dtStr = new Intl.DateTimeFormat("en-US", options).format(dt);

            return (
                <span className='time'>
                    {dtStr}
                </span>
            );
        }
    }
    render() {
        return (
            <div className='FullMatchHeader'>
                {/* <div className='menuHeader'>
                   
                </div> */}
                <div className="matchHeader">
                    <div className='team1'>
                        <div className='teamLogoName'>
                            <img src={this.props.match.homeTeam.imageUrl}></img>
                            <span>{this.props.match.homeTeam.name}</span>
                        </div>
                        <Goals match={this.props.match} left={true}></Goals>
                    </div>
                    <div className='statusHeader'>

                        <span className='resLeft res'>{this.props.match.homeScore}</span>
                        <span className='vs'>-</span>
                        <span className='resRight res'>{this.props.match.awayScore}</span>
                    </div>

                    <div className='team2'>
                        <div className='teamLogoName'>
                            <span>{this.props.match.awayTeam.name}</span>
                            <img src={this.props.match.awayTeam.imageUrl}></img>
                        </div>
                        <Goals match={this.props.match} left={false}></Goals>
                    </div>
                    <div className='timeBlock'>
                        {this.getTime()}
                    </div>
                </div>
                <Information match={this.props.match}></Information>
            </div>

        )
    }
}
