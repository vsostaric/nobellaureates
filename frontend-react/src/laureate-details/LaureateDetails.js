import React from "react";

import {Dialog} from 'primereact/dialog';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';

import http from '../http-service/HttpService'

class LaureateDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fieldOptions: [],
            selectedLaureate: null,
            selectedField: props.laureate !== null ? props.laureate.field : null
        };

        this.getFields();

    }

    getFields() {
        http.sendGetRequest('/laureate/getFields').then(res => {
            const fieldOptions = [];
            res.data.forEach(el => {
                fieldOptions.push({label: el.name, value: el});
            });
            this.setState({fieldOptions: fieldOptions});
        });
    }

    closeDetails() {
        this.setState({selectedField: null, selectedLaureate: null});
        this.props.detailsClosed();
    };

    saveLaureate() {
        const laureate = (this.state.selectedLaureate !== null) ? this.state.selectedLaureate : this.props.laureate;
        laureate.field = (this.state.selectedField !== null) ? this.state.selectedField : this.props.selectedField;

        http.sendPostRequest('/laureate/save', laureate).then(function (response) {
            this.setState({selectedField: null, selectedLaureate: null});
            this.props.laureateSaved(response.data);
        }.bind(this));
    }

    fieldDropdown(laureateUpdatable) {
        if (laureateUpdatable) {
            return (<div className="p-col-12">
                <Dropdown
                    value={(this.state.selectedField !== null) ? this.state.selectedField : this.props.selectedField}
                    options={this.state.fieldOptions}
                    disabled={!this.props.laureateUpdatable}
                    onChange={(e) => {
                        this.setState({selectedField: e.value});
                    }}/>

            </div>);
        }
        return (
            <div className="p-col-12">
                <InputText value={this.props.selectedField.name}
                           disabled={true}
                           style={{width: '100%'}}/>
            </div>
        );
    }

    render() {

        if (this.props.laureate !== null) {
            return (
                <Dialog header="Laureate" visible={this.props.laureate !== null}
                        width="500px" modal={true} onHide={this.closeDetails.bind(this)}>
                    <div className="p-grid">
                        <div className="p-col-12">
                            <h3 className="first">Name</h3>
                        </div>
                        <div className="p-col-12">
                            <InputText
                                value={(this.state.selectedLaureate !== null) ? this.state.selectedLaureate.name : this.props.laureate.name}
                                disabled={!this.props.laureateUpdatable}
                                onChange={
                                    (e) => {
                                        let selectedLaureate = (this.state.selectedLaureate !== null) ? this.state.selectedLaureate : this.props.laureate;
                                        selectedLaureate = {...selectedLaureate};
                                        selectedLaureate.name = e.target.value;
                                        this.setState({selectedLaureate: selectedLaureate});
                                    }
                                }
                                style={{width: '100%'}}/>
                        </div>
                        <div className="p-col-12">
                            <h3 className="first">Alias</h3>
                        </div>
                        <div className="p-col-12">
                            <InputText
                                value={(this.state.selectedLaureate !== null) ? this.state.selectedLaureate.alias : this.props.laureate.alias}
                                onChange={
                                    (e) => {
                                        let selectedLaureate = (this.state.selectedLaureate !== null) ? this.state.selectedLaureate : this.props.laureate;
                                        selectedLaureate = {...selectedLaureate};
                                        selectedLaureate.alias = e.target.value;
                                        this.setState({selectedLaureate: selectedLaureate});
                                    }
                                }
                                disabled={!this.props.laureateUpdatable} style={{width: '100%'}}/>
                        </div>
                        <div className="p-col-12">
                            <h3 className="first">Field</h3>
                        </div>

                        {this.fieldDropdown(this.props.laureateUpdatable, this.props.laureate.field)}

                        <div className="p-col-12">
                            <h3 className="first">Year</h3>
                        </div>
                        <div className="p-col-12">
                            <InputText
                                value={(this.state.selectedLaureate !== null) ? this.state.selectedLaureate.year : this.props.laureate.year}
                                onChange={
                                    (e) => {
                                        let selectedLaureate = (this.state.selectedLaureate !== null) ? this.state.selectedLaureate : this.props.laureate;
                                        selectedLaureate = {...selectedLaureate};
                                        selectedLaureate.year = e.target.value;
                                        this.setState({selectedLaureate: selectedLaureate});
                                    }
                                }
                                disabled={!this.props.laureateUpdatable} style={{width: '100%'}}/>
                        </div>
                        <div className="p-col-12">
                            <h3 className="first">Biography</h3>
                        </div>
                        <div className="p-col-12">
                            <InputTextarea rows={5} cols={30}
                                           value={(this.state.selectedLaureate !== null) ? this.state.selectedLaureate.biography : this.props.laureate.biography}
                                           onChange={
                                               (e) => {
                                                   let selectedLaureate = (this.state.selectedLaureate !== null) ? this.state.selectedLaureate : this.props.laureate;
                                                   selectedLaureate = {...selectedLaureate};
                                                   selectedLaureate.biography = e.target.value;
                                                   this.setState({selectedLaureate: selectedLaureate});
                                               }
                                           }
                                           disabled={!this.props.laureateUpdatable}/>
                        </div>
                        <div className="p-col-12" style={{display: this.props.laureateUpdatable ? '' : 'none'}}>
                            <Button label="Save" onClick={this.saveLaureate.bind(this)}/>
                        </div>
                    </div>
                </Dialog>
            );
        }
        return (<div></div>);

    }

}

export default LaureateDetails;