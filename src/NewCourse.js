import React from 'react';
import './NewCourse.css';

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


            const newCourse = { [stateKeys[0]] : name, [stateKeys[1]] : desc, [stateKeys[2]] : img, [stateKeys[3]] : price }
            console.log(newCourse);

        props.add(newCourse);

    }
    
   return (
       
    <div className='back'>
        <h1>Add A Course</h1>
    <div className="form-group inputField">
    <label for="name">Name:</label>
    <input type="text" className="form-control" id="name" placeholder="Enter Name" />
    </div>
    <div className="form-group inputField">
        <label for="pwd">Description:</label>
        <input type="text" className="form-control"  id="desc" placeholder="Enter Description" />
    </div>
    <div className="form-group inputField">
        <label for="pwd">Image:</label>
        <input type="text" className="form-control"  id="img" placeholder="Enter Image Path" />
    </div>
    <div className="form-group inputField">
        <label for="pwd">Price:</label>
        <input type="text" className="form-control"  id="price" placeholder="Enter Price" />
    </div>

     <button onClick={addCourseHandler} className='btn btn-primary' >Add New Course</button>
</div>

   );

}

export default newCourse;

//style={{height: '40px', padding: '1px !important'}}

{/* <div>
            <div className="form-group inputField">
            <label for="name">Name:</label>
            <input type="text" className="form-control" placeholder="Enter Name"/>
            </div>
            <div className="form-group inputField">
                <label for="pwd">Description:</label>
                <input type="text" className="form-control"  placeholder="Enter Description" />
            </div>
            <div className="form-group inputField">
                <label for="pwd">Image:</label>
                <input type="text" className="form-control"  placeholder="Enter Image Path" />
            </div>
            <div className="form-group inputField">
                <label for="pwd">Price:</label>
                <input type="text" className="form-control"  placeholder="Enter Price" />
            </div>

             <button onClick={props.add} className='btn btn-primary' >Add New Course</button>
    </div> */}