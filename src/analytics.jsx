import React, {Component} from "react";
import { LinearProgress } from 'material-ui/Progress';
import Paper from 'material-ui/Paper';
import ThumbUpIcon from 'material-ui-icons/ThumbUp';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import { withTheme } from 'material-ui/styles';
import {Pie} from 'react-chartjs-2';
import { RingLoader } from 'react-spinners';
import _ from 'lodash';

class Analytics extends Component{
    render(){
        const {theme} = this.props;
        const styles = {
            linearProgressSummary: {
                width: 164,
                height: 15,
            },
            linearProgressArticle: {
                width: 164,
                height: 15,
                marginTop: 4,
            },
            summary: {
                // backgroundColor: theme.palette.secondary.main,
                width: 186,
                paddingLeft: 10,
                paddingRight: 10,
            },
            thumbIcon: {
                fontSize: 100,
                marginLeft: 30,
            },
            pieChart: {
                marginLeft: -75,
            },
            articleImage: {
                height: 90,
            },
            articleListTitle: {
                fontWeight: 'bold',
                fontSize: 20,
                marginBottom: 5,
            },
            wordCloud: {
                height: 180,
                marginLeft: 20,
            },
            metricsPane: {
                height: 220,
                width: 480,
            },
            // loader: {
            //     height: 100,
            //     width: 100,
            // }
        }

        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };
        const options = {
            title: {
                display: true,
                text: 'Fake News Statistics'
            },
            legend: {
                position:'bottom',
                fullWidth: false,
            },
        };
      
                  
        return (
            !this.props.loaded? 
            <center style = {{marginTop: 30}}> 
                <RingLoader color = {'green'} size = {200}/>
                <p style = {{fontSize: 30}}> Analyzing... </p>    
            </center>: 
            <div className = "row" style = {{marginTop: 20}}>
                <div className = "col-md-3">
                    <div style = {styles.summary}>
                        <ThumbDownIcon fontSize = {true} style = {styles.thumbIcon}/>
                        <LinearProgress variant = "determinate" value = {5} style = {styles.linearProgressSummary}/>
                        <p style = {{marginBottom: 0}}> <small> 54% fake </small> </p>
                        <p> Query Time: 2.04sec </p>
                    </div>
                    <div style = {styles.pieChart}>
                        <Pie data = {data} options = {options} height = {200}/>    
                    </div>
                </div>
                <div className = "col-md-4" style = {{height: 400, overflow: 'auto'}}>
                    <p style = {styles.articleListTitle}> Relevant Articles </p>
                    {_.map(_.range(1, 11), (num, index) => {
                        return (
                            <div className = "row" key = {index}>
                                <div className = "col-md-4">
                                    <img src = "/images/wsj.jpg" style = {styles.articleImage}/>
                                </div>
                                <div className = "col-md-8">
                                    <p> The Russian Intervention </p>
                                    <LinearProgress variant = "determinate" value = {5} style = {styles.linearProgressArticle}/>
                                    <p><small> 33% relevant </small> </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className = "col-md-5">
                    <img src = "/images/word-cloud.png" style = {styles.wordCloud}/>
                    <img src = "/images/metricsPane.png" style = {styles.metricsPane}/>
                </div>
            </div>
        )
    }
}

export default withTheme()(Analytics);

