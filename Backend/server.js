import ytdl from "ytdl-core";
import express from "express";
import axios from "axios";
import cors from "cors"
import cheerio from "cheerio";
import fs from "fs";

const app = express();

app.use(cors())

app.use(express.urlencoded({ extended: true }));

app.post("/api/send", (req, res) => {
    console.log("Server hit");
    const url = req.body.url;
    console.log(url);
    // axios.get(url)
    //     .then((response) => {
    //         const html = response.data
    //         const $ = cheerio.load(html)
    //         const title = $("head").find("title").text();
    //         return title;
    //     }).then((title) => {
    //         const audio = ytdl(url, { quality: 'highestaudio' });
    //         res.setHeader("Content-Type", "audio/mpeg");
    //         res.setHeader(`Content-Disposition`, `attachment; filename=${title.toString().slice(0,50)}.mp3`);
    //         audio.pipe(res);
    //         res.send("Received")
    //         audio.on("finish", () => {
    //             console.log("Piped!!!!!")
    //         })
    //     })
    const getAudio=async ()=>{
        const response = await axios.get(url)
        const html = response.data
        const $ = cheerio.load(html)
        const title = $("head").find("title").text();
        res.setHeader("Content-Type", "audio/mpeg");
        res.setHeader(`Content-Disposition`, `attachment; filename=${title.toString().slice(0,50)}.mp3`);
        const audio = ytdl(url, { quality: 'highestaudio' });
        await audio.pipe(fs.createWriteStream(`video.mp3`))
        res.download('video.mp3',`${title}.mp3`)
        // audio.pipe(res);
        audio.on("finish", () => {
            console.log("Piped!!!!!")
        })
        audio.on("error",(err)=>{
            console.log("Error: "+err);
        })
    }
    getAudio();
})

app.listen(3000, (err) => {
    if (err) console.log("Error");;
    console.log("The server is up and running.")
})