const  Certifications=require('../../models/certifications');
module.exports={
    Query:{
        getCertifications:async (obj, args, context, info) => {            
            try {          

                const skillsResult=await Certifications.find();
              
                return  {data:skillsResult};

            } catch (err) {
                console.log(err);
                return {errors:err.message}
            }
        }
    }
}
