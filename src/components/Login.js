import React from "react";
//import axios from 'axios';
import { useState, useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = [email, password];
        console.log(data)
    }

    return (
        <div className="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-center">Connexion</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="form-group">
                                <label className="col-form-label">Email</label>
                                <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Password</label>
                                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
                            </div>
                            <div className="sub-w3l">
                                <div className="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                    <label className="custom-control-label" for="customControlAutosizing">Se souvenir de moi ?</label>
                                </div>
                            </div>
                            <div className="right-w3l">
                                <input type="submit" className="form-control" value="Se connecter" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;