import UsersModel from '../models/users.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await UsersModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getUsersById = async (req, res) => {
    try {
        const user = await UsersModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }   
        res.status(200).json(user);
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    try {
        const newUser = new UsersModel(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const updatedUser = await UsersModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }  
        );
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {   
        res.status(500).json({ message: error.message });
    }   
}

export const deleteUser = async (req, res) => {
    try {
        const deletedUser = await UsersModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteAllUsers = async (req, res) => {
    try {
        await UsersModel.deleteMany({});
        res.status(200).json({ message: "All users deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}