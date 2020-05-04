import React , {Component} from 'react';
import Auxilary from "../../hoc/Auxilary/Auxilary";
import Modal from "../../components/Modal/Modal";
import LocationList from '../../components/LocationList/LocationList';
import LocationFormEdit from '../../components/LocationFormEdit/LocationFormEdit';
import FormAddLocation from '../../components/FormAddLocation//FormAddLocation';
import Layout from '../../components/Layout/Layout';
import {connect} from 'react-redux'; 
import * as actionTypes from '../../store/actions';

class LocationPage extends Component{

    state = {
        location: [
          { id: "1", name: "Sport"  ,address: "Tal", coordinates: "105" , category : "abc" },
          { id: "2", name: "Poet"   ,address: "Bar", coordinates: "106" , category : "sad"},
          { id: "3", name: "Art"    ,address: "Yos", coordinates: "107" , category : "gas" },
          { id: "4", name: "Movies" ,address: "Sap", coordinates: "110" , category : "sfg"},
        ],
        categorytoAdd:{id:"",name:"",address:"",  coordinates: "" , category : ""},
        edited: false,
        added : false,
        view:false,
      };

   //   componentDidMount()
  //    {
      //   if(localStorage.getItem('mylocationstate'))
      //   {
      //     this.state.location =JSON.parse(localStorage.getItem('mylocationstate'));
      //     this.setState({
      //       id : this.state.location.id,
      //       name : this.state.location.name,
      //       address : this.state.location.address,
      //       coordinates : this.state.location.coordinates,
      //       category : this.state.location.category
      //     });
      //   }
      //   else{

      //   } 
      //   //localStorage.getItem('mycategorystate' ,JSON.stringify( this.state.category));
      // }
      removeLocation = (id) => {
        const LocationIndex = this.state.location.findIndex((p) => {
          return p.id === id;
        });
        const location = [...this.state.location];
        location.splice(LocationIndex, 1);
        this.setState({ location: location });
        localStorage.setItem('mylocationstate' ,JSON.stringify(location));
      };
      locationFormEditCancel = () =>{
        //this.props.history.goBack();
        this.setState({ edited: !this.state.edited});
        this.props.history.replace('/location');
      }
      editLocation = (location) => {
        this.props.history.replace('/location/editlocation');
        console.log(location);
        this.setState({
          edited: true,
          locationnametoedit: location.name,
          locationaddresstoedit: location.address,
          locationcoordinatestoedit: location.coordinates,
          locationcategorytoedit: location.category,
          locationidtoedit :location.id,
        });
      };
      toggleEdit = () => { 
        this.setState({ edited: !this.state.edited});
      };
//      editHandler = (event) => {
//        this.setState({ locationnametoedit: event.target.value,
//                        locationaddresstoedit: event.target.value,
//                        locationcoordinatestoedit: event.target.value,
//                        locationcategorytoedit: event.target.value,
//                      }
//          );
//      };

      editnameHandler           = (event) => {this.setState({ locationnametoedit: event.target.value});};
      editaddressHandler        = (event) => {this.setState({locationaddresstoedit: event.target.value});};
      editcoordinatesHandler    = (event) => {this.setState({locationcoordinatestoedit: event.target.value});};
      editcategoryHandler       = (event) => {this.setState({locationcategorytoedit: event.target.value});};

      addnamehandler            = (event) => {this.setState({ locationnametoadd: event.target.value,});};  
      addaddresshandler         = (event) => {this.setState({ locationaddresstoadd: event.target.value});};
      addcoordinateshandler     = (event) => {this.setState({ locationcoordinatestoadd: event.target.value});}; 
      addcategoryhandler        = (event) => {this.setState({ locationcategorytoadd: event.target.value});};
      
      addhandler                = ()=>{this.setState({added:!this.state.added});}
      
       acceptChangeHandler = () =>{
       // this.props.history.goBack();
       // this.props.history.replace('/location');
       //this.props.history.goBack();
        let array = this.state.location;
        var index = array.findIndex(
          (value) => value.id === this.state.locationidtoedit
        );
        array[index].name = this.state.locationnametoedit;
        array[index].address = this.state.locationaddresstoedit;
        array[index].coordinates = this.state.locationcoordinatestoedit;
        array[index].category = this.state.locationcategorytoedit;
        this.setState({ location: array });
        localStorage.setItem('mylocationstate' ,JSON.stringify(array));
      }
      toggleAdd = () => {this.setState({ added: !this.state.added});};

      
      acceptAddHandler = () => {
      let array = this.state.location;
      //let newIndex = this.state.location.length + 1;
      this.setState({locationtoAdd:
     {'id'   :this.state.newid,
      'name' :this.state.locationnametoadd,
      'address' :this.state.locationaddresstoadd ,
      'coordinates':this.state.locationcoordinatestoadd ,
      'category' :this.state.locationcategorytoadd,}});
      this.setState({location:[...array,this.state.locationtoAdd]});
      console.log(this.state.locationtoAdd);
      localStorage.setItem('mylocationstate',JSON.stringify(array));
      }; 

      viewLocation = () => {
        this.setState({ view: !this.state.view });
        console.log(this.state.view);
      };

