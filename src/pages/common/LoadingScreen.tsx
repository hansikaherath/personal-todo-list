import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

export default function loadingScreen(props: any) {
    return     (<Modal
        {...props}
        show={true}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Body>
            <div className={"d-flex flex-direction-column justify-content-center align-items-middle"}>
                <div className={"p-2 "}><Spinner animation="border" /></div> <p className={"p-2 align-self-center"}>Please wait</p>
            </div>
        </Modal.Body>
    </Modal>);
}