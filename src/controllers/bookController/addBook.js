const bookModel=require('../../models/bookModel')
const addBook=async (req,res)=>{
    try {
        console.log(req.user)
        const {author,ISBN,title}=req.body
        const ISBNExists=await bookModel.findOne({ISBN})
        if(ISBNExists){
            return res.status(400).json({status:"fail",message:"ISBN has already been taken ,choose another and try !"})
        }
         if (!req.user || !req.user.id) {
           return res
             .status(401)
             .json({
               status: "fail",
               message: "Unauthorized. Please log in and try again.",
             });
         }
        const Books=await bookModel.create({
            ISBN,

                author,
                title,
                bookOwnerId:req.user._id
            
            
        })
        if(!Books){
            return res.status(400).json({
                status:"fail",
                message:"failed to create book"
            })
        }
        res.status(200).json({Books})
    } catch (error) {
        return res.status(500).json({status:"Error",message:"server Error",error:error.message})
    }

}
module.exports=addBook