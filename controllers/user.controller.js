const User =require('../models/user.model')



const getUsers = async (req,res)=>{
    try{

        let users = await User.find({})
        let Reduceduser = users.map((u)=>{
            const {name} = u ;
            return {name , } 
        })
        res.status(200).json(Reduceduser)
    }
    catch(e){
        console.log(e)
        res.status(400).json({error:e})
    }
}


const getuser = async (req,res)=>{
    try{

        let user = await User.findById(req.params.id);
        
        if(!user){
            res.status(404).json({message:"User not Found"})

        }
        else{

            res.status(200).json(user)
        }

    }
    catch(e){
        console.log(e)
        res.status(400).json({error:e.message})
    }
}

const postUser = async (req,res)=>{
    try{

        const user = await User.create(req.body)
        res.status(200).json(user)

    }
    catch(e){
        console.log(e)
        res.status(400).json({error:e})
    }
}

const putUser = async (req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id , req.body) ;
        if (!user){
            res.status(404).json({message:"Product Not Found"})
        }
        else{
            console.log(user,"........")
            res.status(200).send({message:"Successfully updated"})
        }


    }
    catch(e){
        res.status(400).json({error:e.message})
    }
}


const deleteUser = async(req,res)=>{
    console.log("Here")
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(user){
            res.status(200).json({user:user})
        }
        else{
            res.status(404).json({message:"user Not Found"})

        }
                    // res.status(200).json({message:"Succeess"})

    }
    catch(e){
        res.status(400).json({error:e.message})

    }

}

module.exports = {getUsers , getuser , postUser , putUser , deleteUser}

