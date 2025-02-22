import User from '../model/user-schema.js';
export const userSignup = async (req, res) => {
    try{
        console.log(req.body);
        
        const exist = await User.findOne({username: req.body.username});
        if (exist){
            return req.status(401).json({massage: 'Username already exist'});
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({massage:user});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}
export const userLogin = async (req,res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        let user = await User.findOne({ username: username, password: password});
        if(user){
            return res.status(200).json({data : user});
        }else{
            return res.status(401).json(`Invalid login`);
        }
    } catch (error) {
        res.status(500).json('Error', error.message);
        return error.res;
    }
}