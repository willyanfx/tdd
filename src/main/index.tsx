import { createRoot } from 'react-dom/client';
import React from 'react';
import { Login } from '@/ui/pages/login/login';
import '@/ui/styles/global.scss';

const container = document.getElementById('main');

const root = createRoot(container);
root.render(
  <div>
    <Login />
  </div>
);
