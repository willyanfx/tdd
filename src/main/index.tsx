import React from 'react';
import { createRoot } from 'react-dom/client';
import { Login } from '@/ui/pages/login/login';
import '@/ui/styles/global.scss';
import Router from './router';

const container = document.getElementById('main');

const root = createRoot(container);
root.render(
  <div>
    <Router />
  </div>
);
