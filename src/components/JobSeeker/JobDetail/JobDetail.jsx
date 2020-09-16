import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'moment';
import { Tabs, Tab, Table, Button } from 'react-bootstrap';
import { loginRequired } from '../../../redux/Account/LoginActions';
import { jobDetailPostulationError, jobDetailPostulationSuccess, jobDetailPostulating } from '../../../redux/Job/JobDetailActions';
import postData from '../../../repositories/common/postData';

export default function JobDetail() {

    const jobToDisplay = useSelector(state => state.JobDetailState.jobDetailObject);

    const isLoggedInSuccessfully = useSelector(state => state.LoginState.loggedInSuccessfully);

    const isJobDetailPostulating = useSelector(state => state.JobDetailState.jobDetailPostulating);

    const token = sessionStorage.getItem("token");

    const floatLeft = {
        float: 'left'
    }

    const clear = {
        clear: 'both'
    }

    const language = jobToDisplay.language !== null ? (
        <div>
            <strong>Idioma:</strong>
            <p>{jobToDisplay.language}</p>
            <strong>Nivel:</strong>
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
                    <tr key={item.skill.name}>
                        <td>{item.skill.name}</td>
                        <td>{item.years}</td>
                        <td>{item.isMandatory ? "Si" : "No"}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );

    const details = (
        <div>
            <div style={floatLeft}>
                {language}
                <strong>Zona:</strong>
                <p>{jobToDisplay.zone}</p>
                <strong>Momento de inicio:</strong>
                <p>{jobToDisplay.contractInformation.startingFrom}</p>
            </div>
            <div>
                <strong>Horario laboral:</strong>
                <p>{jobToDisplay.contractInformation.workingDays}</p>
                <strong>Tipo de contratación:</strong>
                <p>{jobToDisplay.contractInformation.kindOfContract}</p>
            </div>
        </div>
    );

    const dispatch = useDispatch();

    const handlePostulation = (event) => {

        if(!isLoggedInSuccessfully){

            dispatch(loginRequired);
        }
        else {

            const postulate = async () =>{

                const data = await postData('/person/applytojoboffer/'+ jobToDisplay.id,null,()=> dispatch(jobDetailPostulationError), token);

                if(typeof data !== "undefined" ){

                    if (data.status !== 200){
                        dispatch(jobDetailPostulationError);
                    }
                    else
                    {
                        dispatch(jobDetailPostulationSuccess);
                    }
                }
            }

            if(!isJobDetailPostulating) {
                dispatch(jobDetailPostulating);
                postulate();
            }
        }
    }

    return (
        <div className="page-header">
            <h1>{jobToDisplay.title}</h1>
            <small>{jobToDisplay.company.name} - Publicado {Moment(jobToDisplay.date).format('d MMM')}</small>
            <br /><br />
            <Tabs defaultActiveKey="desc" id="uncontrolled-tab-example">
                <Tab eventKey="desc" title="Descripción">
                    <br /><br />
                    <p>{jobToDisplay.description}</p>
                </Tab>
                <Tab eventKey="det" title="Detalles">
                    <br /><br />
                    {details}
                </Tab>
                <Tab eventKey="skills" title="Habilidades">
                    <br /><br />
                    {skills}
                </Tab>
            </Tabs>
            <div style={clear}>
                <br /><hr />
                <Button variant="primary" size="lg" onClick = {handlePostulation}>
                    Postularme
                </Button>
            </div>
        </div>
    );
}
