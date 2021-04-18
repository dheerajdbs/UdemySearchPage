import React from "react";
import "./NewCourse.css";

const newCourse = (props) => {
  const addCourseHandler = () => {
    let name = document.querySelector("#name").value;
    let desc = document.querySelector("#desc").value;
    let img = document.querySelector("#img").value;
    let price = document.querySelector("#price").value;

    const stateKeys = Object.keys(props.cards[0]);
    // let abc = [];

    // const arr = [name, desc, img, price];
    // stateKeys =
    //     abc.push(igkey);

    // var x = igkey;
    // return Object.assign(abc, { x    : arr[index]} );

    // stateKeys = Object.keys(props.cards[0]);
    // const initialValue = {};
    // let counter  = 0;
    // arr.reduce( (obj, item) => {
    //     counter++;
    //     return {
    //         ...obj,
    //         [[statekeys][counter-1]] : item
    //     }
    // }, initialValue)

    const newCourse = {
      [stateKeys[0]]: name,
      [stateKeys[1]]: desc,
      [stateKeys[2]]: img,
      [stateKeys[3]]: price,
    };
    console.log(newCourse);

    props.add(newCourse);
  };

  return (
    <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
                <div className="modal-title">
                    <h3>Add Course Details</h3>
                </div>
          </div>
          <div className="modal-body">
          <div className="form-group inputField">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group inputField">
            
            <input
              type="text"
              className="form-control"
              id="desc"
              placeholder="Enter Description"
            />
          </div>
          <div className="form-group inputField">
            
            <input
              type="text"
              className="form-control"
              id="img"
              placeholder="Enter Image Path"
            />
          </div>
          <div className="form-group inputField">
            
            <input
              type="text"
              className="form-control"
              id="price"
              placeholder="Enter Price"
            />
          </div>
        </div>
        <div className="modal-footer">
        <button onClick={addCourseHandler} className="btn btn-primary" data-dismiss="modal">
            Add New Course
          </button>
          <button type="button" className="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default newCourse;
