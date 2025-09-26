import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    service: { type: String, required: true },
    project_details: { type: String, required: true },
});

const FormModel = mongoose.model("Forms", formSchema);

export default FormModel;