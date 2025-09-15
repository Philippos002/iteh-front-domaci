// src/router/index.js

import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "@/views/AboutUs.vue";
import HomePage from "@/views/HomePage.vue";
import LogInPage from "@/views/LogInPage.vue";
import MoviePage from "@/views/MoviePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import SignInPage from "@/views/SignInPage.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import SignUpForm from "@/components/SignUpForm.vue";
import LogInForm from "@/components/LogInForm.vue";
import MovieList from "@/views/MovieList.vue";



const routes = [
  { path: '/', name: 'Home', component: HomePage},
  { path: '/footer', name: 'Footer', component: Footer},
  { path: '/header', name: 'Header', component: Header},
  { path: '/about-us', name: 'AboutUs', component: AboutUs},
  { path: '/sign-in', name: 'SignIn', component: SignInPage},
  { path: '/log-in', name: 'LogIn', component: LogInPage},
  // Ovde ce biti ruta /profile-naziv-profila kasnije kada budemo imali profile (npr samo tvoj i moj) (kada se prijavis i kada kliknes na tudji profil)
  { path: '/profile', name: 'Profile', component: ProfilePage},
  // Ovde ce biti ruta /movie-naziv-filma kasnije akda budemo imali filmove (iz baze naravno)
  { path: '/movie', name: 'Movie', component: MoviePage},
  { path: '/sign-up-form', name: 'SignUpForm', component: SignUpForm},
  { path: '/log-in-form', name: 'LogInForm', component: LogInForm},
  { path: '/movie-list', name: 'MovieList', component: MovieList},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
