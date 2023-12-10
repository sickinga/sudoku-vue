import SplashScreen from "./screens/SplashScreen.vue";
import PlayScreen from './screens/PlayScreen.vue';
import GameOverScreen from './screens/GameOverScreen.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: SplashScreen
    },
    {
        path: '/play',
        component: PlayScreen
    },
    {
        path: '/game-over',
        component: GameOverScreen
    }
];

export const router = createRouter({ 
    history: createWebHistory(),
    routes
});