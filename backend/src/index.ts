import { App } from "./app";
import express from "express";

async function Main(){
    const app = new App();
    await app.Listen();
}

Main();