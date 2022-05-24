//ODM CRUD ops
Todo.create({...req.body,image:image.name},(error, item)=>{
Todo.findByIdAndUpdate(id,{description:description,image:image.name},(error, doc)=>{
const deletedItem=await Todo.findByIdAndRemove(id)


//Rendreing table in EJS
<% for(let i=0;i<data.length;i++){%>
    <tr>
        <td><%= i+1 %></td>
        <td><%= data[i].description %></td>
        <td>
            <img src=<%= '/images/'+data[i].image %> alt="Could not load" width="100px"></td>
        <td>
            <a href=<%= "/api/deleteItem?id="+data[i]._id %> class="del-link">Delete</a>
            <a href=<%= "/api/updateItem?id="+data[i]._id %> class="update-link">Update</a>
        </td>
    </tr>
    <% } %>




//Image Code

image.mv(path.resolve(__dirname,'../public/images', image.name),(error)=>{
        if(!error){

            Todo.findById(id,(error,doc)=>{
                console.log(doc)

                if(!error){
                    const oldImage=path.resolve(__dirname,'../public/images',doc.image)
                    fs.unlinkSync(oldImage)
    
                    Todo.findByIdAndUpdate(id,{description:description,image:image.name},(error, doc)=>{
                        if(!error){
                            res.redirect('/api/viewAllTodos')
                        }
                        else{
                            res.redirect('/api/updateItem')
                        }
                    })
                }
            })
        }
        else{
            res.redirect('/api/updateItem')
        }
})

//Password encode

UserSchema.pre("save",function(next){
    const user = this;
    bcrypt.hash(user.password,5,function(error,hash){
        if(!error){
            user.password=hash;
            next();
        console.log(user.password)
        }else{
            console.log(error);
            //res.redirect('/register')
        }
        
    })
})


//bcrypt compare

const login=async(req, res)=>{

const {username, password}=req.body
const data=await User.findOne({username:username})

if(data){
    bcrypt.compare(password, data.password, (err, result)=>{
        if(!err && result){  
            if(data.userType==='vendor'){
                res.render('users/vendorDashboard',{data:data})
            }
            else{
                res.render('users/customerDashboard', )
            }
        }
        else{
            res.redirect('/users/displayLoginPage')
        }
    })
}
else{
    res.redirect('/users/displayLoginPage')
}
}


//Exporting atlas DB
mongoexport --uri atlas_url --collection='collection name' --out='outputfile'.json
