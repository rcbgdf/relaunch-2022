import React from 'react'
import moment from "moment"
import {Button,Table,Row,Col,Form} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import EditableDataTable from './EditableDataTable';
import "./VerteilerlisteFormular.scss"

const data = [
    ['max.mustermann@gmail.com', 'Max', 'Mustermann', null],
    ['erika.mustermann@gmail.com', 'Erika', 'Mustermann', null],
    ['hannes.sabbel@gmail.com', 'Hannes', 'Sabbel', null],
    ['frau.surbier@gmail.com', 'Frau', 'Surbier', new Date(2021, 10, 15)],
    ['bernd.bluemchen@gmail.com', 'Bernd', 'Blümchen', null],
    ['veronika.zauser@gmail.com', 'Veronika', 'Zauser', new Date(2021, 11, 30)]
].map((v, i) => {
    return {
        id: i,
        email: v[0],
        vorname: v[1],
        nachname: v[2],
        gueltig_bis: v[3]
    }
})

const columnTitles = [
    { name: 'EMail', selector: 'email', sortable: true},
    { name: 'Vornme', selector: 'vorname', sortable: true, editable: true},
    { name: 'Nachname', selector: 'nachname', sortable: true, editable: true},
    { name: 'gültig bis', selector: 'gueltig_bis', sortable: true, editable: true, type: 'date',
       format: (row, index) => { return row.gueltig_bis && moment(row.gueltig_bis).format('DD.MM.yyyy')},
    },
]


export default function VerteilerlisteFormular() {
    return (
        <>
            <Row>
                <Col md={12}>
                    <EditableDataTable
                        title='Verteilerliste für die Einladungen'
                        columns={columnTitles}
                        data={data}/>
                </Col>
            </Row>
        </>
    )
}
