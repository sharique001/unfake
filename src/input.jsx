import React, {Component} from "react";
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

const styles = {
    textField: {
        width: 250
    },
    textArea: {
        width: 600
    },
    paper: {
        paddingBottom: 50
    }
}
export default class Input extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return (
            <Paper style = {styles.paper}>
                <form className = "row mt-4">
                    <div className = "col-md-8">
                        <div className = "row" style= {{marginLeft: 50}}>
                            <TextField
                                label = "Article text"
                                multiline = {true}
                                rows = {10}
                                style = {styles.textArea}
                                value = {this.props.articleText}
                                onChange = {this.props.handleChangeForm('articleText')}
                            />
                        </div>
                    </div>
                    <div className = "col-md-4">
                        <div className = "row">
                            <TextField 
                                label = "Author Name"
                                style = {styles.textField}
                                value = {this.props.authorName}
                                onChange = {this.props.handleChangeForm('authorName')}
                            />
                        </div>
                        <div className = "row">
                            <TextField
                                label = "Author Organization"
                                style = {styles.textField}
                                value = {this.props.authorOrg}
                                onChange = {this.props.handleChangeForm('authorOrg')}
                            />
                        </div>
                        <div className = "row mt-2">
                            <TextField
                                label = "Article URL"
                                style = {styles.textField}
                                value = {this.props.articleURL}
                                onChange = {this.props.handleChangeForm('articleURL')}
                            />
                        </div>
                        <div className = "row" style = {{marginTop: 62,}}>
                            <Button variant = "raised" 
                                    color="primary" 
                                    onClick = {this.props.handleSubmit}
                                    disabled = {!this.props.articleText || !this.props.authorName ||
                                                !this.props.authorOrg || !this.props.articleURL
                                                }
                            >
                                Analyze!
                            </Button>
                        </div>
                    </div>
                    
                </form>
            </Paper>
        )
    }
}