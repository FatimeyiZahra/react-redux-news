import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";


const ChooseYourCharacter = function(props) {
    const [selectedFlavors, setSelectedFlavors] = useState([]);
    const [allCategories, setCategory] = useState([]);
     
       useEffect(() => {
       axios
      .get("https://localhost:44313/V1/News/categories")
      .then((res) => setCategory(res.data));
     }, []);
     console.log(allCategories)
    const handleSelect = function(selectedItems) {
        const flavors = [];
        for (let i=0; i<selectedItems.length; i++) {
            flavors.push(selectedItems[i].value);
        }
        setSelectedFlavors(flavors);
        console.log(flavors)
    }

    return (
        <form className="padding-top">
            <select multiple={true} value={selectedFlavors} onChange={(e)=> {handleSelect(e.target.selectedOptions)}}>
            {allCategories &&
             allCategories.map((item) => (
               <option key={item.id} value={item.id}> {item.name}</option>
            
            ))}
                {/* <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option> */}
            </select>

           
        </form>
    );
};

export default ChooseYourCharacter;



// const id=[1]
// const category= [10,11,12];

// let

// for (let index = 0; index < array.length; index++) {
    
    
// }









{/* <Form.Group >
<Form.Label>Form Label</Form.Label>
<Form.Control
  as="select"
  multiple
  // value={formCatState}
  onChange={(event) => {
    let target = event.target as HTMLSelectElement
    console.log(target.selectedOptions);
  }}
>
  <option>example cat 1</option>
  <option>Example cat 2</option>
  <option>Example cat 3</option>
  <option>Example cat 4</option>
</Form.Control>
  <Form.Text muted> hold ctrl or command for multiple select</Form.Text>
</Form.Group> */}