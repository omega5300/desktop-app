/* -------------------------------------------------------------------------
 *  IMPORTACION DE MODULOS DE NPM   
------------------------------------------------------------------------- */
import { app, BrowserWindow } from "electron";
import electronReload from "electron-reload";

/* -- Modulos internos de node.js -- */

/* -------------------------------------------------------------------------
 *	COMIENZO DE LA APP
------------------------------------------------------------------------- */
let userLoginStatus: boolean = false;

let homeWindow = null;
let loginWindow = null;
let registerWindow = null;

app.on("ready", () => {
  homeWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
});
