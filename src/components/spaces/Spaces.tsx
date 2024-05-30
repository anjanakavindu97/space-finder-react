import { Component } from "react";
import { Space } from "../../models/Model";
import { DataService } from "../../services/DataService";
import { SpaceComponent } from "./SpaceComponent";

interface SpaceState {
    spaces: Space[]
}

interface SpaceProps {
    dataService: DataService
}


export class Spaces extends Component<SpaceProps, SpaceState> {

    constructor(props: SpaceProps) {
        super(props);
        this.state = {
            spaces: []
        }
        this.reserveSpace = this.reserveSpace.bind(this);
    }

    async componentDidMount() {
        const spaces = await this.props.dataService.getSpaces();
        this.setState({
            spaces: spaces
        })
    }

    private async reserveSpace(spaceId: string) {}

    private renderSpaces() {
        const rows: any[] = []
        for (const space of this.state.spaces) {
            rows.push(
                <SpaceComponent
                    location={space.location}
                    name={space.name}
                    spaceId={space.spaceId}
                    reserveSpace={this.reserveSpace}
                />
            )
        }
        return rows;
    }

    render () {
        return (
        <div>
            <h2>Welcome to the Space page!</h2>
            {this.renderSpaces()}
        </div>
        )  
    }
}