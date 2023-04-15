import React, { Component } from 'react'

export default class Goals extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if(this.props.left){
            return (

                (this.props.match.isStarted && this.props.match.goals.length != 0 ? (
                    <div className='goals'>
                        {this.props.match.goals.filter(c => c.isHome == true).map(s =>
                            <p>{s.player} {s.time}'</p>
                        )}
    
    
                    </div>
                )
                    :
                    null
                )
    
    
            )
        }
        else{
            return (

                (this.props.match.isStarted && this.props.match.goals.length != 0 ? (
                    <div className='goals right'>
                        {this.props.match.goals.filter(c => c.isHome == false).map(s =>
                            <p>{s.time}' {s.player}</p>
                        )}
    
    
                    </div>
                )
                    :
                    null
                )
    
    
            )
        }
    }
}
