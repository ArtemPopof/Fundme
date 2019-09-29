import React, { Component } from 'react'
import { Cell, Div, Button } from '@vkontakte/vkui'
import Icon from './Icon'

export default class PrizeCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={card}>
                <div style={leftPart}>1</div>
                <div style={rightPart}>
                    <Button style={btn}>Участвовать</Button>
                </div>
            </div>
        )
    }
}

const card = {
    display: "flex",
    margin: "16px",
    background: "gray",
    borderRadius: "8px",
    height: "115px",
}

const leftPart = {
    height: "100%",
    background: "green",
    borderRadius: "8px 0px 0px 8px",
    flex: "0 0 128px"
}

const rightPart = {
    height: "100%",
    background: "red",
    flex: "1",
    borderRadius: "0px 8px 8px 0px",
    position: "relative",
    textAlign: "center"
}

const btn = {
    position: "absolute",
    background: "orange",
    margin: "0 -50px",
    width: "100px",
    bottom: "6%"
}
