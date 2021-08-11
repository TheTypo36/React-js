import react from "react";
import Button from "./buttons";
import Menu from "./Screen/Menu";
import FlowCover from "./Screen/FlowCover";
import Games from "./Screen/Games";
import Setting from "./Screen/Setting";
import ZingTouch from 'zingtouch';
import $ from 'jquery';
class Screen extends react.Component {

    constructor() {
        super();
        this.temp_change_in_angle = 0;
        this.temp_selected = 0;
        //state for rendering different views acc. to the option.
        this.state = {

            Option: -1,
            mainList: ['Games', 'Music', 'CoverFlow', 'Setting'],
            Selected: 0,
            songList: ['All Songs', 'Albums', 'Artists'],
            gen_sub_menu: ['Games', 'Music', 'CoverFlow', 'Setting'],

        }
    }
    componentDidMount() {
        var zt = new ZingTouch.Region(document.getElementsByClassName("button-container")[0]);
        zt.bind(document.getElementsByClassName('button-container')[0], 'rotate', (event) => {
            if (document.getElementsByClassName('menu')[0].classList.contains('width-50')) {
                let dist = event.detail.distanceFromLast;
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

    selectIsClick = () => {
        console.log('option', this.state.Selected);
        if (this.state.Selected === 1 && this.state.mainList.length == 4) {
            this.setState({
                mainList: this.state.songList,
                Option: -1,
                Selected: 0,

            });
            this.temp_selected = 0;
            return;
        }
        this.setState({
            Option: this.state.Selected,
            Selected: 0,
        });
        this.temp_selected = 0;
        this.displayMenu();
    }
    backwardClicked = () => {
        if (this.state.mainList.length === 3 && document.getElementsByClassName('menu')[0].classList.contains('width-50')) {
            this.setState({
                mainList: this.state.gen_sub_menu,
                Selected: 0,
            });
        }
    }
    render() {
        //object destructuring 
        const { Option } = this.state;

        return (
            <div id="screen" >
                <div className="rest-screen" >

                    {/* {switch case function of rendering different view} */}

                    <Menu
                        OptionList={this.state.mainList}
                        Selected={this.state.Selected}
                    />
                    {this.state.Option === 0 && this.state.mainList.length === 4 ? <Games /> : ''}
                    {this.state.Option === 2 && this.state.mainList.length === 4 ? <FlowCover /> : ''}
                    {this.state.Option === 3 && this.state.mainList.length === 4 ? <Setting /> : ''}



                </div>
                {/*  {rendering buttons for clicking} */}
                <div class="btn-area">

                    <Button displayMenu={this.displayMenu} selectIsClick={this.selectIsClick} backwardClicked={this.backwardClicked} />
                </div>
            </div>
        );
    }
}


export default Screen;