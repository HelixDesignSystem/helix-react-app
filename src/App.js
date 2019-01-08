import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

class App extends Component {
    render() {
        return (
            <div id="stage">
                <nav id="nav" className="hxNav">
                    <Link to="/">Home</Link>
                    <Link to="/about/">About</Link>
                </nav>

                <main role="main" id="content" className="hxBox hxMd">
                    <h1>Page Content</h1>

                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={About} />
                </main>

                <aside className="hxSiderail hxBox hxMd">
                    <p>Side Rail (optional)</p>
                </aside>
            </div>
        );
    }
}

export default App;
