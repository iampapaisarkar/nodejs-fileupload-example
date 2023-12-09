
const upload = async (req, res) => {
    return res.status(400).json(req.files);
}

module.exports = {
    upload
};