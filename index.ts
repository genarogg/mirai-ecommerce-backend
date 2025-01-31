// Limpia la consola
import clear from "console-clear";
clear();

import express from 'express';

const app = express();

import middlewareBasicos from "@config/middlewareBasicos";
middlewareBasicos(app);

import viewEngine from "@config/viewEngine";
viewEngine(app);

import dbConection from "@config/db-conection";
dbConection();

import startApolloServer from "@graphql/graphql";
startApolloServer(app);

import router from "@config/router";
router(app);

import seed from "./src/apiFake/seed";

if (process.env.NODE_ENV !== 'production') {
    seed()
}

import startServer from "@config/startServer";
startServer(app);