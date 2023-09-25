import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { saveForm } from "../Actions/actions";


const Form = ({ saveForm }) => {

    const [selectedCity, setSelectedCity] = useState('');
    const allCities = ["Delhi", "Mumbai", "Pune", "Bangalore", "Hyderabad"]
    const [checkboxes, setCheckboxes] = useState(
        {
            Communication : false,
            CriticalThinking: false,
            ProblemSolving: false,
            Initiative: false
        }
    )
    const [selectedRadio, setSelectedRadio] = useState('')
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        photo: '',
        gender: '',
        gender: '',
        email: '',
        mobile: '',
        dob: '',
        city: '',
        skills: [],
    })

    function handleInputChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleCityChange(event) {
        setSelectedCity(event.target.value);
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    function handleRadioChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
        setSelectedRadio(e.target.value)
        
    }

    function handleCheckbox(e) {
        const { name, checked } = e.target;
        setCheckboxes({
            ...checkboxes,
            [name] : checked
        })
        if (e.target.checked) {
            // setSelectedSkills([...selectedSKills, e.target.name])
            setFormData({ ...formData, skills: [...formData.skills, e.target.name] })
        } else {
            // setSelectedSkills(selectedSKills.filter( selectedSkill => selectedSkill !== e.target.name))
            setFormData({ ...formData, skills: formData.skills.filter(skill => skill !== e.target.name) })
        }
    }

    function handleSaveData() {
        saveForm(formData)
        handleReset()
    }

    function handleReset() {
        setFormData(
            {
                firstName: '',
                lastName: '',
                photo: '',
                gender: '',
                gender: '',
                email: '',
                mobile: '',
                dob: '',
                city: '',
                skills: [],
            })
        setSelectedCity('')
        setCheckboxes({
            Communication : false,
            CriticalThinking: false,
            ProblemSolving: false,
            Initiative: false
        })
        setSelectedRadio('');
    }

    useEffect(() => {},[checkboxes])

    return (
        <>
            {showForm && <form className="form">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label htmlFor="photo">Photo</label>
                    <input id="photo" name="photo" type="image" value={formData.photo} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label >Gender: </label>
                    <div>
                        <label htmlFor='male'>Male</label>
                        <input type="radio" name="gender" id="male" value="male" onChange={handleRadioChange} checked={selectedRadio === 'male' }></input>
                    </div>
                    <div>
                        <label htmlFor='female'>Female</label>
                        <input type="radio" name="gender" id="female" value="female" onChange={handleRadioChange} checked={selectedRadio === 'female'}></input>
                    </div>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' name="email" value={formData.email} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label htmlFor="mobile">Mobile Number</label>
                    <input type="number" id="mobile" name="mobile" value={formData.mobile} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label htmlFor="dob"> Date of Birth</label>
                    <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleInputChange}></input>
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <select id="city" name="city" value={selectedCity} onChange={handleCityChange}>
                        <option key={'selectCity'} >Select City</option>
                        {
                            allCities.map(city =>
                                (<option key={city}>{city}</option>)
                            )
                        }
                    </select>
                </div>
                <div>
                    <label>Professional Skills</label>
                    <div>
                        <label htmlFor="Communication">Communication</label>
                        <input type="checkbox" id="Communication" name="Communication" value='Communication' onChange={handleCheckbox} checked={checkboxes.Communication}></input>
                    </div>
                    <div>
                        <label htmlFor="CriticalThinking">CriticalThinking</label>
                        <input type="checkbox" id="CriticalThinking" name="CriticalThinking" value='CriticalThinking' onChange={handleCheckbox} checked={checkboxes.CriticalThinking}></input>
                    </div>
                    <div>
                        <label htmlFor="ProblemSolving">ProblemSolving</label>
                        <input type="checkbox" id="ProblemSolving" name="ProblemSolving" value='ProblemSolving' onChange={handleCheckbox} checked={checkboxes.ProblemSolving}></input>
                    </div>
                    <div>
                        <label htmlFor="Initiative">Initiative</label>
                        <input type="checkbox" id="Initiative" name="Initiative" onChange={handleCheckbox} checked={checkboxes.Initiative}></input>
                    </div>
                </div>
            </form>
            }

            {/* {showForm && <Form />} */}

            <div className='d-flex justify-content-center'>
                <button onClick={() => setShowForm(!showForm)}> {showForm ? "HIDE FORM" : "ADD"} </button>
                <button >UPDATE</button>
                <button>DELETE</button>
                <button onClick={handleReset}>RESET</button>
                <button onClick={handleSaveData}>SAVE</button>
            </div>

        </>
    )
}

const mapStateToProps = (state) => ({
    formDataRedux: state.form,
})

export default connect(mapStateToProps, { saveForm })(Form)