import React, { Component } from "react";
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Tabs, { Tab } from 'material-ui/Tabs';

import Input from './input';
import Analytics from './analytics';

class Main extends Component {
  state = {
      value: 0,
      processed: false,
      loaded: false,
      submitted: false,
      articleText: '',
      authorName: '',
      authorOrg: '',
      articleURL: '',
  }
  constructor(props){
      super(props);
      this.handleChangeForm = this.handleChangeForm.bind(this);
  }

  handleChange = (event, value) => {
    this.setState({value});
  }
  handleSubmit = () => {
      this.setState({submitted: true, loaded: false, value: 1})
      window.setTimeout(() => {
          this.setState({loaded: true})
        }, 
        2000
    );
  }

  handleChangeForm = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
        <div className = "container">
{/*           <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
             
          </div> */}
            <AppBar position="fixed" color="primary">
                <Toolbar>
                {/* <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="title" color="inherit" style = {{margin: "auto"}}>
                    Unfake!
                </Typography>
                {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
            <AppBar position = "static" style = {{marginTop: 70, width: 350, 
                textAlign: "center", marginLeft: "auto",
                marginRight: "auto",}}
            >
                <Tabs value={this.state.value} onChange={this.handleChange}>
                    <Tab label="Input" style = {{outline: "none"}}/>
                    <Tab label="Results" style = {{outline: "none"}} disabled = {!this.state.submitted}/>
                </Tabs>
          </AppBar>
          {this.state.value == 0 ? <Input 
                                        handleSubmit = {this.handleSubmit}
                                        handleChangeForm = {this.handleChangeForm}  
                                        articleText = {this.state.articleText}
                                        authorName = {this.state.authorName}
                                        authorOrg = {this.state.authorOrg}
                                        articleURL = {this.state.articleURL}                                      
                                    /> : 
                                    <Analytics 
                                        loaded = {this.state.loaded}
                                        articleText = {this.state.articleText}
                                        authorName = {this.state.authorName}
                                        authorOrg = {this.state.authorOrg}
                                        articleURL = {this.state.articleURL}
                                    />}
                
        </div>
    );
  }
}
 
export default Main;