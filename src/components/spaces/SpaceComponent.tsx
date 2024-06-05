import { Component } from "react";
const image = require("../../assets/generic.jpg");
import "./SpaceComponent.css";


interface SpaceComponentProps {
    spaceId: string
    name: string
    location: string
    photoUrl?: string
    reserveSpace: (spaceId: string) => void
}

export class SpaceComponent extends Component<SpaceComponentProps> {

    private renderImage() {
        if (this.props.photoUrl) {
            return <img src={this.props.photoUrl} alt='space' />
        } else {
            return <img src={image} alt='space' />
        }
    }

    render(){
        return <div className="spaceComponent">
            {this.renderImage()}
            <label className="name">{this.props.name}</label><br/>
            <label className="spaceId">{this.props.spaceId}</label><br/>
            <label className="location">{this.props.location}</label><br/>
            <button 
                onClick={() => this.props.reserveSpace(this.props.spaceId)}>
                    Reserve
            </button>
        </div>
    }
}