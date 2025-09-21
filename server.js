import express from "express"; 
import cors from "cors"; 
import { v4 as uuidv4 } from 'uuid'; 

const app = express(); 
// const PORT = process.env.PORT || 3000;
const PORT = 3000; 

app.use(cors()); 
app.use(express.json());

// temp storage 
let prayers = []; 

// Post Route for Prayers
app.post("/api/prayers", (req, res) => {
    // console.log('Prayers Received:', req.body); 
    const newPrayer = {
        id: uuidv4(), // Generates a unique ID
        name: req.body.name,
        email: req.body.email,
        request: req.body.request,
        dateRaw: isoDate.toISOString(), // ISO 8601 standard
        dateFormatted: isoDate.toLocaleString("es-MX", {
          dateStyle: "short",
          timeStyle: "short"
        }),
        urgency: req.body.urgency,
        createdAt: new Date().toISOString()
    }

    // add prayer
    prayers.push(newPrayer);
    console.log("Prayers Received:", newPrayer); 

    res.status(201).json({message: 'Prayer saved Successfully', data: newPrayer}); 
}); 

// GET route to fetch all prayers 
app.get('/api/prayers', (req, res) => {
    res.json({ message: "Fetch all prayers", data: prayers}); 
}); 

// DELETE route  
app.delete("/api/prayers/:id", (req, res) => {
    prayers = prayers.filter(p => p.id !== req.params.id);
    res.json({ message: "Prayer deleted", id: req.params.id });
});

// spin up server
app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
})