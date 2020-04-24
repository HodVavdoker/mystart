import React , {Component} from 'react';
import Auxilary from "../../hoc/Auxilary/Auxilary";
import Modal from "../../components/Modal/Modal";
import LocationList from '../../components/LocationList/LocationList';
import LocationFormEdit from '../../components/LocationFormEdit/LocationFormEdit';
import FormAddButton from '../../components/FormAddButton/FormAddButton';

class LocationPage extends Component{

    state = {
        location: [
          { id: "1", name: "Sport"  ,address: "Tal", coordinates: "105" , category : "abc" },
          { id: "2", name: "Poet"   ,address: "Bar", coordinates: "106" , category : "sad"},
          { id: "3", name: "Art"    ,address: "Yos", coordinates: "107" , category : "gas" },
          { id: "4", name: "Movies" ,address: "Sap", coordinates: "110" , category : "sfg"},
        ],
    
        edited: false,
        added : false,
        view:false,
      };

      allstate = () =>{
        
        localStorage.setItem('mystate' , this.state.location);
      }

      removeLocation = (id) => {
        const LocationIndex = this.state.location.findIndex((p) => {
          return p.id === id;
        });
        const location = [...this.state.location];
        location.splice(LocationIndex, 1);
        this.setState({ location: location });
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

      editnameHandler = (event) => {
        this.setState({ locationnametoedit: event.target.value});};
      editaddressHandler = (event) => {
        this.setState({locationaddresstoedit: event.target.value});};
      editcoordinatesHandler = (event) => {
        this.setState({locationcoordinatestoedit: event.target.value});};
      editcategoryHandler = (event) => {
        this.setState({locationcategorytoedit: event.target.value});};
      
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
      }


    render(){
        
        let myform = <FormAddButton/>
        let listlocation;
        listlocation = this.state.location.map((location) => (
            <LocationList
              key={location.id}
              name={location.name}
              address={location.address}
              coordinates={location.coordinates}
              category = {location.category}
              editLocation={() => this.editLocation(location)}
              removeLocation={() => this.removeLocation(location.id)}
            />
          ));

        return(
            <>
            <Auxilary>
            <Modal show = {this.state.edited}>
              <LocationFormEdit
              name={this.state.edited ? this.state.locationnametoedit : ""} 
              address={this.state.edited ? this.state.locationaddresstoedit : ""} 
              coordinates={this.state.edited ? this.state.locationcoordinatestoedit : ""} 
              category={this.state.edited ? this.state.locationcategorytoedit : ""} 
              change = {this.editnameHandler}
              change1 = {this.editaddressHandler}
              change2 = {this.editcoordinatesHandler}
              change3 = {this.editcategoryHandler}
              toggleEdit = {this.toggleEdit}
              acceptChange={this.acceptChangeHandler}
              locationFormEditCancel = {this.locationFormEditCancel}
               />
            </Modal>
            {listlocation}
            </Auxilary>
            </>
    
        );
    }
}

export default LocationPage;
