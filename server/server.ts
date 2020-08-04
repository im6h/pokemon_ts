import app from "./src/app";

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`
    ✅ Server running on port: ${PORT} 
  `);
});
