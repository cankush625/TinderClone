import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://www.hindinotes.org/wp-content/uploads/2018/12/elon-musk-455x580.jpg",
        },
        {
            name: "Jeff Bezos",
            url: "https://inc42.com/wp-content/uploads/2019/04/Bezos-F.jpg",
        }
    ]);

    const swiped = (direction, nameToRemove) => {
        console.log("removing: " + nameToRemove);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="tinder__cards">
            <dev className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{backgroundImage: `url(${person.url})`}}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>   
                    </TinderCard>
                ))}
            </dev>
        </div>
    )
}

export default TinderCards
