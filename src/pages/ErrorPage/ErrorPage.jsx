import './ErrorPage.css'
import error from './../../assets/images/404.png'

const ErrorPage = () => {

    return (
        <div className='errorPage'>
            <img className='err-img' src={error} alt="404 not found" />
        </div>
    )
}

export default ErrorPage