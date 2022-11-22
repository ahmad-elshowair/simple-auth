import pkg from "pg";
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pkg;

const client = new Pool();

export default client;
