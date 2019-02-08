// ======================================
//	NeoReact
//  Routes
//  Copyright (c) 2019 NeoWare, Inc. All rights reserved.
// ======================================
// jshint esversion: 6 

import MainPage from "Main/Main.jsx";
import LandingPage from "Main/LandingPage.jsx";

var indexRoutes = [
  { path: "/landing", name: "LandingPage", component: LandingPage },
  { path: "/", name: "MainPage", component: MainPage }
];

export default indexRoutes;
