if(req.url==='/'){
        fs.readFileS('example.txt','utf8', (err,data)=>{
            if(err){
                res.end(err);
                return;
            }
            res.end(data);
        })
    }