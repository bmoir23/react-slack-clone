import React from 'react';
import UserPanel from './UserPanel';
import { Menu } from 'semantic-ui-react';


class SidePanel extends React.Component {
    render() {

        const { currentUser } = this.props; 

        return (
            <Menu
            size="large"
            inverted
            fixed="left"
            vertical
            style={{ background: '#4c3c4c', fontsize: '1.25rem' }}>
            <UserPanel currentUser={currentUser}/>
            </Menu>
        )
        
    }
}

export default SidePanel; 