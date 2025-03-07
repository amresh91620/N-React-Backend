const p1 = require("../db/connobjpgsql");

// Ensure the function is called properly
const o1 = p1.connObjPgsql();  

const FunctionInsert = async (req, resp) => {
    try {
        const { var1, var2, var3 } = req.body;

        // Check if required fields are missing
        if (!var1 || !var2 || !var3) {
            return resp.status(400).json({ message: "All fields are required!" });
        }

        // Ensure the connection is established
        const client = await o1.connect();

        // Execute query
        await client.query(
            `INSERT INTO public."Users"(user_name, user_email, user_address) 
             VALUES ($1, $2, $3);`,
            [var1, var2, var3]
        );

        // Release the client back to the pool
        client.release();

        resp.status(200).send({ message: "Data inserted successfully" });
    } catch (error) {
        console.error("Error in function:", error);
        resp.status(500).send({ message: "Something went wrong!" });
    }
};


const FunctionSelect = async (_req, resp) => {
    try {
        // Ensure the connection is established
        const client = await o1.connect();

        // Execute query
        const result = await client.query("SELECT * FROM public.\"Users\";");

        // Release the client back to the pool
        client.release();

        resp.json(result.rows);
    } catch (error) {
        console.error("Error executing query:", error);
        resp.status(500).send("Something went wrong!");
    }
};

module.exports = { FunctionInsert, FunctionSelect };
