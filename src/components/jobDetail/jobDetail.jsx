import React from 'react';
import { useSelector } from 'react-redux';
import Moment from 'moment';
import { Tabs, Tab, Table, Button } from 'react-bootstrap';


export default function JobDetail() {

    const jobToDisplay = useSelector(state => state.jobDetailState.jobDetailObject);

    const language = jobToDisplay.language !== null ? (
        <div>
            <label>Idioma:</label>
            <p>{jobToDisplay.language}</p>
            <label>Nivel:</label>
            <p>{jobToDisplay.languageLevel}</p>
        </div>
    ) : "";

    const skills = (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Habilidad</th>
                    <th>Tiempo mínimo</th>
                    <th>Es excluyente</th>
                </tr>
            </thead>
            <tbody>
                {jobToDisplay.skillsRequired.map(item => (
                    <tr>
                        <td>{item.skill.name}</td>
                        <td>{item.years}</td>
                        <td>{item.isMandatory ? "Si" : "No"}</td>
                        <hr />
                    </tr>
                ))}
            </tbody>
        </Table>
    );

    return (
        <div class="page-header">
            <h1>{jobToDisplay.title}</h1>
            <small>{jobToDisplay.company.name} - Publicado {Moment(jobToDisplay.date).format('d MMM')}</small>
            <hr />
            <Tabs defaultActiveKey="desc" id="uncontrolled-tab-example">
                <Tab eventKey="desc" title="Descripción">
                    <br /><br />
                    <p>{jobToDisplay.description}</p>
                </Tab>
                <Tab eventKey="det" title="Detalles">
                    <br /><br />
                    {language}
                    <label>Zona:</label>
                    <p>{jobToDisplay.zone}</p>
                    <label>Momento de inicio:</label>
                    <p>{jobToDisplay.contractInformation.startingFrom}</p>
                    <label>Horario laboral:</label>
                    <p>{jobToDisplay.contractInformation.workingDays}</p>
                    <label>Tipo de contratación:</label>
                    <p>{jobToDisplay.contractInformation.kindOfContract}</p>
                </Tab>
                <Tab eventKey="skills" title="Habilidades">
                    <br /><br />
                    {skills}
                </Tab>
            </Tabs>
            <br/><hr/>
            <Button variant="primary" size="lg">
                Postularme
            </Button>
        </div>
    );
}
