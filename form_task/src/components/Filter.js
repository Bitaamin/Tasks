import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function () {
    const [getData, setGetData] = useState([])
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) =>

                setGetData(res.data)
            )
            .catch((err) => console.log(err));
    }, [])


    return (
        <div className="container">
            <div className='row'>
                <div>
                    <InputGroup>
                        <DropdownButton
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-3"
                        >

                        </DropdownButton>
                        <Form.Control aria-label="Text input with 2 dropdown buttons" />
                        <DropdownButton
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-4"
                            align="end"
                        >
                            {getData.map((e) => {
                                <Dropdown.Item href="#">{e.name}</Dropdown.Item>
                            })}


                        </DropdownButton>
                    </InputGroup>
                </div>
            </div>
        </div>

    )
}
