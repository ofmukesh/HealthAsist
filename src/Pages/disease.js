import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Disease = () => {
  let { g, a, c } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/disease/").then((res) => {
      setData(
        res.data.filter((items) => items.min_age <= a && items.max_age >= a)
      );
    });
  }, []);

  console.log(data);
  return (
    <>
      <div className="disease">
        {data.map((cards) => {
          return (
            <div className="" key={cards.id}>
              <div className="col">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{cards.disease}</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Disease;
