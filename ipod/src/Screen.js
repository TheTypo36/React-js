import react from "react";
import Button from "./buttons";
import Menu from "./Screen/Menu";
import HumbergerIcon from "./Screen/HumburgerIcon";
import FlowCover from "./Screen/FlowCover";
import Games from "./Screen/Games";
import Setting from "./Screen/Setting";
import Music from "./Screen/Music";
import ZingTouch from 'zingtouch';
import $ from 'jquery';
class Screen extends react.Component {

    constructor() {
        super();
        this.temp_change_in_angle = 0;
        this.temp_selected = 0;
        //state for rendering different views acc. to the option.
        this.state = {

            Option: 0,
            mainList: ['Games', 'Music', 'CoverFlow', 'Setting'],
            Selected: 0

        }
    }
    ComponentDidMount() {
        var zt = new ZingTouch.Region(document.getElementsByClassName("button-container")[0]);
        zt.bind(document.getElementsByClassName('button-container')[0], 'rotate', (event) => {
            if (document.getElementsByClassName('menu')[0].classList.contains('width-50')) {
                let dist = event.detail.distanceFromLast;
                console.log(dist);
                this.temp_change_in_angle += dist;
                if (this.temp_change_in_angle > 60) {
                    this.temp_selected++;
                    this.temp_selected = this.temp_selected % this.state.mainList.length;
                    this.setState({
                        Selected: this.temp_selected,
                    });
                    this.temp_change_in_angle = 0
                } else if (this.temp_change_in_angle < - 60) {
                    this.temp_selected--;
                    if (this.temp_selected === -1) {
                        this.temp_selected = this.state.mainList.length - 1;
                    }
                    this.temp_selected = this.temp_selected % this.state.mainList - 1;
                    this.setState({
                        Selected: this.temp_selected
                    });
                    this.temp_change_in_angle = 0;
                }
            }
        });
    }
    //function to handle click on menu.
    displayMenu = () => {
        let screenClassList = document.getElementsByClassName('menu')[0].classList;

        if (screenClassList.contains('width-50')) {
            $('.menu').removeClass('width-50');
        } else {
            $('.menu').addClass('width-50');
        }
    }

    //function to handle click on flow cover
    displayFlowCover = () => {
        this.setState({
            Option: 2,
        })
    }
    //function to handle click on Game
    displayGame = () => {
        this.setState({
            Option: 3,
        });
    }
    //function to handle click on Setting
    displaySetting = () => {
        this.setState({
            Option: 4,
        });
    }
    // function to handle click on Music
    displayMusic = () => {
        this.setState({
            Option: 5,
        });
    }
    render() {
        //object destructuring 
        const { Option } = this.state;

        return (
            <div id="screen" >
                <div className="rest-screen" >

                    {/* {switch case function of rendering different view} */}

                    <Menu
                        displayFlowCover={this.displayFlowCover}
                        displayGame={this.displayGame}
                        displaySetting={this.displaySetting}
                        displayMusic={this.displayMusic}
                        OptionList={this.state.mainList}
                        Selected={this.state.Selected}
                    />




                </div>
                {/*  {rendering buttons for clicking} */}
                <div class="btn-area">

                    <Button displayMenu={this.displayMenu} />
                </div>
            </div>
        );
    }
}


export default Screen;