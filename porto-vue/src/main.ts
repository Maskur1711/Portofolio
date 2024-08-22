import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import emailjs from 'emailjs-com';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    duration: 1000, // Duration of animation in milliseconds
    easing: 'ease-in-out', // Easing function
    once: true, // Whether animation should happen only once
});

emailjs.init('LeFsSeGVXA9OiRBCPmb7Q');
createApp(App).mount('#app')
