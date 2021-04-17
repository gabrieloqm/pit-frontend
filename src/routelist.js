import Home from './pages/Home';
import AppointmentList from './pages/Appointments';

const routes = [
    {
      component: Home,
      name: 'Home',
      path: '/',
    },
    {
      component: AppointmentList,
      name: 'Appointments',
      path: '/appointments',
    },
  ];
  
  export default routes;