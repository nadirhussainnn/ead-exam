const User = require("../models/userSchema");
const path = require("path");
const fs = require("fs");

const displayRegisterPage = async (req, res) => {
  res.render("register");
};

const register = async (req, res) => {
  const { image } = req.files;
  image.mv(path.resolve(__dirname, "../public/images", image.name), (error) => {
    if (!error) {
      User.create({ ...req.body, image: image.name }, (error, doc) => {
        if (!error) {
          res.redirect("/api/displayAllUsersPage");
        } else {
          res.redirect("/api/");
        }
      });
    } else {
      res.redirect("/api/");
    }
  });
};


const displayAllUsersPage = async (req, res) => {
  const users = await User.find();
  res.render("displayAllUsers", { data: users });
};

const deleteUser = async (req, res) => {
    const {id}=req.query
    const deletedUser=await User.findByIdAndRemove(id)
    const data=await Todo.find()
    res.render('displayAllUsers', {data:data})
};

  
const displayUpdatePage = async (req, res) => {
    const {id}=req.query
    const data=await User.findById(id)    
    res.render("update", { data: data });
  };

const update = async (req, res) => {

    const {image}=req.files
    const {id}=req.query

    image.mv(path.resolve(__dirname,'../public/images', image.name),(error)=>{
        if(!error){

            User.findById(id,(error,doc)=>{

                if(!error){
                    const oldImage=path.resolve(__dirname,'../public/images',doc.image)
                    fs.unlinkSync(oldImage)
    
                    User.findByIdAndUpdate(id,{...req.body, image:image.name},(error, doc)=>{
                        if(!error){
                            res.redirect('/api/displayAllUsersPage')
                        }
                        else{
                            res.redirect('/api/updateUser')
                        }
                    })
                }
            })
        }
        else{
            res.redirect('/api/updateUser')
        }
})
};
module.exports = {
  displayRegisterPage,
  displayAllUsersPage,
  register,
  deleteUser,
  update,
  displayUpdatePage
};
