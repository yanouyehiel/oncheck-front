import React from "react";
import axios from 'axios';
import { useState, useContext } from 'react';
import Auth from "../contexts/Auth";

const Register = () => {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [naissance, setNaissance] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [telephone, setTelephone] = useState('');
    const [error, setError] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (password !== confirmPass && !error) {
            setError(true);
        } else {
            axios
                .post('http://localhost:8000/api/register', {
                    nom: nom,
                    prenom: prenom,
                    date_naissance: naissance,
                    email: email,
                    password: password,
                    telephone: telephone
                })
                .then((res) => {
                    console.log(res);
                    setNom('');
                    setPrenom('');
                    setNaissance('');
                    setEmail('');
                    setPassword('');
                    setTelephone('');
                })
                .catch((res) => {
                    setError(true);
                    console.log(res)
                })
            ;
        }
    }
    
    return(
        <div className="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Inscription</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="col-form-label">Nom*</label>
                                <input type="text" onChange={(e) => setNom(e.target.value)} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Prénom*</label>
                                <input type="text" onChange={(e) => setPrenom(e.target.value)} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Email*</label>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Telephone</label>
                                <input type="text" onChange={(e) => setTelephone(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Date de naissance</label>
                                <input type="date" onChange={(e) => setNaissance(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Password*</label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Confirmer le Password*</label>
                                <input type="password" onChange={(e) => setConfirmPass(e.target.value)} className="form-control" required />
                            </div>
                            <div className="sub-w3l">
                                <div className="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing2" required />
                                    <label className="custom-control-label" for="customControlAutosizing2">J'accepte les Termes & Conditions de OnCheck</label>
                                </div>
                            </div>
                            <div className="right-w3l">
                                <input type="submit" className="form-control" value="S'inscrire" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;