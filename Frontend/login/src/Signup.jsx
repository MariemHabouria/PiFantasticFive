import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React from "react";
import './Signup.css'; // Assurez-vous d'inclure ce fichier CSS pour les styles

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidat", // Par défaut "candidat"
    matriculeFiscale: "", // Nouveau champ pour "Entreprise"
    adresse: "", // Nouveau champ pour "Entreprise"
    type: "" // Nouveau champ pour "Entreprise"
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Fonction pour mettre à jour l'état du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation des champs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    // Validation des champs pour "Entreprise"
    if (formData.role === "entreprise") {
      if (!formData.matriculeFiscale) newErrors.matriculeFiscale = "Matricule Fiscale is required.";
      if (!formData.adresse) newErrors.adresse = "Adresse is required.";
      if (!formData.type) newErrors.type = "Type is required.";
    }

    return newErrors;
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    axios.post('http://localhost:3001/Frontend/register', formData)
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h2 className="signup-header">Register</h2>

        <form onSubmit={handleSubmit}>
          {/* Champ pour le role placé en haut */}
          <div className="input-group mb-3">
            <label htmlFor="role" className="form-label">
              <strong>Role</strong>
            </label>
            <select
              name="role"
              className="form-select"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="candidat">Candidat</option>
              <option value="entreprise">Entreprise</option>
            </select>
          </div>

          {/* Champs pour name, email et password sous le role */}
          <div className="input-group mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="input-group mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="input-group mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              name="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          {/* Champs spécifiques à l'Entreprise */}
          {formData.role === "entreprise" && (
            <>
              <div className="input-group mb-3">
                <label htmlFor="matriculeFiscale" className="form-label">
                  <strong>Matricule Fiscale</strong>
                </label>
                <input
                  type="text"
                  id="matriculeFiscale"
                  name="matriculeFiscale"
                  className={`form-control ${errors.matriculeFiscale ? 'is-invalid' : ''}`}
                  value={formData.matriculeFiscale}
                  onChange={handleChange}
                />
                {errors.matriculeFiscale && <div className="invalid-feedback">{errors.matriculeFiscale}</div>}
              </div>

              <div className="input-group mb-3">
                <label htmlFor="adresse" className="form-label">
                  <strong>Adresse</strong>
                </label>
                <input
                  type="text"
                  id="adresse"
                  name="adresse"
                  className={`form-control ${errors.adresse ? 'is-invalid' : ''}`}
                  value={formData.adresse}
                  onChange={handleChange}
                />
                {errors.adresse && <div className="invalid-feedback">{errors.adresse}</div>}
              </div>

              <div className="input-group mb-3">
                <label htmlFor="type" className="form-label">
                  <strong>Type</strong>
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  className={`form-control ${errors.type ? 'is-invalid' : ''}`}
                  value={formData.type}
                  onChange={handleChange}
                />
                {errors.type && <div className="invalid-feedback">{errors.type}</div>}
              </div>
            </>
          )}

          <button type="submit" className="btn-submit">
            Register
          </button>
        </form>

        <div className="signup-footer">
          <p>Already Have an account?</p>
          <Link to="/login" className="btn-link">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
