import React from "react";
import { useState, useContext } from 'react';
import Auth from "../contexts/Auth";
import { register } from "../services/AuthApi";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    let { navigate } = useNavigate();
    const [user, setUser] = useState({
        nom: '',
        prenom: '',
        email: '',
        date_naissance: '',
        password: '',
        cpassword: '',
        telephone: ''
    })

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setUser({...user, [name]: value})
    }
    const handleSubmit = async e => {
        e.preventDefault()
        
        try {
            if (user.password !== user.cpassword) {
                setError(true)
                setErrorMessage('Les mots de passe ne correspondent pas')
            } else {
                if (user.password.length >= 8) {
                    const response = await register(user);
                    setIsAuthenticated(response);
                    console.log(response);
                    navigate('/home');
                } else {
                    setError(true)
                    setErrorMessage('Le mot de passe doit avoir au moins 8 caracteres.')
                }
            }
        } catch ({ response }) {
            setError(true)
            setErrorMessage(response)
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
                                <input type="text" onChange={handleChange} name='nom' className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Prénom*</label>
                                <input type="text" onChange={handleChange} name='prenom' className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Email*</label>
                                <input type="email" onChange={handleChange} name='email' className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Telephone</label>
                                <input type="text" onChange={handleChange} name='telephone' className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Date de naissance</label>
                                <input type="date" onChange={handleChange} name='date_naissance' className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Password*</label>
                                <input type="password" onChange={handleChange} name='password' className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Confirmer le Password*</label>
                                <input type="password" onChange={handleChange} name='cpassword' className="form-control" required />
                            </div>
                            <div className="sub-w3l">
                                <div className="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing2" required />
                                    <label className="custom-control-label" for="customControlAutosizing2">J'accepte les Termes & Conditions de OnCheck</label>
                                </div>
                            </div>
                            {error && <span className='text-align bold text-danger'>{errorMessage}</span>}
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