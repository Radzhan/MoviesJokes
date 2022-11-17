import React, { Component } from 'react';

interface Props {
    value: string;
    delete: React.MouseEventHandler;
}

class FilmItem extends Component<Props> {
    render() {
        return (
            <div>
                <input type="text" value={this.props.value}/>
                <button onClick={this.props.delete}>X</button>
            </div>
        );
    }
}

export default FilmItem;