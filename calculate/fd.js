
const app = express();
const port = 5000;

app.use(express.json());

const pool = new Pool({
    user: "postqres",
    host: "localhost",
    database: "studentdb",
    password: "password",
    port: 5432,
});

app.get("/create-table", async(req,res)=>{
    try{
        awat pool.query(`CREATE TABLE students (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            age INT,
            major VARCHAR(100)
        )`);
        res.send("Table created successfully");
    }
})