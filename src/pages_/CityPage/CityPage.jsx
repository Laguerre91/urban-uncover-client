import ActivityCard from './../../components/ActivityCard/ActivityCard.jsx'
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm.jsx';
import './CityPage.css'


const CityPage = () => {
  return (
    <section className='CityPage'>
      <AddActivityForm />
      <ActivityCard />
    </section>
  );
};

export default CityPage;