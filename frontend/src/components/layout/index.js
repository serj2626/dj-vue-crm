import Navbar from './Navbar.vue'
import Footer from './Footer.vue'


const components = [
    {
        name: 'Navbar',
        component: Navbar
    },
    {
        name: 'Footer',
        component: Footer
    }
]


export default {
    install(app) {
        components.forEach(({ name, component }) => {
            app.component(name, component)
        })
    }
}
