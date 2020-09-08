const  Skills=require('../../models/skills');
module.exports={
    Query:{
        getSkills:async (obj, args, context, info) => {            
            try {          

                const skillsResult=await Skills.find();
              
                return  {data:skillsResult};

            } catch (err) {
                console.log(err);
                return {errors:err.message}
            }
        }
    }
}
