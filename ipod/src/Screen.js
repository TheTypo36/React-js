import react from "react";
import Button from "./buttons";
import Menu from "./Screen/Menu";
import HumbergerIcon from "./Screen/HumburgerIcon";
import FlowCover from "./Screen/FlowCover";
import Games from "./Screen/Games";
import Setting from "./Screen/Setting";
import Music from "./Screen/Music";
import ZingTouch from 'zingtouch';
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

    //function to handle click on menu.
    displayMenu = () => {
        this.setState({

            Option: (this.state.Option > 1 || this.state.Option === 0) ? 1 : 0,
        });
        console.log('clicked Menu function')
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
            <div id="screen" style={style.screen}>
                <img style={style.wallpaper} src="data:image/jpeg;base64,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" />
                <div id="rest-screan" style={style.restOfScreen}>

                    {/* {switch case function of rendering different view} */}
                    {
                        (() => {
                            switch (Option) {
                                case 1:
                                    return (
                                        <Menu
                                            displayFlowCover={this.displayFlowCover}
                                            displayGame={this.displayGame}
                                            displaySetting={this.displaySetting}
                                            displayMusic={this.displayMusic}
                                            OptionList={this.state.mainList}
                                            Selected={this.state.Selected}
                                        />
                                    )
                                    break;
                                case 2:
                                    return (
                                        <FlowCover />
                                    )
                                    break;
                                case 3:
                                    return (
                                        <Games />
                                    )
                                    break;
                                case 4:
                                    return (
                                        <Setting />
                                    )
                                    break;
                                case 5:
                                    return (
                                        <Music />
                                    )

                                default:
                                    return (
                                        <HumbergerIcon />
                                    )
                                    break;
                            }
                        })()
                    }

                </div>
                {/*  {rendering buttons for clicking} */}
                <div id="btn-container" style={style.btnContainer}>

                    <Button displayMenu={this.displayMenu} />
                </div>
            </div>
        );
    }
}
//style for screen component
const style = {
    screen: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: '34px',
        transition: 'transform ease-in-out 2.0s'

    },
    btnContainer: {
        width: '100%',
        height: '40%',
        backgroundColor: '#1B1E26',
        position: 'absolute',
        top: '270px',
        borderBottomLeftRadius: '35px',
        borderBottomRightRadius: '35px',
        boxShadow: '5px -10px 15px -4px #403c47'

    },
    wallpaper: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    restOfScreen: {
        height: '60%',
        width: '100%',

    }
}

export default Screen;