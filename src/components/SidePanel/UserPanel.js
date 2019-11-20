import React from 'react';
import firebase from "../../firebase";
import { connect } from 'react-redux';
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';


class UserPanel extends React.Component {
    
    state = {
        user: this.props.currentUser
    }

    componentDidMount() {
        this.setState({ user: this.props.currentUser });
    }

    dropdownOptions = () => [
        {
            key: "user",
            text: (<span>Singed in as <strong>{this.state.user.displayName}</strong>
            </span>),
            disabled: true
        },
        {
            key: "avatar",
            text: <span>Change Avatar</span>
        },
        {
            key: "signout",
            text: <span onClick={this.handleSignOut}>Sign Out</span>
        }

    ];

    handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log("signed out!"));
    }



    render() {

        

        return (
            <Grid style={{ background: '#4c3c4c'}} >
                <Grid.Column>
                    <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
                    
                    <Header inverted floated="left" as="h2">
                        <Icon name="code" />
                        <Header.Content>DevChat</Header.Content>
                    </Header>    
                    </Grid.Row>

                    <Header style={{padding: '0.25em'}} as="h2" inverted>
                        <Dropdown trigger={
                            <span>{this.state.user.displayName}</span>
                        } options={this.dropdownOptions()} />
                    </Header>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser 
})

export default connect(mapStateToProps)(UserPanel);