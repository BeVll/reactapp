import React, { Component } from 'react'

export default class Information extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='information'>
               
                    <div className='infoCol'>
                        <span class="material-symbols-outlined">
                            stadium
                        </span>
                        <span className='text'>
                            {this.props.match.stadium}
                        </span>
                    </div>
                    <div className='infoCol'>
                        <span class="material-symbols-outlined">
                            sports
                        </span>
                        <span className='text'>
                            {this.props.match.referee}
                        </span>
                    </div>
            </div>
        )
    }
}
