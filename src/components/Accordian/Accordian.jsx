import React, { useState } from "react";
import "./Accordian.css";

const Accordian = () => {
  const list = [
    {
      id: 1,
      heading: "Do I have to allow the use of cookies?",
      desc: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      id: 2,
      heading: "How do I change my My Page password?",
      desc: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
    },
    {
      id: 3,
      heading: "What is BankID?",
      desc: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
    },
    {
      id: 4,
      heading: "Whose birth number can I use?",
      desc: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify",
    },
  ];
  const [checked, setChecked] = useState(false);
  const [accordianId, setAccordianId] = useState([]);
  function buttonHandler(id) {
    if (checked) {
      setAccordianId((prevOpenIds) => {
        return prevOpenIds.includes(id)
          ? prevOpenIds.filter((prevId) => prevId !== id)
          : [...prevOpenIds, id];
      });
    } else {
      setAccordianId((prevOpenIds) => {
        return prevOpenIds.includes(id) ? [] : [id];
      });
    }
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>Is multiple open accordion allowed?</h3>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </div>
      <div className="main">
        {list.map((data) => {
          return (
            <>
              <div className="complete-accordian" key={data.id}>
                <div className="accordian">
                  <h1>{data.heading}</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                    alt=""
                    className="button-accordian"
                    onClick={() => buttonHandler(data.id)}
                  />
                </div>
                <div>
                  <p>{accordianId.includes(data.id) && data.desc}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Accordian;
