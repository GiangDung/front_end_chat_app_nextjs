"use client";
import * as signalR from "@microsoft/signalr";
import "./css/main.css";
import { useState, FormEvent } from "react";

export default function Homepage() {
  const connection = new signalR.HubConnectionBuilder().withUrl("http://localhost:5294/chat").build();
  connection.on("ReceiveMessage", (username: string, message: string) => {
    console.log("Hello ");
  });

}
