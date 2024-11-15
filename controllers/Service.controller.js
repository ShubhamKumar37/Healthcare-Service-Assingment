const Service = require("../models/Service.model");

exports.createService = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Service name is required", success: false });
        }
        if (!description) {
            return res.status(400).json({ message: "Service description is required", success: false });
        }
        if (!price) {
            return res.status(400).json({ message: "Service price is required", success: false });
        }

        const service = await Service.create({ name, description, price });

        return res.status(201).json({ message: "Service created successfully", success: true, data: service });
    }
    catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
}

exports.getAllServices = async (req, res) => {
    try {
        const services = await Service.find();
        return res.status(200).json({ message: "Services fetched successfully", success: true, data: services });
    }
    catch (error) {
        return res.status(500).json(
            { success: false, message: error.message, additionalInfo: "Errior while fetching services" }
        );
    }
}

exports.deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await Service.findByIdAndDelete(id);

        if (!service) {
            return res.status(404).json({ message: "Service not found", success: false });
        }

        return res.status(200).json({ message: "Service deleted successfully", success: true, data: service });
    }
    catch (error) {
        return res.status(500).json(
            { success: false, message: error.message, additionalInfo: "Errior whle deleting service" }
        );
    }
}

exports.updateService = async (req, res) => {
    try
    {
        const { id } = req.params;

        const serviceExist = await Service.findById(id);
        if(!serviceExist)
        {
            return res.status(404).json({ message: "Service not found", success: false });
        }

        const { name, description, price } = req.body;
        const updateOption = {};

        if(name) updateOption.name = name;
        if(description) updateOption.description = description;
        if(price) updateOption.price = price;

        if(Object.keys(updateOption).length === 0)
        {
            return res.status(400).json({ message: "No fields to update", success: false });
        }

        const service = await Service.findByIdAndUpdate(id, updateOption, { new: true });

        return res.status(200).json({ message: "Service updated successfully", success: true, data: service });
    }
    catch(error)
    {
        return res.status(500).json(
            { success: false, message: error.message, additionalInfo: "Error while updating service" }
        );
    }
}