    render(){
        let listlocation;

        if(this.props.view){
        listlocation = this.props.location.map((location) => (
            <LocationList
              key={location.id}
              name={location.name}
              address={location.address}
              coordinates={location.coordinates}
              category = {location.category}
              editLocation={() => this.props.editLocation(location)}
              removeLocation={() => this.props.removeLocation(location.id)}
            />
          ));
        }
        return(
            <>
            <Auxilary>
            <Modal show = {this.props.edited}>
              <LocationFormEdit
              name={this.props.edited ? this.props.locationnametoedit : ""} 
              address={this.props.edited ? this.props.locationaddresstoedit : ""} 
              coordinates={this.props.edited ? this.props.locationcoordinatestoedit : ""} 
              category={this.props.edited ? this.props.locationcategorytoedit : ""} 
              change = {(event)=>this.props.editnameHandler(event.target.value)}
              change1 = {(event)=>this.props.editaddressHandler(event.target.value)}
              change2 = {(event)=>this.props.editcoordinatesHandler(event.target.value)}
              change3 = {(event)=>this.props.editcategoryHandler(event.target.value)}
              toggleEdit = {this.props.toggleEdit}
              acceptChange={()=>this.props.acceptChangeHandler(this.props.locationidtoedit,this.props.locationnametoedit ,this.props.locationaddresstoedit , this.props.locationcoordinatestoedit , this.props.locationcategorytoedit)}
              locationFormEditCancel = {this.props.locationFormEditCancel}
               />
            </Modal>
            <Modal show = {this.props.added}>
            <FormAddLocation
            thestate = "Location"
            acceptAddHandler={this.props.acceptAddHandler}
            toggleAdd={this.props.toggleAdd}
            addname = {(event)=>this.props.addnamehandler(event.target.value)}
            addaddress = {(event)=>this.props.addaddresshandler(event.target.value)}
            addcoordinates = {(event)=>this.props.addcoordinateshandler(event.target.value)}
            addcategory = {(event)=>this.props.addcategoryhandler(event.target.value)}

            ></FormAddLocation>
        </Modal>
        <Layout
                view = {this.props.viewLocation}
                addhandler = {this.props.addhandler}/> 
                {listlocation}
            </Auxilary>
            </>
    
        );
    }
}
const mapStateToProps = state =>{
  return{
    locationtoAdd                    : state.loc.locationtoAdd,
    location                         : state.loc.location,
    edited                           : state.loc.edited,
    added                            : state.loc.added,
    view                             : state.loc.view,
    locationnametoedit               : state.loc.locationnametoedit,
    locationaddresstoedit            : state.loc.locationaddresstoedit,
    locationcoordinatestoedit        : state.loc.locationcoordinatestoedit,
    locationcategorytoedit           : state.loc.locationcategorytoedit,
    locationidtoedit                 : state.loc.locationidtoedit,
    locationnametoadd                : state.loc.locationnametoadd,
    locationaddresstoadd             : state.loc.locationaddresstoadd,
    locationcoordinatestoadd         : state.loc.locationcoordinatestoadd,
    locationcategorytoadd            : state.loc.locationcategorytoadd,
  }
};

const mapDispatchtoProps = dispatch =>{
  return{ 
    removeLocation :                (id) =>dispatch({type:actionTypes.REMOVE_LOCATION , LocationElId: id}),  
    locationFormEditCancel:         () =>dispatch({type:actionTypes.LOCATION_FORM_EDIT_CANCEL}),
    editLocation :                  (location) =>dispatch({type:actionTypes.EDIT_LOCATION , location : location}),
    toggleEdit :                    () =>dispatch({type:actionTypes.TOGGLE_EDIT_LOCATION}), 
    editnameHandler :               (value) =>dispatch({type:actionTypes.EDIT_NAME_HANDLER , payload : value}),
    editaddressHandler :            (value) =>dispatch({type:actionTypes.EDIT_ADDRESS_HANDLER ,payload : value}), 
    editcoordinatesHandler :        (value) =>dispatch({type:actionTypes.EDIT_COORDINATES_HANDLER,payload : value}), 
    editcategoryHandler :           (value) =>dispatch({type:actionTypes.EDIT_CATEGORY_HANDLER,payload : value}),
    acceptChangeHandler:            (id,name,address,coordinates,category) =>dispatch({type:actionTypes.ACCEPT_CHANGE_HANDLER_LOCATION,id:id,name:name,address:address,coordinates:coordinates,category:category}),
    addnamehandler :                (value) =>dispatch({type:actionTypes.ADD_NAME_HANDLER,payload : value}),
    addaddresshandler :             (value) =>dispatch({type:actionTypes.ADD_ADDRESS_HANDLER,payload : value}), 
    addcoordinateshandler:          (value) =>dispatch({type:actionTypes.ADD_COORDINATES_HANDLER,payload : value}),
    addcategoryhandler :            (value) =>dispatch({type:actionTypes.ADD_CATEGORY_HANDLER,payload : value}),
    addhandler:                     () =>dispatch({type:actionTypes.ADD_HANDLER_LOCATION}),
    acceptAddHandler:               () =>dispatch({type:actionTypes.ACCEPT_ADD_HANDLER_LOCATION}),
    viewLocation:                   () =>dispatch({type:actionTypes.VIEW_LOCATION}),
    toggleAdd:                      () =>dispatch({type:actionTypes.TOGGLE_ADD_LOCATION}),
  };
}



export default connect(mapStateToProps,mapDispatchtoProps)(LocationPage); 

