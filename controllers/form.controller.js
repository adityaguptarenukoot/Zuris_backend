import FormModel from "../models/form.model.js";
import { sendMail } from "../template/sendMail.js";
import { sendMailAdmin } from "../template/sendMailToAdmin.js";

export const formSubmit = async (req, res) => {
    const {fullname, email, company, service, project_details, phoneNumber} = req.body;
    try {
        if(!fullname || !email || !company || !service || !project_details || !phoneNumber){
            return res.status(400).json({
                success: false,
                message: "Missing Data"
            })
        };

        await sendMail(email, `Thank you ${fullname} for contacting us. We will get back to you shortly.`,
            fullname, email, company, service, project_details
        );
        await sendMailAdmin(
            `New Form Submission from ${fullname}`,
            fullname, email, company, service, project_details,phoneNumber
        )
        return res.status(201).json({
            success: true,
            message: "Email Sent Successfully" 
        })
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({
                succes: false,
                message: error.message
            })
        }
    }
}