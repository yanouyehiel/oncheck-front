import React, { useContext } from "react";
//import axios from 'axios';
import { useState } from 'react';
import Auth from "../contexts/Auth";
import { login } from "../services/AuthApi";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const { isAuthenticated, setIsAuthenticated } = useContext(Auth);
    let { navigate } = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setUser({...user, [name]: value})
    }
    const handleSubmit = async e => {
        e.preventDefault()
        
        try {
            const response = await login(user);
            setIsAuthenticated(response);
            navigate('/profile');
        } catch ({ response }) {
            setError(true)
            setErrorMessage(response)
        }
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="col-form-label">Email</label>
                                <input type="text" className="form-control" onChange={handleChange} name='email' required />
                            </div>
                            <div className="form-group">
                                <label className="col-form-label">Password</label>
                                <input type="password" className="form-control" onChange={handleChange} name='password' required />
                            </div>
                            <div className="sub-w3l">
                                <div className="custom-control custom-checkbox mr-sm-2">
                                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                                    <label className="custom-control-label" for="customControlAutosizing">Se souvenir de moi ?</label>
                                </div>
                            </div>
                            {error && <span className='text-align bold text-danger'>{errorMessage}</span>}
                            <div className="right-w3l">
                                <input type="submit" className="form-control" value="Se connecter" />
                            </div>
                            <div class="footer-grids w3l-socialmk mt-3">
                                <h3 class="font-weight-bold mb-3">Se connecter avec</h3>
                                <div class="social">
                                    <ul>
                                        <li>
                                            <a class="icon fb" href="https://www.facebook.com/OnCheck-Comparateur-de-prix-108506331692864/?ref=page_internal">
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="icon gg" href="https://www.linkedin.com/company/oncheck/">
                                                <i class="fab fa-google"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;