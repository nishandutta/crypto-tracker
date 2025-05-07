# Crypto Tracker

## Overview
This project is a responsive React application that tracks real-time cryptocurrency prices, simulating WebSocket updates and managing all state via Redux Toolkit. The app displays a table of cryptocurrency assets, including their prices, percentage changes, market cap, and more.

## Features
- Displays real-time prices for 5 cryptocurrencies (e.g., BTC, ETH, USDT).
- Responsive UI with a color-coded percentage change display.
- Simulated WebSocket updates every 1-2 seconds.
- Redux Toolkit for state management.
- Static 7-day price chart (used React-chart with random value for static 7 day chart)

## Tech Stack
- **Frontend**: React, Redux Toolkit, CSS
- **State Management**: Redux Toolkit
- **Styling**: CSS (or any preferred styling library)
- **Data Simulation**: setInterval for simulating WebSocket updates

## Setup Instructions
 **Clone the repository**:
   ```bash
   git clone https://github.com/nishandutta/crypto-tracker
   cd crypto-tracker
   npm start
