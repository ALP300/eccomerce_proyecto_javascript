import { Pool, Client } from "pg";

export const Pool = new Pool({
    user: "db_javascript_user",
    password: "1Ny8YJ4H60RKfLGweNHWc7DQV2T3FcRM",
    host: "dpg-d7olpd9o3t8c7383b0gg-a.oregon-postgres.render.com",
    port: 5432,
    database: "db_javascript",
    ssl:{
        rejectUnauthorized: false
    }
})