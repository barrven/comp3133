const csv = require('csv-parser');
const fs = require('fs');

//delete files if they exist
let files = ['canada.txt', 'usa.txt'];
files.forEach(file =>{
    if(fs.existsSync(file)){
        fs.unlink(file, err =>{
            if(err) console.log(err)
            else console.log(`Deleted ${file}`)
        })
    }
})

//read the csv
const csvFile = 'input_countries.csv'
const header = 'country,year,popuation\n'

// write the headers to the file
fs.appendFile(files[0], header, err => {
    if (err) console.log(err)
})
fs.appendFile(files[1], header, err => {
    if (err) console.log(err)
})

fs.createReadStream(csvFile)
    .pipe(csv())
    .on('data', (row) => {

        //add appropriate line to file
        if(row.country == 'Canada'){
            fs.appendFile('canada.txt', `${row.country},${row.year},${row.population}\n`, err=>{
                if(err) console.log(err)
            })
        }
        else if (row.country == 'United States'){
            fs.appendFile('usa.txt', `${row.country},${row.year},${row.population}\n`, err => {
                if (err) console.log(err)
            })
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
