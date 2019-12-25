import React, {Component} from 'react'
//https://allwording.com/christmas-phrases/
const phrases = [
"Believe in the Magic of Christmas",
"Tis the season",
"Peace on Earth",
"Let It Snow",
"Merry and Bright",
"Deck the Halls",
"Joy to the World",
"Ho Ho Ho",
"Let Your Heart Be Light",
"Better Not Pout",
"Baby, it’s Cold Outside",
"Peace, Joy, and Love",
"Home For the Holidays",
"Dear Santa…",
"Naughty or Nice?",
"Jack Frost Nipping at Your Nose",
"Sparkle and Shine",
"Good Tidings",
"Under the Mistletoe",
"Rockin’ Around the Christmas Tree",
"Feliz Navidad",
"Noel",
"Christmas is in the Air",
"Jingle All the Way",
"It’s the Most Wonderful Time of the Year",
"Reindeer Xing",
"This House is Under Elf Surveillance",
"Santa’s Little Helper",
"Dashing Through the Snow",
"Dreaming of a White Christmas",
"Have Yourself a Merry Little Christmas",
"Santa Claus is Coming to Town",
"O Christmas Tree",
"Christmas is Claus For Celebration",
"Silent Night, Holy Night",
"We Wish You a Merry Christmas",
"Season’s Greetings",
"Meet Me Under the Mistletoe",
"O Come Let Us Adore Him",
"Comfort and Joy",
"Eat, Drink & Be Merry",
"All is Bright",
"Sleigh Bells Ring",
"Fa La La La La",
"Christmas Trees For Sale",
"This Way to Santa’s Workshop",
"On Dasher, on Dancer, on Prancer and Vixen, on Comet, on Cupid, on Donner and Blitzen",
"We Wish You a Merry Christmas",
"It’s a Wonderful Life",
"Free Sleigh Rides",
"Making Spirits Bright",
"Chestnuts Roasting on an Open Fire",
"Reindeer Parking",
"Walking in a Winter Wonderland",
"Santa Stop Here",
"Merry Christmas to All, and to All a Good Night",
"Away in a Manger",
"Christmas is Coming",
"Bah Humbug!"
];
let interval;
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export default class CustomPhrases extends Component {
    constructor(props) {
    super(props)
        this.state = {
            phrase: phrases[getRandomInt(phrases.length)],
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        interval = setInterval(() => {
            this.setState({
                phrase: phrases[getRandomInt(phrases.length)]
            })
        }, 10000);
    }
    componentWillUnmount(){
        clearInterval(interval);
    }
    render () {
        const {phrase} = this.state; 
        return(
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'x-large'
        }}>{phrase}</div>
        )
    }
}
