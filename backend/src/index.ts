import { App } from "./app";

async function Main(){
    const app = new App();
    await app.Listen();
}

Main();