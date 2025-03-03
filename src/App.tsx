import {Component, PropsWithChildren} from "react";
import "./App.css";

type State = {
  person: {
    fullName: string;
    bio: string;
    imgSrc: string;
    profession: string;
  },
  shows: boolean,
  timeSinceMount: number
}

class App extends Component {
  private interval: number;

  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate developer who loves React.",
        imgSrc: "https://images.pexels.com/photos/5702311/pexels-photo-5702311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        profession: "Software Engineer",
      },
      shows: true,
      timeSinceMount: 0,
    };
    this.interval = 0;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState: State) => ({ timeSinceMount: prevState.timeSinceMount + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState: State) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, timeSinceMount } = this.state as State;
    return (
      <div className="App" style={{ textAlign: "center", marginTop: "20px" }}>
        <p className="info">Time since component mounted: {timeSinceMount} seconds</p>

        {shows && (
          <div className="profile" >
            <img src={person.imgSrc} alt="Profile" style={{ borderRadius: "50%" }} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}

        <div className="button-wrapper" >
          <button onClick={this.toggleShow} style={{ marginBottom: "20px" }}>
            {shows ? "Hide Profile" : "Show Profile"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
