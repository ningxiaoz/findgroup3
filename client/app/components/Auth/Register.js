import React from 'react'
import {Button, Form, Grid, Image, Segment} from 'semantic-ui-react'

//style
const divStyle = {
  margin: '20px',
}

class SignUpPage extends React.Component{
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      name:'',
      email:'',
      password:''
    };
  }

  //onchage of Name
  handleNameChange(e){
    this.setState({name:e.target.value})
  }
  //onChange of email
  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  //onchange of Password
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }

  render(){
    return(
      <div style={divStyle}>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column  style={{ maxWidth: 450 }}>
            <Image src='./logo2.jpg' size='small' verticalAlign='middle'/>
            <Form  size='large'>
              <Segment textAlign='left' stacked>
                <Form.Field>
                  <Form.Input icon='user'
                              iconPosition='left'
                              label='Email address'
                              placeholder='Email address'
                              type='email'
                              onChange={this.handleEmailChange}
                  />
                  <Form.Input
                    fluid icon='lock'
                    iconPosition='left'
                    label='Password'
                    placeholder='Password'
                    type='password'
                    onChange={this.handlePasswordChange}
                  />
                </Form.Field>
                <Form.Group widths='equal'>
                  <Form.Input type='name' label='First name' placeholder='First name'onChange={this.handleNameChange}/>
                  <Form.Input label='Last name' placeholder='Last name'  />
                </Form.Group>
                <Form.Field>
                  <Form.Input label='Address' placeholder='Address' />
                  <Form.Input icon='mobile alternate' iconPosition='left' label='Phone' placeholder='Phone' />
                </Form.Field>
                <Form.Checkbox label='I agree to the Terms and Conditions' />
                <Button primary>SignUp</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>

    );
  }
}


export default SignUpPage;
