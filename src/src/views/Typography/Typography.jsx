import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import {getNotes, getAllNotes, deleteNotes,postNotesAdmin,deleteNoteAdmin} from '../../Provider/Api';
import Button from "components/CustomButton/CustomButton";

import Card from "components/Card/Card.jsx";

class Typography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    } 
  }

  addNote () {
    postNotesAdmin(this.note.value).then();
    window.location.reload();
  }

  deleteNote () {
    deleteNoteAdmin(this.id_note.value).then();
    window.location.reload();
  }
_renderPage() {
  if(localStorage.getItem("roleAdmin")) {
  return  <div className="content">
  <Card
     title={"Ajouter une note"}
     category={"Note"}
     content={
       <div>
 <Row>
     <textarea style={{width:300,marginLeft:10}} type="text" placeholder="note" ref={(input) => {
           this.note = input
       }} />
       </Row>
     
       <Row>
         <Button  style={{marginTop:10, marginLeft:10}}onClick={(e) => {this.addNote()}}>ajouter</Button>
       </Row>
       </div>
     }
   /> 
        <Card
     title={"Supprimez une note"}
     category={"Ajouter l'id de la note"}
     content={
       <div> 
             <Row>
       Note ID : <input style={{marginLeft:10}}type="text" placeholder="id de la note" ref={(input) => {
           this.id_note = input
       }} />
       </Row>
     
       <Row>
         <Button style={{marginTop:10, marginLeft:10}} onClick={(e) => {this.deleteNote()}}>Supprimer</Button>
       </Row></div>
     }
   /> 
   <h1>Les notes de tout les utilisateurs</h1>

<Grid fluid>
<Row>
 <Col md={12}>
 { ( this.state.notes != undefined &&this.state.notes.length) > 0 && this.state.notes.map((note) => {
console.log(note);
return <div key={note.id_note}>  <Card
     title={note.id_note}
     category={note.identity_id}
     content={
       <div>
     {note.note}          
       </div>
     }
   /> </div>
})}
   
 </Col>
</Row>


</Grid>


             
          
</div>
}
return <div>Cette page est dédiée aux administrateurs</div>}
  componentWillMount () {
    getAllNotes().then((api) => {
      console.log(api);
      this.setState({
        notes: api.data
      })
    });
  }
  render() {
    return this._renderPage();
  }
}

export default Typography;
