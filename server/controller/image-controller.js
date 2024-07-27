import File from "../models/file.js";


export const uploadImage = (request, response) => {
    const fileObj = {
        path request.file.path,
        name: request.file.orginalname
    }
    try {
        const file = await File.create(fileObj);
        console.log(file)
         response.status(200).json({ path})
    } catch (error) {
    console.error(error.message);
    }
}