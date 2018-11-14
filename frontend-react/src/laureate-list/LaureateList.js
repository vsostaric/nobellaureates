import React from 'react';
import './LaureateList.css';

import {DataTable} from 'primereact/datatable';
import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import {Growl} from 'primereact/growl';

import http from '../http-service/HttpService'

import LaureateDetails from "../laureate-details/LaureateDetails";

class LaureateList extends React.Component {

    getLaureates() {
        http.sendGetRequest('/laureate/getLaureates').then(res => {
            this.setState({laureates: res.data});
        });
    }

    constructor() {
        super();
        this.state = {
            laureates: [],
            laureate: null,
            selectedField: null,
            laureateUpdatable: false
        };

        this.getLaureates();

    }

    actionTemplate(rowData) {
        return (
            <div>
                <Button label="Details" icon="pi pi-search" onClick={this.showDetails.bind(this, rowData)}/>
                <Button label="Update" icon="pi pi-search" onClick={this.showUpdateForm.bind(this, rowData)}/>
                <Button label="Delete" icon="pi pi-search" onClick={this.removeRow.bind(this, rowData)}/>
            </div>);
    }

    showUpdateForm(rowData) {
        this.setState({laureate: rowData, selectedField: rowData.field, laureateUpdatable: true});
    }

    showDetails(rowData) {
        this.setState({laureate: rowData, selectedField: rowData.field, laureateUpdatable: false});
    }

    detailsClosed() {
        this.setState({laureate: null});
    }

    laureateSaved(laureates) {
        debugger;
        this.setState({laureates: laureates, laureate: null});
    }

    removeRow(rowData) {

        http.sendPostRequest('/laureate/delete', {
            id: rowData.id
        }).then(function (response) {
            this.setState({laureates: response.data});
            this.growl.show({
                severity: 'success',
                summary: 'Success Message',
                detail: 'Laureate removed'
            });
        }.bind(this));
    }

    showCreateNewForm() {
        this.setState({laureate: {}, selectedField: null, laureateUpdatable: true});
    }

    render() {

        return (
            <div>
                <Growl ref={(el) => this.growl = el}/>
                <Button label="Add" icon="pi pi-search" onClick={this.showCreateNewForm.bind(this)}/>
                <div className="content-section implementation">
                    <DataTable value={this.state.laureates} paginator={true} rows={10}>
                        <Column field="name" header="Name" filter={true} filterMatchMode="contains"/>
                        <Column field="year" header="Year" filter={true} filterMatchMode="contains"/>
                        <Column field="field.name" header="Field" filter={true} filterMatchMode="contains"/>
                        <Column field="" header="" body={this.actionTemplate.bind(this)}/>
                    </DataTable>
                </div>
                <LaureateDetails laureate={this.state.laureate}
                                 selectedField={this.state.selectedField}
                                 detailsClosed={this.detailsClosed.bind(this)}
                                 laureateSaved={this.laureateSaved.bind(this)}
                                 laureateUpdatable={this.state.laureateUpdatable}
                />
            </div>
        );
    }
}

export default LaureateList;