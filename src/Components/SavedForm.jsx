import { connect } from "react-redux";
// import { useSelector } from "react-redux"


const SavedForms = ({ formDataRedux }) => {

    // const formDataRedux = useSelector((state) => state.form)
    const allForms = formDataRedux

    return (
        <>
           {
            allForms.map(
                (form, index) => (
                    <div>
                        <h3> Form {index+1}</h3>
                        <p>First Name: {form.firstName}</p>
                        <p>Last Name: {form.lastName}</p>
                        <p>First Name: {form.firstName}</p>
                        <p>First Name: {form.firstName}</p>
                        <p>First Name: {form.firstName}</p>
                        <p>First Name: {form.firstName}</p>
                        <p>First Name: {form.firstName}</p>
                        <p>First Name: {form.firstName}</p>
                    </div>
                )
            )
           }
        </>
    )
}

const mapStateToProps = (state) => ({
    formDataRedux: state.form
})

export default connect(mapStateToProps)(SavedForms);
// export default SavedForms