# FlightProject ✈️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/github/workflow/status/MahmoudHassan256/FlightProject/CI)](https://github.com/MahmoudHassan256/FlightProject/actions)
[![Made with ♥ by Mahmoud Hassan](https://img.shields.io/badge/Made%20with-%E2%99%A5%20by%20Mahmoud%20Hassan-blueviolet)](https://github.com/MahmoudHassan256)

## Overview

**FlightProject** is a robust, full-stack platform aimed at transforming how individuals plan and manage travel during challenging times, such as the COVID-19 pandemic. With integrated datasets, modular backend and frontend architecture, and seamless user experience, this project solves real-world problems in the travel industry.

## Features

- 🛫 **Flight Management:** Real-time search, booking, and user authentication.
- 🦠 **COVID-19 Integration:** Live statistics, travel advisories, and safety protocols.
- 👨‍💼 **User Profiles:** Secure, personalized travel history and recommendations.
- 📊 **Intelligent Data Processing:** JSON-based handling for flights, COVID-19 regulations, and user data.
- 🌐 **Responsive Web Application:** Modern UX/UI tailored for every device.
- 🔒 **Security Best Practices:** Proper data handling and secure authorization flows.

## Tech Stack

- **Backend:** Node.js, Express  
  Located in: [`travel-during-covid-backend`](./travel-during-covid-backend)
- **Frontend:** React.js  
  Located in: [`travel-during-covid-frontend`](./travel-during-covid-frontend)
- **Data Sources:** Multiple JSON datasets
    - [`flights.json`](./flights.json): Flight and travel data
    - [`covid.json`](./covid.json): COVID-19 stats and rules
    - [`users.json`](./users.json): User data store
- **Multimedia:** Demo video – [`welcome to our Website.mp4`](./welcome%20to%20our%20Website.mp4)

## Demo

Check out a quick introduction:  
[Watch the demo](./welcome%20to%20our%20Website.mp4)

## Quickstart

1. **Clone the repository**
    ```bash
    git clone https://github.com/MahmoudHassan256/FlightProject.git
    cd FlightProject
    ```

2. **Install dependencies**
    ```bash
    cd travel-during-covid-backend && npm install
    cd ../travel-during-covid-frontend && npm install
    ```

3. **Run backend**
    ```bash
    cd travel-during-covid-backend
    npm start
    ```

4. **Run frontend**
    ```bash
    cd ../travel-during-covid-frontend
    npm start
    ```

## Folder Structure
