import React, { Component } from 'react';

interface Props {
    value: string;
    delete: React.MouseEventHandler;
    onNameChange: React.ChangeEventHandler;
}

class FilmItem extends Component<Props> {
    shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
        return !(this.props.value === nextProps.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.props.onNameChange}/>
                <button onClick={this.props.delete}>X</button>
            </div>
        );
    }
}

export default FilmItem;