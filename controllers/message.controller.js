export const sendMessage = (req, res) => {
   try {
    const {message} = req.body;
    const {id} = req.params;
    const senderId = req.userId;


   } catch (error) {
    console.log('error in sendMessage controller', error.message);
    res.status(500).json({message: "Server error"})
   }
    
}



 