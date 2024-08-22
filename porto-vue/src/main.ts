import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import emailjs from 'emailjs-com';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
});

emailjs.init('LeFsSeGVXA9OiRBCPmb7Q');
createApp(App).mount('#app')
