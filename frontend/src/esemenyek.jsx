import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function Events() {

  const [Events, setEvents] = useState([]);

  const [Chosen, setChosen] = useState(-1);

  const getEvents = async () => {

    await axios.get("http://localhost:5173/api/Events").then((response) => {

    setEvents(response.data);

    console.log(response.data);

  });

};


const Choose = (key) => {

  setChosen(key);

};


  useEffect(() => {

    getEvents();

  }, []);

  return (
    <div>
      {!Events ? (
        <h1>Nem található esemény!</h1>
      ) : (
        <div>

          {Events.map((esemeny, key) => (

<div>

              <Button key={key} onClick={(e) => Choose(key)}>

                {esemeny.nev}

              </Button>

            </div>

))}

          {Chosen != -1 && (

            <Card key={Chosen} style={{ width: "18rem" }}>

              <Card.Body>

                <Card.Title>{Events[Chosen].nev}</Card.Title>

                <Card.Text>

                  <p>Esemény leírása: {Events[Chosen].leiras}</p>

                  <p>Esemény helyszíne: {Events[Chosen].helyszin_azonosito}</p>

                  <p>

                    Esemény időpontja: {Events[Chosen].datum}{" "}

                    {Events[Chosen].ido}

                  </p>

                  <p>Esemény szervezője: {Events[Chosen].szervezo_azonosito}</p>

                </Card.Text>

                <Button variant="primary">Részletek</Button>

              </Card.Body>

            </Card>

)}

        </div>

)}

    </div>
  );
}
