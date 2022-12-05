// KEYS:
const cats = ['Muffins', 'Mr.Wiggles', 'Void'];

function MyKeys() {

    return (
        cats.map((person,i )=>
        // expression goes here:
       <li key={'person_' + i} >{person}, key {i}</li>
      )
    );
  }
  
export default MyKeys;