const express = require('express');
const app = express();
const Jimp = require("jimp");

app.get('/test', (req, res) => {
    
    
    Jimp.read("lenna.png", (err, lenna) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Error processing image.");
        }
       
        lenna.resize(256, 256);
        
        
        lenna.quality(60);
        
    
        lenna.greyscale();
        
        
        lenna.write("lena-small-bw.jpg", (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send("Error saving image.");
            }
         
            res.send("Image processed and saved successfully.");
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
