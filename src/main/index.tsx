import { createRoot } from 'react-dom/client';
import React from 'react';

const container = document.getElementById('main');

const root = createRoot(container);
root.render(<div>Hello world</div>);
